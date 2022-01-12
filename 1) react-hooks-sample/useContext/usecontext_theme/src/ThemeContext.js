import React from "react";

export const themes ={
    dark: {
        color: 'white',
        backgroundColor:'black',
        padding:'5px'
    },

    light: {
        color: 'black',
        backgroundColor:'white',
        padding:'5px'
    }
}

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;