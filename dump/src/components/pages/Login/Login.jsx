import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useAlert } from 'react-alert';
import { AuthContext } from '../../../App';

function Login(props) {
    const { dispatch } = useContext(AuthContext);
    const [login, setLogin] = useState(
        { email: '', password: '', isSubmitting: false, errorMessage: null, }
    );

    const [errorForm, setErrorForm] = useState(" ")

    const alert = useAlert()

    const handleChange = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        try {  
            e.preventDefault()
            setLogin({
                ...login,
                email: "",
                password:"",
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
                    dispatch({type:"LOGIN", payload:result}),
                    alert.show('Vous êtes connecté ;-)')
                    )
                }

        } catch(error){
            console.log(error.response)
            setLogin({
                ...login,
                isSubmitting: false,
                errorMessage: error.response,
            });
            setErrorForm(error.message)
        }
    };

    return (
        <form className="loginForm" method="POST" action="/login" onSubmit={handleSubmit}>

            <div>
                <h2>Bienvenue sur DUMP</h2>
                <p>Connect toi pour participer au nettoyage de ta ville</p>
            </div>

            <div className="loginForm_email">
                <p>Entre ton adresse mail pour te connecter</p>
                <input className="loginForm_email_input" type="email" id="email" placeholder="dump@mail.com" name="email" value={login.email} onChange={handleChange}/>
            </div>

            <div className="loginForm_password">
                <p>Et pour finir, entre ton mot de passe</p>
                <input type="password" id="pass" placeholder="Mot de passe" name="password" value={login.password} onChange={handleChange}/>
            </div>

            <div className="loginForm_error"> {errorForm} 
            </div>

            <button className="loginForm_submit" type="submit">Se connecter</button>

            <div>
                <p>Tu n'as pas encore de compte?</p>
                <Link to="/register" className="navBar_navDesktop_register">
                    <h2>S'inscrire</h2>
                </Link>

            </div>

            <div>
                {login.errorMessage}
            </div>
        </form>
    )
}

export default Login;