import React, {useState, useContext} from 'react';
import './navbar.styles.scss';
import Toggle from "../toggleSwitch/toggleSwitch.component";
import {themes} from "../../context/ThemeContext";

const Navbar = () => {
    const [toggled, setToggled] = useState(false);
    const handleClick = () => {
        setToggled(s=> !s);
    }
    // const [theme,setTheme] = useState(themes.dark);
    //
    // const toggleTheme = () =>
    //     setToggled(s=> !s);
    // theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);


    return (
        <header className='navbar' data-type='navbar'>
            <div className='nav-title'>Git Search</div>
            <div className='nav-item'>Switch Theme</div>
            <Toggle toggled={toggled} onClick={handleClick}/>
        </header>
        )
}
export default Navbar;