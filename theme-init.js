(() => {
  try {
    const storedTheme = localStorage.getItem('theme');
    const urlTheme = new URLSearchParams(window.location.search).get('theme');
    const theme = urlTheme === 'dark' || urlTheme === 'light' ? urlTheme : storedTheme;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme ? theme === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  } catch {
    /* keep the default light theme */
  }
})();
