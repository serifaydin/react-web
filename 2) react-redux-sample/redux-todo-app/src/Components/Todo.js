import React,{Component} from 'react'

export default class Todo extends Component{
    render(){
        return(
                <li className="collection-item">
                    {this.props.text}
                </li>
        )
    }
}