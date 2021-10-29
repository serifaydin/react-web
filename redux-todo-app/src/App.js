import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from './Actions/actions'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

class App extends Component {
  render() {

    const {dispatch,eklenmisTodos}=this.props;

    return (
      <div className="App container">
        <AddTodo onAddClick={text => dispatch((addTodo(text)))}/>
        <TodoList todos={eklenmisTodos}/>
      </div>
    )
  }
}

function select(state) {
  return {
    eklenmisTodos: this.state.todos
  }
}

export default connect(select)(App);