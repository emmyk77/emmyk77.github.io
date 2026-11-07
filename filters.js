const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-tool]');

for (const button of filters) {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    for (const project of projects) {
      project.hidden = filter !== 'All' && project.dataset.tool !== filter;
    }
    for (const option of filters) {
      option.setAttribute('aria-pressed', String(option === button));
    }
  });
}
