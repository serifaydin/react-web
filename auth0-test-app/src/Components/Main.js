import React,{Component} from "react";

export default class Main extends Component{
    render(){
        return(
            <div>
                Merhaba {this.props.isim}
                <hr/>
                Gizli sayfaya yönelmek için <a href="/gizli">tıkla</a>
                <hr/>
                Login Ol
                <br/>
                <button className="btn red" onClick={this.props.auth.login}>Login</button>
            </div>
        )
    }
}