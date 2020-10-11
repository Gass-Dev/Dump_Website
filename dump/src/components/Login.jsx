// Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useAlert } from 'react-alert';

function Login(props) {
    const [login, setLogin] = useState(
        { email: '', password: '' }
    );

    const [errorForm, setErrorForm] = useState(" ")

    const alert = useAlert()

    const handleChange = (event) => {
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios({
            method:'post',
            headers: { 'Content-Type': 'application/json' },
            url:'http://localhost:8000/api/users/login',
            data: JSON.stringify(login),
        })
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                setLogin({email:'', password:'' })
                alert.show('Vous êtes connecté ;-)')
            })
            .catch((error) => {
                setErrorForm(error.message)
            })
    }

    return (
        <form className="loginForm" method="POST" action="/login" onSubmit={handleSubmit}>

            <div>
                <h2>Bienvenue sur DUMP</h2>
                <p>Connect toi pour participer au nettoyage de ta ville</p>
            </div>

            <div className="loginForm_email">
                <p>Entre ton adresse mail pour te connecter</p>
                <input className="loginForm_email_input" type="email" id="email" placeholder="dump@mail.com" name="email" value={login.email} onChange={handleChange} required />
            </div>

            <div className="loginForm_password">
                <p>Et pour finir, entre ton mot de passe</p>
                <input type="password" id="pass" placeholder="Mot de passe" name="password" value={login.password} onChange={handleChange} required />
            </div> 

            <button className="loginForm_submit" type="submit">Se connecter</button>

            <div>
                <p>Tu n'as pas encore de compte?</p>
                <Link to="/register" className="navBar_navDesktop_register">
                    <h2>S'inscrire</h2>
                </Link>

            </div>

            <div>
                {errorForm}
            </div>
        </form>
    )
}

export default Login;