import React, { Component } from 'react';
import '../styles/btn.css';


class Btn extends Component {

    currentURL = this.props.href;

    constructor(props) {
        super(props);
    }

    setURL(url) {
        this.currentURL = url
        document.getElementById('see-more').addEventListener('click', function () {
            window.location.href = url;
        });
    }

    unsetURL(url) {
        document.getElementById('see-more').removeEventListener('click', function () {
            window.location.href = url;
        });
    }

    componentDidMount() {
        this.setURL(this.props.href);
    }

    componentWillUnmount() {
        this.unsetURL(this.currentURL);
    }

    render() {
        return (
            <div className="btn-container">
                <button type="button" className="button" id="see-more">{this.props.btntext}</button>
            </div>
        )
    }
}

export default Btn; 