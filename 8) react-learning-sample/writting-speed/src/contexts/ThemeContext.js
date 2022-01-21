import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

const initState = {
    isDarkTheme: false,
    dark: {
        app: "bg-dark",
        navbar: "navbar-light bg-warning",
        toggleButton: "btn-outline-dark",
        card: "bg-open-gray border-danger text-white",
        table: "table-dark"
    },
    light: {
        app: "bg-light",
        navbar: "navbar-dark bg-dark",
        toggleButton: "btn-outline-light",
        card: "bg-light border-info",
        table: "table-light"
    }
}

class ThemeContextProvider extends Component {
    state = initState


    componentDidMount() {
        const data = localStorage.getItem('theme');
        this.setState(data ? JSON.parse(data) : initState)
    }

    componentDidUpdate() {
        localStorage.setItem('theme', JSON.stringify(this.state))
    }

    getTheme = () => {
        const { isDarkTheme, dark, light } = this.state;
        return isDarkTheme ? dark : light
    }
    changeTheme = () => {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={
                {
                    ...this.state,
                    getTheme: this.getTheme,
                    changeTheme: this.changeTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;