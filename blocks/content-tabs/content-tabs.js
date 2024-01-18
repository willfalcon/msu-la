import viewportSize from 'viewport-size';
const contentTabs = document.querySelectorAll('.content-tabs');

contentTabs.forEach(contentTabs => {
  const tabs = contentTabs.querySelectorAll('.content-tab');
  const panels = contentTabs.querySelectorAll('.content-tab-content');

  panels.forEach(panel => {
    const size = panel.getBoundingClientRect();
    panel.style.setProperty('--height', `${size.height}px`);
    panel.classList.add('init');
  });

  if (viewportSize.getWidth() >= 768) {
    panels[0].classList.add('show');
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.querySelector(`#${panelId}`);
      if (panel.classList.contains('show')) {
        panel.classList.remove('show');
      } else {
        panels.forEach(panel => panel.classList.remove('show'));
        panel.classList.add('show');
      }
    });
  });
});
