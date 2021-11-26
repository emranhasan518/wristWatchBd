import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const DownBanner = () => {
    return (
        <div className="container">
            <div>
            <h1 className="text-center my-1">SPECIAL OFFER</h1>
                <Row>
                    <Col className="my-3" lg={6} sm={12}>
                        <img className="img-fluid" src="https://image.freepik.com/free-vector/watch-set-expensive-classic-clock-with-leather-metal-straps-illustration_1284-51537.jpg" alt="" />
                    </Col>
                    <Col style={{marginTop:'8%'}} lg={6} sm={12}>
                        <div >
                            <h2 className="text-muted my-2">SUCCULENT GARDEN</h2>
                            <h1 className="text-muted my-3">GIFT BOXES</h1>
                            <p className="text-muted my-4">From planter materials to style options, discover which planter is best for your space.</p>
                            <Button className="btn-warning p-3">Explore The Shop</Button>
                        </div>
                    </Col>
                   
                </Row>
            </div>
        </div >
    );
};

export default DownBanner;