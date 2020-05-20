import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/progress-bar.css';

const Norway = () => {
    return (
        <div className="name-container">
            <h2>Język Norweski</h2>
            <div className="progress-container">
                <li><div className="progress"></div></li>
                <li> <div className="progress-null"></div></li>
                <li><div className="progress-null"></div></li>
                <li> <div className="progress-null"></div></li>
                <li> <div className="progress-null"></div></li>
            </div>
        </div>
    )
}

export default Norway; 