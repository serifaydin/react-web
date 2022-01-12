import React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'

const Navbar = (props) => {

    console.log(props);

    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="/" className="brand-logo">Anasayfa</a>
                <ul className="right">
                    <li><NavLink to="/" activeStyle={{
    fontWeight: "bold",
    backgroundColor: "blue"
  }}>Anasayfa</NavLink></li>
                    <li><NavLink to="/about" activeStyle={{
    fontWeight: "bold",
    backgroundColor: "blue"
  }}>Hakkımızda</NavLink></li>
                    <li><NavLink to="/contact" activeStyle={{
    fontWeight: "bold",
    backgroundColor: "blue"
  }}>İletişim</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar);