import React, { Component } from "react";
import "../styles/test.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "../Components/Navigation";
import Pagination from "../Components/Pagination";
import Btn from "../Components/Btn";
import Social from "../Components/Social";
import MainTimeline from "../Components/MainTimeline";

import English from "../Components/English";
import Office from "../Components/Office";
import Adobe from "../Components/Adobe";
import Norway from "../Components/Norway";
import $ from "jquery";

import { Timeline, Event } from "react-timeline-scribble";



class Test extends Component {

    handleScroll = (event) => {
        if (event.deltaY < 0) {
            window.location.href = '/o-mnie';
        }
        else if (event.deltaY > 0) {
            window.location.href = '/kontakt';
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
                    <Row className="row-main" id="row-main">
                        <Col className="col-std col-toogle" md={1}></Col>
                        <Col className="col-std col-mobile-menu"> <div className="div-menu-mobile">
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
                        <Col className="col-std col-center" md={10}>
                            <div className="div-center">
                                <Row className="row-stats-cv">
                                    <Col className="col-std col-stats">{<English />}</Col>
                                    <Col className="col-std col-stats">{<Office />}</Col>
                                    <Col className="col-std col-stats">{<Adobe />}</Col>
                                    <Col className="col-std col-stats">{<Norway />}</Col>
                                </Row>
                                <Row className="row-cv">
                                    {<MainTimeline />}
                                    <div className="div-timeline-mobile">
                                        {/* <Timeline>
                                            <Event className="event" interval={"2013 – 2016"} title={"Uniwersytet pedagogiczny im. KEN"} subtitle={""}>
                                                Studia licencjackie, kier. Kulturoznastwo
      </Event>
                                            <Event interval={"08.2016 – 09.2016"} title={"Stażysta"} subtitle={""}>
                                                Dział promocji i marketingu w firmie Polska Press sp. z o. o.
      </Event>
                                            <Event interval={"2016 – 2018"} title={"Uniwersytet Jagielloński"} subtitle={""}>
                                                Studia magisterskie, kier. Zarządzanie kulturą i mediami, spec. Zarządzanie mediami
      </Event>
                                            <Event interval={"08.2016 – 09.2016"} title={"Stażysta"} subtitle={""}>
                                                Nowy Bulwar |T| Sztuki Teatr Łaźnia nowa
      </Event>
                                            <Event interval={"01.2018 – TERAZ"} title={"Redaktor współpracujący"} subtitle={""}>
                                                serialomaniak.com
      </Event>
                                            <Event interval={"04.2019 – TERAZ"} title={"Redaktor współpracujący"} subtitle={""}>
                                                igimag.pl
      </Event>
                                        </Timeline> */}
                                        <section id="cd-timeline" className="cd-container">
                                            <div className="cd-timeline-block">
                                                <div className="cd-timeline-img cd-movie">
                                                </div>
                                                <div className="cd-timeline-content">
                                                    <h2>Studia licencjackie</h2>
                                                    <p>kier. Kulturoznastwo, uczelnia Uniwersytet pedagogiczny im. KEN</p>
                                                    <span className="cd-date">2013 – 2016</span>
                                                </div>
                                            </div>
                                            <div className="cd-timeline-block">
                                                <div className="cd-timeline-img cd-movie">
                                                </div>
                                                <div className="cd-timeline-content">
                                                    <h2>Stażysta</h2>
                                                    <p>Dział promocji i marketingu w firmie Polska Press sp. z o. o.</p>
                                                    <span className="cd-date">08.2016 – 09.2016</span>
                                                </div>
                                            </div>
                                            <div className="cd-timeline-block">
                                                <div className="cd-timeline-img cd-movie">
                                                </div>
                                                <div className="cd-timeline-content">
                                                    <h2>Studia magisterskie</h2>
                                                    <p>kier. Zarządzanie kulturą i mediami, spec. Zarządzanie mediami, uczelnia Uniwersytet Jagielloński</p>
                                                    <span className="cd-date">2016 – 2018</span>
                                                </div>
                                            </div>
                                            <div className="cd-timeline-block">
                                                <div className="cd-timeline-img cd-movie">
                                                </div>
                                                <div className="cd-timeline-content">
                                                    <h2>Stażysta</h2>
                                                    <p>Nowy Bulwar |T| Sztuki Teatr Łaźnia nowa</p>
                                                    <span className="cd-date">08.2016 – 09.2016</span>
                                                </div>
                                            </div>
                                            <div className="cd-timeline-block">
                                                <div className="cd-timeline-img cd-movie">
                                                </div>
                                                <div className="cd-timeline-content">
                                                    <h2>Redaktor współpracujący</h2>
                                                    <p>serialomaniak.com</p>
                                                    <span className="cd-date">01.2018 – TERAZ</span>
                                                </div>
                                            </div>
                                            <div className="cd-timeline-block">
                                                <div className="cd-timeline-img cd-movie">
                                                </div>
                                                <div className="cd-timeline-content">
                                                    <h2>Redaktor współpracujący</h2>
                                                    <p>igimag.pl</p>
                                                    <span className="cd-date">04.2019 – TERAZ</span>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col className="col-std col-nav" md={1}>
                            {<Navigation />}
                            {<Social />}
                        </Col>
                    </Row>
                    <Row className="row-bottom" id="row-bottom">
                        <Col className="col-std col-btn-cv" md={{ span: 4, offset: 4 }}><Btn btntext="Pobierz CV" /></Col>
                        <Col className="col-std col-footer" md={{ span: 3, offset: 9 }}>
                            <p>Projekt i realizacja: <a href="https://dosoft.pl">dosoft.pl</a>  Icon made by Freepik from <a href="https://www.flaticon.com/authors/freepik">flaticon</a></p>
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}

export default Test;
