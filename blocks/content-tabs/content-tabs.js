import viewportSize from 'viewport-size';
const contentTabs = document.querySelectorAll('.content-tabs');

wp.domReady(() => {
  const mobile = viewportSize.getWidth() < 768;
  contentTabs.forEach(contentTabs => {
    const tabs = contentTabs.querySelectorAll('.content-tab');
    const panels = contentTabs.querySelectorAll('.content-tab-content');
    let disabled = false;

    panels.forEach(panel => {
      const size = panel.getBoundingClientRect();
      panel.style.setProperty('--height', `${size.height}px`);
      panel.classList.add('init');
    });

    // if (!mobile) {
    panels[0].classList.add('show');
    openPanel(panels[0]);
    // }
    tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        if (disabled) {
          return;
        }
        const panelId = tab.getAttribute('aria-controls');
        const panel = document.querySelector(`#${panelId}`);
        // if (mobile) {
        //   if (panel.classList.contains('show')) {
        //     panel.classList.remove('show');
        //   } else {
        //     panel.classList.add('show');
        //   }
        // } else {
        if (!panel.classList.contains('open')) {
          disabled = true;
          const prevOpenPanel = Array.from(panels).filter(panel => panel.classList.contains('open'));
          console.dir(tab);
          if (prevOpenPanel[0]) {
            closePanel(prevOpenPanel[0]);
            setTimeout(() => {
              openPanel(panel);
            }, delay);
          } else {
            openPanel(panel);
          }
          setTimeout(() => {
            disabled = false;
          }, delay * 2 + transition);
        }
        // }
      });
    });
  });
});

const transition = 450;
// const transition = 1000;
const delay = 150;
// const delay = 250;
const transform = 100;

function openPanel(panel) {
  panel.style.display = 'block';
  const columns = panel.querySelectorAll('.wp-block-column');
  columns.forEach((column, index) => {
    column.style.opacity = 0;
    column.style.transform = `translateY(${transform}px)`;
    column.style.transition = `${transition / 1000}s`;
    setTimeout(() => {
      column.style.opacity = 1;
      column.style.transform = 'translateY(0px)';
    }, delay * index + 1);
  });
  panel.classList.remove('closed');
  panel.classList.add('opening');
  setTimeout(() => {
    panel.classList.remove('opening');
    panel.classList.add('open');
  }, transition + delay * 2);
}

function closePanel(panel) {
  panel.classList.remove('open');
  panel.classList.add('closing');
  const columns = panel.querySelectorAll('.wp-block-column');
  columns.forEach((column, index) => {
    setTimeout(() => {
      column.style.opacity = 0;
      column.style.transform = `translateY(${transform}px)`;
      setTimeout(() => {
        column.style.transition = 'none';
      }, transition);
    }, delay * index);
  });

  setTimeout(() => {
    panel.style.display = 'none';
    panel.classList.remove('closing');
    panel.classList.add('closed');
  }, transition + delay * 2);
}
