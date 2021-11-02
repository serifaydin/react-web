import React, { Component } from 'react'
import Main from './Components/Main';
import Gizli from './Components/Gizli';
import NotFound from './Components/NotFound'
import CallBack from './Components/CallBack'

class App extends Component {
  render() {

    let mainComponent = "";

    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props}/>;
        break;
      case "gizli":
        mainComponent = <Gizli />
        break;
        case "callback":
        mainComponent = <CallBack />
        break;
        default:
        mainComponent = <NotFound />;
    }

    return (
      <div className="App container">
        {this.props.isim} Uygulaması
        {mainComponent}
      </div>
    )
  }
}

export default App;