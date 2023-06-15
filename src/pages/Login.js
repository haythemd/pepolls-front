
import React, { useState } from 'react';
import {Header,Card5,Button2 } from '../components/index.js';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
	

	return (

		<div>

            <Header/>
            <Card5/>
            <Button2/>
            <input
                type="email"
                placeholder="Your email address"
                className="inp1"
            ></input>

            <input
                type="password"
                placeholder="Your password"
                className="inp2"        
            ></input>
            <text className='logtxt1'>
            <Link to="/CreateAccount" >
            Don't have an account yet? Create one
            </Link>
            </text>
            <text className='logtxt2'>
            <Link to="/resetpassword" >
            Forget your password? Reset it now
            </Link>
            </text>
            
        </div>

	);
};
export default Login;
