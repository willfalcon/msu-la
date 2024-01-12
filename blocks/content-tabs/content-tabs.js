const contentTabs = document.querySelectorAll('.content-tabs');

contentTabs.forEach(contentTabs => {
  const tabs = contentTabs.querySelectorAll('.content-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.querySelector(`#${panelId}`);
      console.log(panel);
    });
  });
});
