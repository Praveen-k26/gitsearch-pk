import React, {useState, useContext} from 'react';
import Layout from "./components/Layout/layout.component";
import ThemeContext, {themes} from './context/ThemeContext'

import './App.css';
import Toggle from "./components/toggleSwitch/toggleSwitch.component";



function App() {

    const [theme,setTheme] = useState(themes.light);
    const [toggled, setToggled] = useState(false);
    const handleClick = () => {
        setToggled(s=> !s);
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    }

    return (
        <div className="App" style={theme}>
            <header className='navbar' data-type='navbar'>
                <div className='nav-title'>Git Search</div>
                <div className='nav-item'>Switch Theme</div>
                <Toggle toggled={toggled} onClick={handleClick}/>
            </header>
            <ThemeContext.Provider value={themes.dark} >
            <Layout/>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
