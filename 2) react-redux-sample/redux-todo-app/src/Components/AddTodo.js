import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" id="text1" />
                <a className="btn-floating btn-large red" onClick={(e) => this.handleClick(e)}>EKLE</a>
            </div>
        )
    }

    handleClick=(e)=>{
        const txt =document.getElementById('text1');
        this.props.onAddClick(txt.value)
        txt.value="";
    }
}