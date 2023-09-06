import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { useState, useEffect } from 'react';
import { changeTheme } from './scripts/themeChanger';
import { Footer } from './components/Footer';

function App() {

  const DEFAULT_THEME = 'aether';
  const THEME_LOCAL_STORAGE = 'data-theme';
  let newAccess = false;

  const [theme, setTheme] = useState(() => {
    const dataTheme = localStorage.getItem(THEME_LOCAL_STORAGE);
    newAccess = dataTheme ? false : true;
    return dataTheme || DEFAULT_THEME;
  });

  useEffect(() => {
    try {
      changeTheme(theme);
      localStorage.setItem(THEME_LOCAL_STORAGE, theme);
    } catch (error) {
      changeTheme(DEFAULT_THEME);
      localStorage.setItem(THEME_LOCAL_STORAGE, DEFAULT_THEME);
    }
  }, [theme]);

  return (
      <div className="App">
        <NavBar theme={newAccess ? 'change me!' : theme} setTheme={setTheme} />
        <Home theme={theme} />
        <About />
        <Projects />
        <Contact />
        <Footer theme={theme} />
      </div>
  );
}

export default App;
