import React,{Component} from 'react';
import Form from './Components/Form'
import Title from './Components/Title'
import Weather from './Components/Weather'

const API_KEY = "a24bc5c35129118748fa2a627305cd00";

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&appid=${API_KEY}`)
    const data = await api_call.json();

    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <h1>Hava Durumu Uygulaması</h1>

        <Title />
        <Weather />
        <Form getWeather={this.getWeather} />
      </div>
    )
  }
}

export default App;