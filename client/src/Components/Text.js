import React, { Component } from 'react';
import '../styles/text.css';

class Text extends Component {
    render() {
        return (
            <div className="text-container">
                <div className="title">
                    <h1>{this.props.title}</h1> </div>

                <div className="text">
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Text; 