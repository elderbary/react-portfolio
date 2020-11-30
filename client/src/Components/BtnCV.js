import React, { Component } from 'react';
import '../styles/btn.css';

class Btn extends Component {
    render() {
        return (
            <div className="btn-container">
               <a href='favicon.ico' target="_blank" rel="noopener noreferrer" download>
 <button type="button" className="button">{this.props.btntext}</button> </a>
            </div>
        )
    }
}

export default Btn; 