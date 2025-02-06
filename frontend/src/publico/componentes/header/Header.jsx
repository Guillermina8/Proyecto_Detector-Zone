import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "../navMenuPublico/NavMenu";
import "./Header.css";
import Logo from "../../../assets/Logo_fondo.png";

const Header = () => {
    return (
        <header className="dashboard-header">
            <div className="logo">
                <Link to="/"> {/* Redirige a la página principal */}
                    <img src={Logo} alt="logo" className="logo-img" />
                </Link>
            </div>
            <NavMenu />
        </header>
    );
}
export default Header;
