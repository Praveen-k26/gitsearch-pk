import React from 'react';


export const themes = {
    dark: {
        color: 'white',
        background: 'black',
    },
    light:{
        color: 'black',
        background: '#8280b8'
    }
}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext