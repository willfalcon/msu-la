const contentTabs = document.querySelectorAll('.content-tabs');

contentTabs.forEach(contentTabs => {
  const tabs = contentTabs.querySelectorAll('.content-tab');
  const panels = contentTabs.querySelectorAll('.content-tab-content');
  panels[0].classList.add('show');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.querySelector(`#${panelId}`);
      panels.forEach(panel => panel.classList.remove('show'));
      panel.classList.add('show');
    });
  });
});
