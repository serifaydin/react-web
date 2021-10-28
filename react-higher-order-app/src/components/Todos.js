import React from 'react'
import Loading from './Loading'

class Todos extends React.Component{

    render(){
        return(
            <ol>
                {this.props.todos.map( x =>{
                    return <li key={x.id}>{x.title}</li>
                })}
            </ol>
        )
    }
}

export default Loading('todos',Todos);