import { slide as Menu } from 'react-burger-menu';
import React from "react";
import "../styles/navigationmobile.css";

class NavigationMobile extends React.Component {
    render() {
        return (

            <div id="outer-container">
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} isOpen={false} />
                <main id="page-wrap">
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </main>
            </div>

        )
    }
}

export default NavigationMobile; 