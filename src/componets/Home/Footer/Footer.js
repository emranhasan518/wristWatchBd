import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <Container>
                <hr />
                <Row>
                    <Col lg={4} sm={12}>
                        {/* <img className="img-fluid my-3" style={{ width: "50%" }} src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper-b.png?v=1559116234" alt="" /> */}
                        <h1></h1>
                        <h5>Address</h5>
                        <p>32/A Dhanmondi, Dhaka</p>
                        <h5 className="my-4">Need Help?</h5>
                        <p>Call: 01951860540</p>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div>
                            <h5 className="my-3">About Menu</h5>
                            <p>Home</p>
                            <p>Shop New</p>
                            <p>Product sale</p>
                            <p>Blog</p>
                            <p>Pages</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div>
                            <h5 className="my-3">Usefull Links</h5>
                            <p>Privacy Policy</p>
                            <p>Shop New</p>
                            <p>Retrund Policy</p>
                            <p>Promotions</p>
                            <p>faqs</p>
                        </div>
                    </Col>

                </Row>
                <hr /> <hr/>
                <p style={{textAlign:'center'}}>Copyright © Wrist Watch Bd. All Right Reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;