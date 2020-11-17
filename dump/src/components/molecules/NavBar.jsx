import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import Logo from '../../assets/images/logo-bin.svg';

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
                        <Link to="post_reports/post" className="navBar_direction_postReport">
                            <h2>Signaler</h2>
                        </Link>

                    </div>

                    

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