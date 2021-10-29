import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" ref='input' />
                <a className="btn-floating btn-large red" onClick={(e) => this.handleClick(e)}>EKLE</a>
            </div>
        )
    }

    handleClick=(e)=>{
        const node = this.refs.input
        const text =node.value.trim()
        this.props.onAddClick(text)
        node.value=''
    }
}