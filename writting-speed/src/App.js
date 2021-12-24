import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom'
import Results from './components/results/Results'
import SpeedCheck from './components/speedcheck/SpeedCheck'
import Challenges from './components/challenges/Challenges'

function App() {
  return (
    <div className="container pt-1">
       <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SpeedCheck}/>
          <Route exact path="/results" component={Results}/>
          <Route exact path="/challenges" component={Challenges}/>
          <Redirect to="/" component={SpeedCheck}/>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;