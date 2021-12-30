import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Results from './components/results/Results';
import Challenges from './components/challenges/Challenges';
import SpeedCheck from './components/speedcheck/SpeedCheck';
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContext.Consumer>{(context) => {
      const {isDarkTheme, dark, light} = context;
      const theme = isDarkTheme ? dark : light;
      return (
        <div className={`app-layout ${theme.app}`}>
          <div className="container pt-1">
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path="/results" component={Results} />
                <Route exact path="/challenges" component={Challenges} />
                <Route exact path="/" component={SpeedCheck} />
                <Redirect to="/" />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      )
    }}

    </ThemeContext.Consumer>
  );
}

export default App;