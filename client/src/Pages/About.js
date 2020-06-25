import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Btn from "../Components/Btn";
import Statistics from "../Components/Statistics";
import Text from "../Components/Text";
import Social from "../Components/Social";
import CVPicture from "../Components/CVPicture";

class Test extends Component {

    handleScroll = (event) => {
        if (event.deltaY < 0) {
            window.location.href = '/';
        }
        else if (event.deltaY > 0) {
            window.location.href = '/cv';
        }
    }

    enableScroll = () => {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentDidMount() {
        setTimeout(this.enableScroll, 800);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        return (
            <div className="div-main">
                <Container className="container-std">
                    <Row className="row-main">
                        <Col className="col-std col-toogle" md={1}></Col>
                        <Col className="col-std col-mobile-menu">
                            <div className="div-mobile">
                                <Row className="row-mobile">
                                    <Col className="col-std col-menu-mobile">
                                        <div className="div-menu-mobile">
                                            <nav role="navigation">
                                                <div id="menuToggle">
                                                    <input type="checkbox" />
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <ul id="menu">
                                                        <a href="/"><li>PORTFOLIO</li></a>
                                                        <a href="/o-mnie"><li>O MNIE</li></a>
                                                        <a href="/cv"><li>MOJE CV</li></a>
                                                        <a href="/kontakt"><li>KONTAKT</li></a>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </Col>
                                    <Col className="col-std col-mobile-title">
                                        <div className="div-mobile-title">
                                            <p>O MNIE</p>
                                        </div>
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                        <Col className="col-std col-left" md={5}>
                            <div className="div-left">
                                <Container className="container-left">
                                    <Row className="row-text">
                                        <Col className="col-std col-text" md={12}><Text title="Cześć, jestem Ola" text="Mam 26 lat a środowisko, które mnie otacza, stanowią puste kubki po herbacie oraz sterty (nie)przeczytanych książek, od ciężaru których uginają się już półki. Piszę o książkach i serialach od 6 lat, od momentu w którym stwierdziłam, że to już czas. Czytam kryminały (szwedzkie), reportaże (wydawnictwa Czarnego) oraz obyczajówki (ciekawe). " /></Col>
                                    </Row>
                                    <Row className="row-stats">
                                        <Col className="col-std col-stats"><Statistics score="6 lat" description="doświadczenia" /></Col>
                                        <Col className="col-std col-stats"><Statistics score="10" description="klientów" /></Col>
                                        <Col className="col-std col-stats"><Statistics score="450" description="artykułów" /></Col>
                                        <Col className="col-std col-stats"><Statistics score="400,000" description="znaków" /></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col className="col-std col-right" md={5}>
                            <div className="div-right">
                                {<CVPicture />}
                            </div>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom">
                        <Col className="col-std col-btn-about" md={{ span: 4, offset: 4 }}><Btn href="./kontakt" btntext="Napisz do mnie" /></Col>
                        <Col className="col-std col-footer" md={{ span: 3, offset: 9 }}>
                            <p>Projekt i realizacja: <a href="https://dosoft.pl">dosoft.pl</a>  Icon made by Freepik from <a href="https://www.flaticon.com/authors/freepik">flaticon</a></p>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Test;
