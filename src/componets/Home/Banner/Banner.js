import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="row my-5 ">
                <div className="col-lg-6 col-sm-12 mx-auto">
                    <img className="img-fluid" src='https://image.freepik.com/free-vector/doodle-object-alarm-clock_1308-36334.jpg' />

                </div>
                <div className="col-lg-6 col-sm-12  my-5 mx-auto">
                    <h1 className="text-center my-4 text-warning">WRIST WATCH BD </h1>
                    <h3 className="text-center my-4">Is always here with your premium segment and stylist watch collection</h3>
                    <p className="text-center my-2 text-muted">It has not only five survived not five survived only  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <NavLink to="/ourservices">
                        <button className="btn btn-danger explore">Explore</button>
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Banner;