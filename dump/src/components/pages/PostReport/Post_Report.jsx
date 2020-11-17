// Imports
import React, { useState } from 'react';
import Axios from 'axios';
import { useAlert } from 'react-alert';

function PostRegister(props) {
    const [post, setPost] = useState(
        { userName: '', numberStreet: '', street: '', postalCode: '', city: '', report: '' }
    );

    const [errorForm, setErrorForm] = useState(" ")

    const alert = useAlert()

    const handleChange = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:8000/api/post_reports/post', post)
            .then((response) => {
                setPost({ userName: '', numberStreet: '', street: '', postalCode: '', city: '', report: '' })
                alert.show('Signalement enregistré 😊')
            })
            .catch((error) => {
                setErrorForm(error.response.data.error)
            })
    }

    return (
        <form className="postRegisterForm" method="POST" action="/post_reports/" onSubmit={handleSubmit}>

            <div>
                <h2>Bienvenue sur DUMP</h2>
                <p>Enregistre toi pour participer au nettoyage de ta ville</p>
            </div>

            <div>
                <p>Quel type de signalement souhaites-tu faire?</p>
                <input type="radio" id="reportEncombrant" value="reportEncombrant" name='report' onChange={handleChange} required />
                <label htmlFor="reportEncombrant">Encombrant</label>

                <input type="radio" id="reportDechet" value="reportDechet" name='report' onChange={handleChange} required />
                <label htmlFor="reportDechet">Déchet</label>

                <input type="radio" id="reportInsalubrite" value="reportInsalubrite" name='report' onChange={handleChange} required />
                <label htmlFor="reportInsalubrite">Insalubrité</label>

            </div>

            <div className="postRegisterForm_adress">
                <p>Où est ce signalement?</p>

                <p>N° de voie</p>
                <input type="text" id="numberStreetRegister" name="numberStreet" placeholder="1" value={post.numberStreet} onChange={handleChange} required />

                <p>Nom de la rue</p>
                <input type="street" id="streetRegister" name="street" placeholder="rue Sébastopole" value={post.street} onChange={handleChange} required />

                <p>Code Postal</p>
                <input type="text" id="postalcodeRegister" name="postalCode" placeholder="75001" value={post.postalCode} onChange={handleChange} required />

                <p>Ville</p>
                <input type="city" id="cityRegister" name="city" placeholder="Paris" value={post.city} onChange={handleChange} required />

            </div>

            <button className="postRegisterForm_submit" type="submit">Envoyer</button>

            <div>
                {errorForm}
            </div>
        </form>
    )
}

export default PostRegister;