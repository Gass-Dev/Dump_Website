import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo_dump.png';
import World from '../../assets/images/world.svg';

require('./_homePublic.scss');

function HomePublic() {
    return (
        <section className='home'>
            <div className='home_navBar'>
                <Link to='/' className='home_navBar_image'>
                    <img className='home_navBar_image' src={Logo} alt='logo' />
                </Link>
            </div>

            <div className='home_navBar_direction'>

                <Link to='/register' className='home_navBar_direction_register'>
                    <button>S'inscrire</button>
                </Link>

                <Link to='/login' className='home_navBar_direction_login'>
                    <button>Connexion</button>
                </Link>

            </div>

            <div className='home_content'>
                <div className='home_content_text'>
                    <h2>DUMP</h2>
                    <h2>Soyez un héro environemental !</h2>
                    <div className='home_content_text_description'>
                        <h4>Tu souhaites être un acteur d'une ville propre?</h4>
                        <h4>C'est ici que tu pourras faire une bonne action.</h4>
                    </div>
                </div>

                <div className='home_content_image'>
                    <img className='home_content_image_dechets' src={World} alt='dechets'/>
                </div>
            </div>
        </section>
    );
}

export default HomePublic;