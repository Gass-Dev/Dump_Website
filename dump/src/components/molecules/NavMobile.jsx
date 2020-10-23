//Imports
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo_dump.png';

import Iconreport from '../../assets/images/edit.svg';
import Iconprofil from '../../assets/images/user.svg';
// import iconregister from "../../assets/images/";
// import iconlogin from "../../assets/images/";
// import Logout from "../../assets/images/";

require('./_navMobile.scss');

const NavMobile = () => {

    const { state } = useContext(AuthContext);

    // const Logout = () => {
    //     localStorage.clear();
    //     window.location.href = "/";
    // };

    useEffect(() => {
        state.user && console.log(state.user.firstName);
        return () => {};
    }, [state]);
    
    if (state.isAuthenticated === true) {
        return (
          <>
            <nav className="navBar_navMobile">

                <div className="navBar_navMobile_logo">
                    <Link to="/" className="navBar_navMobile_logo_link">
                        <img className="navBar_navMobile_logo_link_image" src={Logo} alt="logo" />
                    </Link>
                </div>

                <div className="navBar_navMobile_nav">
                    <Link to="/post_report" className="navBar_navMobile_nav_post_report">
                        <img className="navBar_navMobile_nav_post_report_icon" src={Iconreport} alt="icon report"/>
                        <h2>Signaler</h2>
                    </Link>

                    <Link to="/login" className="navBar_navMobile_nav_profil">
                        <img className="navBar_navMobile_nav_profil_icon" src={Iconprofil} alt="icon profil"/> 
                        <h2>Mon compte</h2>
                    </Link>
                </div>

                {/* <Link to="/register" className="navBar_navMobile_nav_register">
                    <img className="navBar_navMobile_nav_register_icon" src={iconregister} alt="icon register"/>   
                    <h2>Inscription</h2>
                </Link> */}

                {/* <Link to="/login" className="navBar_navMobile_nav_login">
                    <img className="navBar_navMobile_nav_login_icon" src={iconlogin} alt="icon login"/> 
                    <h2>Connexion</h2>
                </Link> */}

                {/* <Link to="/logout" className="navBar_navMobile_nav_logout" onClick={ () => { Logout(); } }>
                    <img className="navBar_navMobile_nav_logout_icon" src={iconlogout} alt="icon logout"/> 
                    <h2>Logout</h2>
                </Link> */}

            </nav>
          </>
        );  
    }
}

export default NavMobile;