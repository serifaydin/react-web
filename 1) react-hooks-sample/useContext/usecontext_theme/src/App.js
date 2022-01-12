import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import ThemeContext, { themes } from './ThemeContext';
import React,{useState} from 'react'

function App() {

  const [theme,setTheme] = useState(themes.dark);

  const toogleTheme =()=>{
    theme === themes.dark 
    ? setTheme(themes.light)
    : setTheme(themes.dark)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <button onClick={toogleTheme}>Change Theme</button>
        <Layout />
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
