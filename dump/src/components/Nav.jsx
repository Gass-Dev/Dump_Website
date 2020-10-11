//Imports
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo_dump.png';

const Nav = () => {
    return (
        <div className="navBar">

            <nav className="navBar_topNavMobile">
                <Link to="/" className="navBar_topNavMobile_logo">
                    <img className="navBar_topNavMobile_logo_image" src={Logo} alt="logo" />
                </Link>
            </nav>

            <nav className="navBar_navMobile">
                <Link to="/post_report" className="navBar_navMobile_post_report">
                    <h2>Signaler</h2>
                </Link>
                <Link to="/register" className="navBar_navMobile_register">
                    <h2>Inscription</h2>
                </Link>
                <Link to="/login" className="navBar_navMobile_login">
                    <h2>Mon compte / Connexion</h2>
                </Link>
            </nav>

            <nav className="navBar_navDesktop">
                <Link to="/" className="navBar_navDesktop_logo">
                    <img className="navBar_navDesktop_logo_image" src={Logo} alt="logo" />
                </Link>
                <Link to="/post_report" className="navBar_navDesktop_post_report">
                    <h2>Signaler</h2>
                </Link>
                <Link to="/register" className="navBar_navDesktop_register">
                    <h2>Inscription</h2>
                </Link>
                <Link to="/login" className="navBar_navDesktop_login">
                    <h2>Mon compte / Connexion</h2>
                </Link>
            </nav>

        </div>
    )
}

export default Nav;