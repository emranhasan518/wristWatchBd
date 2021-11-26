import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container my-5">
            <h2 className="text-muted my-4">Latest Blogs</h2>
            <hr />
            <Row>
                <Col sm={12} lg={4}>
                    <div>
                        <img className="img-fluid" src="https://image.freepik.com/free-vector/flat-smartwatchset_1057-429.jpg" alt="" />
                        <h5 className="text-primary my-2 ">Fashion Smartwatch with veriable color</h5>
                        <p>Verious smart watch series</p>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div>
                        <img className="img-fluid" src="https://image.freepik.com/free-vector/slimming-woman-running-park_3446-226.jpg" alt="" />
                        <h5 className="text-primary my-2 ">Keep Your Body Fit By tracking your steps</h5>
                        <p>Microwever w54N smart watch</p>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div>
                        <img className="img-fluid" src="https://img.freepik.com/free-vector/smart-watch-with-phone-realistic-composition_1284-17016.jpg?size=338&ext=jpg" alt="" />
                        <h5 className="text-primary my-2 ">Stay Connect with your phone by Your smart Watch</h5>
                        <p >Hylou Solar ls2</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Blogs;