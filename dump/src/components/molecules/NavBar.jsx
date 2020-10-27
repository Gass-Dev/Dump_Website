import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import Logo from '../../assets/images/logo-bin.svg';

import Iconreport from '../../assets/images/edit.svg';
// import Iconprofil from '../../assets/images/user.svg';
// import iconLogout from "../../assets/images/logout.svg";

require('./_navBar.scss');

const NavBar = () => {
    const { state } = useContext(AuthContext);

    useEffect(() => {
        return () => { };
    }, [state]);

    if (state.isAuthenticated === true) {
        return (
            <>
                <nav className="navBar">

                    <div className="navBar_logo">
                        <Link to="/" className="navBar_logo_link">
                            <img className="navBar_logo_link_image" src={Logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="navBar_direction">
                        <Link to="/post_report" className="navBar_direction_postReport">
                            <img className="navBar_direction_postReport_icon" src={Iconreport} alt="icon report" />
                            <h2>Signaler</h2>
                        </Link>

                        {/* <Link to="/profil" className="navBar_direction_profil">
                            <img className="navBar_direction_profil_icon" src={Iconprofil} alt="icon profil" />
                            <h2>Mon compte</h2>
                        </Link> */}
                    </div>

                    {/* <Link to="/logout" className="navBar_navMobile_nav_logout" onClick={ () => { Logout(); } }>
                    <img className="navBar_navMobile_nav_logout_icon" src={iconLogout} alt="icon logout"/> 
                    <h2>Logout</h2>
                </Link> */}

                </nav>
            </>
        );
    }
    return (
        <div>
            
        </div>
    );
}

export default NavBar;