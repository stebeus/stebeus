'use strict';

const ThemeManager = (() => {
  const root = document.documentElement;
  const switcher = document.querySelector('#theme-switch');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const resolve = (theme) =>
    theme ||
    localStorage.getItem('theme') ||
    (prefersDark.matches ? 'dark' : 'light');
  const apply = (theme) => root.setAttribute('data-theme', resolve(theme));

  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) apply(e.matches ? 'dark' : 'light');
  });

  switcher.addEventListener('click', () => {
    const nextTheme =
      root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    apply(nextTheme);
  });

  apply();
})();
