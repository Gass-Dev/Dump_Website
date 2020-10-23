import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext }  from '../../App';
import Logo from '../../assets/images/logo-bin.svg';

require('./_navDesktop.scss');

const NavDesktop = () => {

    const { state } = useContext(AuthContext);

    // const Logout = () => {
    //     localStorage.clear();
    //     window.location.href = "/";
    // };

    useEffect(() => {
        state.user && console.log(state.user.firstName);
        return () => { };
    }, [state]);

    if (state.isAuthenticated === true) {
        return (
            <>
                <nav className="navBar_navDesktop">

                    <div className="navBar_navDesktop_logo">
                        <Link to="/" className="navBar_navDesktop_logo_link">
                            <img className="navBar_navDesktop_logo_link_image" src={Logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="navBar_navDesktop_nav">
                        <Link to="/post_report" className="navBar_navDesktop_nav_post_report">
                            <h2>Signaler</h2>
                        </Link>

                        <Link to="/login" className="navBar_navDesktop_nav_profil">
                            <h2>Mon compte</h2>
                        </Link>
                    </div>

                    {/* <Link to="/register" className="navBar_navDesktop_nav_register">  
                    <h2>Inscription</h2>
                </Link> */}

                    {/* <Link to="/login" className="navBar_navDesktop_nav_login">
                    <h2>Connexion</h2>
                </Link> */}

                    {/* <Link to="/logout" className="navBar_navDesktop_nav_logout" onClick={ () => { Logout(); } }> 
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


export default NavDesktop;