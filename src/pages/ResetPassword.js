
import React, { useState } from 'react';
import {Header,Card9 } from '../components/index.js';
import { Link } from 'react-router-dom';
import './resetpassword.css';

const ResetPassword = () => {
	

	return (

		<div>

            <Header/>
            <Card9/>
            <text className='rptext'>
            Please enter your email address to reset your account password.
            </text>
            <input
                type="email"
                placeholder="Your email address"
                className="inp10"
            ></input>
            <button className='rpbutton'>
                Reset my password
            </button>
            <Link to={"/login"}
            >
                <text className='rptext1'>Cancel password reset?</text>
            </Link>
            
            
        </div>

	);
};
export default ResetPassword;
