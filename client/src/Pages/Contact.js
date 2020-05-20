import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Pagination from "../Components/Pagination";
import Btn from "../Components/Btn";
import Text from "../Components/Text";
import Form from "../Components/Form";
import Social from "../Components/Social";

class Test extends Component {

    handleScroll = (event) => {
        if (event.deltaY < 0) {
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
                        <Col className="col-std col-left" md={5}>
                            <div className="div-left">
                                <Container className="container-left">
                                    <Row className="row-text">
                                        <Col className="col-std col-text" md={12}><Text title="Napisz do mnie" text="Pisanie jest moją pasją, którą ciągle rozwijam. W ciągu 6 lat zaufało mi wiele wydawnictw, decydując się podjąć ze mną współpracę. Przez dwa lata pisałam dla Serialomaniaka, od roku moje teksty pojawiają się również na http://igimag.pl  W pisanych przez siebie tekstach jestem rzetelna, dotrzymuję terminów (jeśli nie – lojalnie uprzedzam) i chętnie próbuję nowych rzeczy.  W przyszłości chciałabym wydać swoją książkę " /></Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col className="col-std col-right" md={5}>
                            <div className="div-right">
                                {<Form />}
                            </div>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom">
                        <Col className="col-std col-btn" md={{ span: 4, offset: 4 }}><Btn href="./" btntext="Portfolio" /></Col>
                        <Col className="col-std col-footer" md={{ span: 3, offset: 9 }}>
                            <p>Projekt i realizacja: <a href="https://dosoft.pl">dosoft.pl</a>  Icon made by Freepik from <a href="https://www.flaticon.com/authors/freepik">flaticon</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Test;
