import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useAlert } from 'react-alert';
import { AuthContext } from '../../../App';

import Logo from '../../../assets/images/logo_dump.png';

require('./_login.scss');

function Login() {
    const history = useHistory();
    const { dispatch } = useContext(AuthContext);
    const [login, setLogin] = useState(
        { email: '', password: '', isSubmitting: false, errorMessage: null, }
    );

    const alert = useAlert()

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {  
            e.preventDefault()
            setLogin({
                ...login,
                email: '',
                password:'',
                isSubmitting: true,
            });
            const result = await Axios({
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                url: 'http://localhost:8000/api/users/login',
                data: JSON.stringify(login),
            });

            if (result.status===200){
                return (
                    dispatch({type:'LOGIN', payload:result}),
                    alert.show('Vous êtes connecté ;-)'),
                    history.push('/')
                    )
                };

        } catch(error){
            setLogin({
                ...login,
                isSubmitting: false,
                errorMessage: error.response.data.error,
            });
        }
    };

    return (
        <form className='loginForm' method='POST' action='/login' onSubmit={handleSubmit}>

            <div className="loginForm_logo">
                <Link to='/' className="loginForm_logo_link">
                    <img className="loginForm_logo_link" src={Logo} alt='logo' />
                </Link>
            </div>

            <div className='loginForm_welcome'>
                <h2>Connexion</h2>
            </div>

            <div className='loginForm_email'>
                <p>Entre ton adresse mail pour te connecter</p>
                <input className='loginForm_email_input' type='email' id='email' placeholder='dump@mail.com' name='email' value={login.email} onChange={handleChange}/>
            </div>

            <div className='loginForm_password'>
                <p>Et pour finir, entre ton mot de passe</p>
                <input type='password' id='pass' placeholder='Mot de passe' name='password' value={login.password} onChange={handleChange}/>
            </div>

            <div className='loginForm_error'> {login.errorMessage}
            </div>

            <div className="loginForm_submit">
                <button className="loginForm_submit_button" type="submit">Se connecter</button>
            </div>

            <div className="loginForm_register">
                <Link to='/register' className='loginForm_register_button'>
                    <button >S'inscrire</button>
                </Link>
                <p>Tu n'as pas encore de compte?</p>

            </div>
        </form>
    )
}

export default Login;