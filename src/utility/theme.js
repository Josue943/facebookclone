const docRef = document.documentElement;

const getTheme = () => {
  const theme = JSON.parse(localStorage.getItem('theme'));
  if (theme) document.documentElement.setAttribute('data-theme', theme);
};

const setTheme = () => {
  const theme =
    docRef.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  docRef.setAttribute('data-theme', theme);
  localStorage.setItem('theme', JSON.stringify(theme));
};

export { getTheme, setTheme };
