function getThemes() {
  // let themes = '';
  // fetch('../themes/themes.json')
  //   .then((response) => JSON.parse(response))
  //   .then((json) => themes = json)
  //   .catch((error) => console.log(error));
  // return (theme) => themes[theme];
  return JSON.parse(`
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
    "mexican": {
      "bg-color": "#f8ad34",
      "main-color": "#b12189",
      "caret-color": "#eee",
      "sub-color": "#333",
      "sub-alt-color": "#b12189",
      "text-color": "#eee",
      "error-color": "#da3333"
    },
    "pink-lemonade": {
      "bg-color": "#f6d992",
      "main-color": "#f6a192",
      "caret-color": "#fcfcf8",
      "sub-color": "#f6b092",
      "sub-alt-color": "#f6cc93",
      "text-color": "#fcfcf8",
      "error-color": "#ff6f69"
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
    }
  }  
  `);
}

function changeTheme(theme) {
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

export default changeTheme;