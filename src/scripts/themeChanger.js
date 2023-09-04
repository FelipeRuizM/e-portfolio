export const getThemes = () => JSON.parse(`
  {
    "aether": {
      "bg-color": "#101820",
      "main-color": "#eedaea",
      "caret-color": "#eedaea",
      "sub-color": "#cf6bdd",
      "sub-alt-color": "#292136",
      "text-color": "#eedaea",
      "error-color": "#ff5253"
    },
    "matrix": {
      "bg-color": "#000000",
      "main-color": "#15ff00",
      "caret-color": "#15ff00",
      "sub-color": "#006500",
      "sub-alt-color": "#032000",
      "text-color": "#d1ffcd",
      "error-color": "#da3333"
    },
    "brazil": {
      "bg-color": "#00a859",
      "main-color": "#ffcc29",
      "caret-color": "#0033a0",
      "sub-color": "#0033b0",
      "sub-alt-color": "#000000",
      "text-color": "#ffffff",
      "error-color": "#ff0000"
    },
    "80's after dark": {
      "bg-color": "#1b1d36",
      "main-color": "#fca6d1",
      "caret-color": "#99d6ea",
      "sub-color": "#99d6ea",
      "sub-alt-color": "#17182c",
      "text-color": "#e1e7ec",
      "error-color": "#fffb85"
    },
    "cyberspace": {
      "bg-color": "#181c18",
      "main-color": "#00ce7c",
      "caret-color": "#00ce7c",
      "sub-color": "#9578d3",
      "sub-alt-color": "#131613",
      "text-color": "#c2fbe1",
      "error-color": "#ff5f5f"
    },
    "dracula": {
      "bg-color": "#282a36",
      "main-color": "#bd93f9",
      "caret-color": "#bd93f9",
      "sub-color": "#6272a4",
      "sub-alt-color": "#20222c",
      "text-color": "#f8f8f2",
      "error-color": "#ff5555"
    },
    "horizon": {
      "bg-color": "#1c1e26",
      "main-color": "#c4a88a",
      "caret-color": "#bbbbbb",
      "sub-color": "#db886f",
      "sub-alt-color": "#17181f",
      "text-color": "#bbbbbb",
      "error-color": "#d55170"
    },
    "retrocast": {
      "bg-color": "#07737a",
      "main-color": "#88dbdf",
      "caret-color": "#88dbdf",
      "sub-color": "#f3e03b",
      "sub-alt-color": "#26858b",
      "text-color": "#ffffff",
      "error-color": "#ff585d"
    },
    "shadow": {
      "bg-color": "#000",
      "main-color": "#eee",
      "caret-color": "#eee",
      "sub-color": "#444",
      "sub-alt-color": "#171717",
      "text-color": "#eee",
      "error-color": "#fff"
    },
    "dollar": {
      "bg-color": "#e4e4d4",
      "main-color": "#6b886b",
      "caret-color": "#424643",
      "sub-color": "#8a9b69",
      "sub-alt-color": "#cbd0bf",
      "text-color": "#555a56",
      "error-color": "#d60000"
    },
    "earthsong": {
      "bg-color": "#292521",
      "main-color": "#509452",
      "caret-color": "#1298ba",
      "sub-color": "#f5ae2d",
      "sub-alt-color": "#1d1b18",
      "text-color": "#e6c7a8",
      "error-color": "#7e2a33"
    },
    "laser": {
      "bg-color": "#221b44",
      "main-color": "#009eaf",
      "caret-color": "#009eaf",
      "sub-color": "#b82356",
      "sub-alt-color": "#1e173b",
      "text-color": "#dbe7e8",
      "error-color": "#a8d400"
    },
    "husqy": {
      "bg-color": "#000000",
      "main-color": "#c58aff",
      "caret-color": "#c58aff",
      "sub-color": "#972fff",
      "sub-alt-color": "#1e001e",
      "text-color": "#ebd7ff",
      "error-color": "#da3333"
    }
  }  
  `);

export const getThemesName = () => Object.keys(getThemes()).sort();

export const changeTheme = (theme) => {
  let themes = getThemes();
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