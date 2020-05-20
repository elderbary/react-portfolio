import React, { Component } from 'react';
import '../styles/picture.css';

class Picture extends Component {
    render() {
        const { imgportfolio } = this.props;
        return (
            <div className="picture">
                <img src={imgportfolio} alt={this.props.alt} />
            </div>
        );
    }
}

export default Picture; 
