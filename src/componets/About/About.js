import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            {/* Part-1 */}
            <Container className="my-5">
                <Row>
                    <Col sm={12} lg={6}>
                        <img style={{height:'85%'}} src="https://image.freepik.com/free-vector/clock-with-children-character_1308-19844.jpg" alt="" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <div style={{marginTop:'20%'}}>
                            <div>
                                <h2>WELCOME TO<span className="text-warning">WRIST WATCH BD</span> </h2>
                                <p >Timekeeper provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system.</p>
                            </div>
                            <div className="my-5">
                                <h3>The Symbol of luxary from 1999</h3>
                                <p className=" my-2">Timekeeper provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;