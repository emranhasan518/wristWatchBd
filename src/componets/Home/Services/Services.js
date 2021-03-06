import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './services.css'


const Services = () => {
    const [products, setProducts] = useState([])
    // Loading data form mongodb

    // Slice the Obejects

    const productss = products.slice(11, 17);
    // console.log(productss)

    useEffect(() => {
        const url = `https://pure-garden-91979.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(resut => setProducts(resut))


    }, [])
    return (
        <div className="container">
            <h2>Hot Products now a days</h2>
            {/* Part-1 */}
            <hr />
            {/* <div className="row">
                <div className="col-lg-4 col-sm-12 my-2">
                    <div className="d-flex m-2">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/333_small.png?v=1559367618" alt="" />

                        <div>
                            <h className="m-2 p-1" >Free Shipping</h>
                            <p className="m-2 p-1">Free shipping on order</p>
                        </div>

                    </div>

                </div>
                <div className="col-lg-4 col-sm-12 my-2">
                    <div className="d-flex">
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/111_small.png?v=1559367608" alt="" />
                        <h3 className="m-2 p-1">Free Shipping</h3>
                        <p className="m-2 p-1">Free shipping on order</p>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12 my-2">
                    <div className="d-flex">
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/222_small.png?v=1559367648" alt="" />
                        <h3 className="m-2 p-1">Payment Secure</h3>
                        <p className="m-2 p-1">Free shipping on order</p>
                    </div>


                </div>
            </div> */}

            {/* Part-2 */}
            <div className="my-5">
                <Container >
                    <Row >
                        {
                            productss?.map(product =>
                                <div class="col-sm-12 col-lg-4 my-2" style={{borderRadius: '10px'}}>
                                    <div class="card services">
                                        <div><img style={{ width: "90%", borderRadius: '10px'}} className=" mx-auto d-block mt-4" src={product.img} /></div>
                                        <div class="card-body">
                                            <h5 class="card-title">{product.name}</h5>
                                            <h4 class="card-title">{product.price}$</h4>

                                            <p class="card-text">{product.discription.slice(20)}</p>
                                            {/* <Link to={`/orderdetails/${product._id}`}>
                                            <button className="btn btn-success m-2">update</button>
                                        </Link> */}
                                            <Link to={`/order/${product._id}`}>
                                                <button className="btn btn-warning m-2">Order Now</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Row>



                </Container>

            </div>
        </div >
    );
};

export default Services;


