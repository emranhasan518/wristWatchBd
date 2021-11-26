import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "40%", borderRadius: '10px'}} className=" mx-auto d-block mt-2" src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" />

            <NavLink to="/">
                <button className="btn btn-primary" style={{marginLeft:'45%', marginBottom:'10%'}}> Go Back</button>
            </NavLink>
        </div>
    );
};

export default NotFound;