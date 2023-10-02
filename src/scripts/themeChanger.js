import themes from '../assets/data/themes.json';

export const getThemesName = () => Object.keys(themes).sort();

export const changeTheme = (theme) => {
  let myTheme = themes[theme];
  let root = document.documentElement; 
  root.style.setProperty('--bg-color', myTheme["bg-color"]);
  root.style.setProperty('--main-color', myTheme["main-color"]);
  root.style.setProperty('--caret-color', myTheme["caret-color"]);
  root.style.setProperty('--sub-color', myTheme["sub-color"]);
  root.style.setProperty('--sub-alt-color', myTheme["sub-alt-color"]);
  root.style.setProperty('--text-color', myTheme["text-color"]);
  root.style.setProperty('--error-color', myTheme["error-color"]);
}