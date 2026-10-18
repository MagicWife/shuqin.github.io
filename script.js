const filters = document.querySelector('.filters');
const papers = [...document.querySelectorAll('.paper')];
if (filters) {
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const selected = button.dataset.filter;
    filters.querySelectorAll('button').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    let count = 0;
    papers.forEach((paper) => {
      paper.hidden = selected !== 'all' && paper.dataset.kind !== selected;
      if (!paper.hidden) count += 1;
    });
    document.getElementById('filter-status').textContent = `${count} publications shown.`;
  });
}
