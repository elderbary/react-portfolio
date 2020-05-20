import React from 'react';
import '../styles/social.css';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';

const Social = () => {
    return (
        <div className="social">
            <ul>
                <li>
                    <a href="https://www.facebook.com/AleksandraWolna"><img src={facebook} alt="facebook" /></a>
                </li>
                <li>
                    <a href="https://twitter.com/woln_a"><img src={twitter} alt="twitter" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/woln_a/"><img src={instagram} alt="instagram" /></a>
                </li>
            </ul>
        </div>
    )
}

export default Social; 