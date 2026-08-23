const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const graph = document.querySelector('[data-activity-graph]');
const viewToggle = document.querySelector('[data-view-toggle]');
const projectList = document.querySelector('[data-project-list]');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '◐' : '◑';
  localStorage.setItem('pk-cv-theme', theme);
}

const savedTheme = localStorage.getItem('pk-cv-theme');
if (savedTheme) setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
});

const activityPattern = [
  0, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 3, 0, 1, 0, 2, 0, 0, 1, 0, 0,
  0, 2, 0, 0, 1, 3, 0, 0, 0, 1, 0, 2, 0, 0, 3, 1, 0, 0, 2, 0, 1,
  0, 3, 0, 2, 0, 0, 1, 0, 3, 0, 2, 1, 0, 0, 4, 2, 0, 1, 3, 0, 2,
  0, 1, 0, 3, 2, 0, 4, 1, 0, 2, 3, 0, 1, 4, 2, 0, 3, 1, 4, 2, 0,
  3, 1, 4, 2, 3, 0, 4, 1, 2, 3, 4, 0, 1, 3, 2, 4, 1, 0, 3, 4, 2,
  1, 4, 3, 0, 2, 4, 1, 3, 2, 4, 0, 1, 3, 2, 4, 1, 0, 2, 3, 4, 0,
  1, 2, 3, 4, 1, 0, 2, 3, 1, 4, 2, 0, 3, 4, 1, 2, 3, 0, 4, 1, 2,
  3, 4, 0, 1, 2, 3, 1, 4, 2, 0, 3, 4, 1, 2, 3, 0, 4, 1, 2, 3, 4,
  0, 1, 2, 3, 1, 4, 2, 0, 3, 4, 1, 2, 3, 0, 4, 1, 2, 3, 4, 0, 1,
  2, 3, 1, 4, 2, 0, 3, 4, 1, 2, 3, 0, 4, 1, 2, 3, 4, 0, 1, 2, 3,
  1, 4, 2, 0, 3, 4, 1, 2, 3, 0, 4, 1, 2, 3, 4, 0, 1, 2, 3, 1, 4,
  2, 0, 3, 4, 1, 2, 3, 0, 4, 1, 2, 3, 4, 0, 1, 2, 3
];

activityPattern.forEach((level) => {
  const cell = document.createElement('span');
  cell.dataset.level = String(level);
  graph.append(cell);
});

viewToggle.addEventListener('click', () => {
  const compact = projectList.classList.toggle('is-compact');
  viewToggle.classList.toggle('is-compact', compact);
  viewToggle.setAttribute('aria-label', compact ? 'Show project descriptions' : 'Toggle compact project view');
});
