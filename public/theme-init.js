(() => {
  try {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  } catch {
    /* keep the default light theme */
  }
})();
