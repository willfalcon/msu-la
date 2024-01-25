import viewportSize from 'viewport-size';
const contentTabs = document.querySelectorAll('.content-tabs');

const mobile = viewportSize.getWidth() < 768;
wp.domReady(() => {
  contentTabs.forEach(contentTabs => {
    const tabs = contentTabs.querySelectorAll('.content-tab');
    const panels = contentTabs.querySelectorAll('.content-tab-content');
    let disabled = false;

    panels.forEach((panel, index) => {
      const size = panel.getBoundingClientRect();
      panel.style.setProperty('--height', `${size.height}px`);
      panel.dataset.index = index;
      panel.classList.add('init');
    });

    // if (!mobile) {
    panels[0].classList.add('show');
    openPanel(panels[0]);
    selectTab(panels[0]);
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

          if (prevOpenPanel[0]) {
            closePanel(prevOpenPanel[0], panel);
            unSelectTab(prevOpenPanel[0]);
            selectTab(panel);
            setTimeout(() => {
              openPanel(panel, prevOpenPanel[0]);
            }, delay);
          } else {
            openPanel(panel);
            selectTab(panel);
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

function selectTab(panel) {
  const button = document.getElementById(panel.getAttribute('aria-labelledby'));
  button.ariaSelected = true;
}

const orderNumber = classList => {
  if (classList.contains('mobile-order-1')) return 0;
  if (classList.contains('mobile-order-2')) return 1;
  if (classList.contains('mobile-order-3')) return 2;
  return -1;
};
function openPanel(panel, prevPanel) {
  panel.style.display = 'block';
  const columns = panel.querySelectorAll('.wp-block-column');
  columns.forEach((column, index) => {
    const order = orderNumber(column.classList);
    const multiplier = order >= 0 && mobile ? order : index;
    column.style.opacity = 0;
    if (mobile) {
      if (prevPanel) {
        const panelIndex = parseInt(panel.dataset.index);
        const prevPanelIndex = parseInt(prevPanel.dataset.index);
        if (panelIndex > prevPanelIndex) {
          column.style.transform = `translateX(${transform}px)`;
        } else {
          column.style.transform = `translateX(-${transform}px)`;
        }
      }
    } else {
      column.style.transform = `translateY(${transform}px)`;
    }
    column.style.transition = `${transition / 1000}s`;
    setTimeout(() => {
      column.style.opacity = 1;
      column.style.transform = 'translateY(0px)';
    }, delay * multiplier + 1);
  });
  panel.classList.remove('closed');
  panel.classList.add('opening');
  setTimeout(() => {
    panel.classList.remove('opening');
    panel.classList.add('open');
  }, transition + delay * 2);
}

function unSelectTab(panel) {
  const button = document.getElementById(panel.getAttribute('aria-labelledby'));
  button.ariaSelected = false;
}
function closePanel(panel, newPanel) {
  panel.classList.remove('open');
  panel.classList.add('closing');
  const columns = panel.querySelectorAll('.wp-block-column');
  columns.forEach((column, index) => {
    const order = orderNumber(column.classList);
    const multiplier = order >= 0 && mobile ? order : index;
    setTimeout(() => {
      column.style.opacity = 0;
      if (mobile) {
        if (newPanel) {
          const panelIndex = parseInt(panel.dataset.index);
          const newPanelIndex = parseInt(newPanel.dataset.index);
          if (panelIndex > newPanelIndex) {
            column.style.transform = `translateX(${transform}px)`;
          } else {
            column.style.transform = `translateX(-${transform}px)`;
          }
        }
      } else {
        column.style.transform = `translateY(${transform}px)`;
      }
      setTimeout(() => {
        column.style.transition = 'none';
      }, transition);
    }, delay * multiplier);
  });

  setTimeout(() => {
    panel.style.display = 'none';
    panel.classList.remove('closing');
    panel.classList.add('closed');
  }, transition + delay * 2);
}
