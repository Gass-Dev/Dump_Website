import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo_dump.png';
import Dechets from '../../assets/images/dechets.jpg';
// import IconLogin from '../../assets/images/user.svg';
// import IconRegister from '../../assets/images/register.svg';

require('./_homePublic.scss');

function HomePublic() {
    return (
        <section className='home'>

            <div className='home_navBar_logo'>
                <Link to='/' className='home_navBar_logo'>
                    <img className='home_navBar_logo_image' src={Logo} alt='logo' />
                </Link>
            </div>

            <div className='home_navBar_direction'>
                <Link to='/login' className='home_navBar_direction_login'>
                    <button>
                        {/* <img
                            className='home_navBar_direction_login_icon'
                            src={IconLogin}
                            alt='icon login'
                        /> */}
                        <h2>SE CONNECTER</h2>
                    </button>
                </Link>

                <Link to='/register' className='home_navBar_direction_register'>
                    <button>
                        {/* <img
                            className='home_navBar_direction_register_icon'
                            src={IconRegister}
                            alt='icon register'
                        /> */}
                        <h2>S'INSCRIRE</h2>
                    </button>
                </Link>
            </div>

            <div className='home_content'>
                <div className='home_content_text'>
                    <h1>Bienvenue sur DUMP</h1>
                    <p>Tu souhaites être un acteur d'une ville propre?</p>
                    <p>C'est ici que tu pourras faire une bonne action.</p>
                </div>

                <div className='home_content_image'>
                    <img className='home_content_image_dechets' src={Dechets} alt='dechets'/>
                </div>

            </div>
        </section>
    );
}

export default HomePublic;
