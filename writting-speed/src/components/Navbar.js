import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">YazTest</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Ana Sayfa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/results">Sonuçlarim</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/challenges">Metinler</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    )
};

export default Navbar;
