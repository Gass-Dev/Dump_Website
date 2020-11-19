// Imports
import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

import Logo from '../../../assets/images/logo_dump.png';

require('./_postReport.scss');

function PostRegister(props) {
    const history = useHistory();
    const userId = localStorage.getItem('userId');
    const [post, setPost] = useState(
        {numberStreet: '', street: '', postalCode: '', city: '', report: '', userId }
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
                setPost({numberStreet: '', street: '', postalCode: '', city: '', report: ''})
                alert.show('Signalement enregistré 😊')
                history.push('/')
            })
            .catch((error) => {
                setErrorForm(error.response.data.error)
            })
    }

    return (
        <form className="postRegisterForm" method="POST" action="/post_reports/post" onSubmit={handleSubmit}>

            <div className="postRegisterForm_content">
                <div className="postRegisterForm_content_title">
                    <h2>Signalement</h2>
                </div>

                <div className="postRegisterForm_content_type">
                    <p>Quel type de signalement souhaites-tu faire?</p>
                    
                    <div className="postRegisterForm_content_type_encombrant">
                        <label htmlFor="reportEncombrant">Encombrant</label>
                        <input type="radio" id="reportEncombrant" value="reportEncombrant" name='report' onChange={handleChange} required />
                    </div>

                    <div className="postRegisterForm_content_type_dechet">    
                        <label htmlFor="reportDechet">Déchet     </label>
                        <input type="radio" id="reportDechet" value="reportDechet" name='report' onChange={handleChange} required />
                    </div>
                        
                    <div className="postRegisterForm_content_type_insalubrite">
                        <label htmlFor="reportInsalubrite">Insalubrité</label>
                        <input type="radio" id="reportInsalubrite" value="reportInsalubrite" name='report' onChange={handleChange} required />
                    </div>

                </div>

                <div className="postRegisterForm_content_adress">
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

                <div className="postRegisterForm_content_submit">
                    <button className="postRegisterForm_content_submit_button" type="submit">Valider</button>
                </div>
                
                <div>
                    {errorForm}
                </div>
            </div>
        </form>
    )
}

export default PostRegister;