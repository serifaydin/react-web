import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todos from './components/Todos'
import axios from 'axios';
import BlogPost from './components/BlogPost';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
    }
  }

  getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.data)
      .then(res => {
        setTimeout(() => {
          this.setState({
            todos: [...res]
          })
        },3000)
      })
  }

  getPost = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.data)
      .then(res => {
        setTimeout(() => {
          this.setState({
            post: res
          })
        },5000)
      })
  }

  componentDidMount() {
    this.getData();
    this.getPost();
  }

  render() {
    return (
      <div className="App">
        <BlogPost post={this.state.post}/>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
