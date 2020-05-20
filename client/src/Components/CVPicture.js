import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CVPicture.css';
import aleksandra from '../images/aleksandra-wolna.jpg'

const CVPicture = () => {
    return (
        <div className="cvpicture-container">
            <img src={aleksandra} alt="aleksandra-wolna" />
        </div>
    )
}

export default CVPicture; 