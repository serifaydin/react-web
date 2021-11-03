import React,{Component} from "react";

export default class Gizli extends Component{
    render(){
        return(
            <div>
                Gizli Component
                <br/>
                <button className="btn grey" onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}