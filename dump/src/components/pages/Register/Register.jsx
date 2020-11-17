// Imports
import React, { useState } from 'react';

// import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useAlert } from 'react-alert';



require('./_register.scss');

function Register(props) {
    const [register, setRegister] = useState(
        { userName: '', email: '', password: '', firstName: '', lastName: '', numberStreet: '', street: '', postalCode: '', city: '' }
    );

    const [errorForm, setErrorForm] = useState(" ")

    const alert = useAlert()

    const handleChange = (event) => {
        setRegister({ ...register, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:8000/api/users/register', register)
            .then((response) => {
                setRegister({ userName: '', email: '', password: '', firstName: '', lastName: '', numberStreet: '', street: '', postalCode: '', city: '' })
                alert.show('Inscription validée!')
            })
            .catch((error) => {
                // console.log(error.response)
                setErrorForm(error.response.data.error)
            })
    }

    return (
        <form className="registerForm" method="POST" action="/register" onSubmit={handleSubmit}>

            {/* <div className="registerForm_logo">
                <Link to='/' className="registerForm_logo_link">
                    <img className="registerForm_logo_link" src={Logo} alt='logo' />
                </Link>
            </div> */}

            <div className="registerForm_title">
                <h2>Bienvenue sur DUMP</h2>
                <p>Enregistre toi pour participer au nettoyage de ta ville</p>
            </div>

            <div className="registerForm_userName">
                <p>Entre ton pseudo</p>
                <input type="text" name="userName" id="userName" placeholder="Dumpeuse75" value={register.userName} onChange={handleChange} required />
            </div>

            <div className="registerForm_email">
                <p>Entre ton email</p>
                <input type="email" name="email" id="emailRegister" placeholder="dump@mail.com" value={register.email} onChange={handleChange} required />
            </div>

            <div className="registerForm_password">
                <p>Quel mot de passe as tu choisis?</p>
                <input type="password" id="passRegister" name="password" placeholder="Mot de passe" value={register.password} onChange={handleChange} required />
                <p>6 characters minimum, 1 capitale, 1 chiffre</p>
            </div>

            <div className="registerForm_firstName">
                <p>Entre ton prénom</p>
                <input type="text" name="firstName" id="firstName" placeholder="Marie" value={register.firstName} onChange={handleChange} required />
            </div>

            <div className="registerForm_lastName">
                <p>Entre ton nom de famille</p>
                <input type="text" name="lastName" id="lastName" placeholder="Dupont" value={register.lastName} onChange={handleChange} required />
            </div>

            <div className="registerForm_adress">
                <p>Où habites-tu?</p>

                <p>N° de voie</p>
                <input type="text" id="numberStreetRegister" name="numberStreet" placeholder="1" value={register.numberStreet} onChange={handleChange} required />

                <p>Nom de la rue</p>
                <input type="text" id="streetRegister" name="street" placeholder="rue Sébastopole" value={register.street} onChange={handleChange} required />

                <p>Code Postal</p>
                <input type="text" id="postalCodeRegister" name="postalCode" placeholder="75001" value={register.postalCode} onChange={handleChange} required />

                <p>Ville</p>
                <input type="text" id="cityRegister" name="city" placeholder="Paris" value={register.city} onChange={handleChange} required />

            </div>

            <button className="registerForm_submit" type="submit">Envoyer</button>

            <div>
                {errorForm}
            </div>
        </form>
    )
}

export default Register;