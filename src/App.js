import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { useState, useEffect } from 'react';
import  changeTheme from './scripts/themeChanger';

function App() {

  const [theme, setTheme] = useState('aether');

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
      <div className="App">
        <NavBar theme={theme} setTheme={setTheme} />
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
  );
}

export default App;
