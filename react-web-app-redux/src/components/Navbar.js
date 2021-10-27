import React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'

const Navbar = (props) => {

    console.log(props);

    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="/" className="brand-logo">Anasayfa</a>
                <ul className="right">
                    <li><Link to="/">Anasayfa</Link></li>
                    <li><Link to="/about">Hakkımızda</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar);