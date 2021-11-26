import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser } = useAuth()
    // const { registerUser } = useFirebase()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
    }

    return (
        <div >
            <Header></Header>
            <div><h1 className="text-center my-5" >Please Register</h1></div>
            <div className=" d-flex justify-content-center">
                <form onSubmit={handleLoginSubmit} >
                    {/* <input style={{ width: "40%" }}
                    id="inputPassword6"
                    className="form-control"
                    name="name"
                    type="name"
                    onBlur={handleOnBlur}
                    placeholder="Enter Your Name"
                /> */}
                    <input style={{ width: "100%" }}
                        className="form-control my-3"
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        placeholder="Enter Your email"
                    />
                    <input style={{ width: "100%" }}
                        className="form-control my-3"
                        name="name"
                        type="name"
                        onBlur={handleOnBlur}
                        placeholder="Enter Your Name"
                    />
                    <input style={{ width: "100%" }}
                        type="password"
                        className="form-control my-3"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        placeholder="Enter Your PassWord"
                    />
                    <input style={{ width: "100%" }}
                        type="password"
                        className="form-control my-3"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        placeholder="Re-typePassword"
                    />
                    <Button onClick={handleLoginSubmit} className="btn-warning" type="submit" >Register</Button><br />

                    <h4 className="my-4">Already registered?<Link to="/login"> Log in</Link></h4>
                </form>

            </div>

        </div>
    );
};

export default Register;