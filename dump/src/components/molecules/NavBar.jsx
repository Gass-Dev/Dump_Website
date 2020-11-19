import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import Logo from '../../assets/images/logo_dump.png';

require('./_navBar.scss');

const NavBar = () => {
    const { state } = useContext(AuthContext);

    useEffect(() => {
        return () => { };
    }, [state]);

    if (state.isAuthenticated === true) {
        return (
            <>
                <nav className="auth_navBar">

                    <div className="auth_navBar_logo">
                        <Link to="/" className="auth_navBar_logo_link">
                            <img className="auth_navBar_logo_link" src={Logo} alt="logo" />
                        </Link>
                    </div>

                <div className="auth_navBar_button">

                    <div className="auth_navBar_button_report">
                        <Link to="/post_reports/post" className="auth_navBar_button_report_link">
                            <button>Signaler</button>
                        </Link>
                    </div>

                </div>
                    
                </nav>
            </>
        );
    }
    return (
        <nav></nav>
    );
}

export default NavBar;