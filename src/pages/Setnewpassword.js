import React, { useState } from 'react';
import {Header,Card10 } from '../components/index.js';
import { Link } from 'react-router-dom';
import './setnewpassword.css';

const Setnewpassword = () => {
	

	return (

		<div>

            <Header/>
            <Card10/>
            <input
                type="password"
                placeholder="Create your new password"
                className="inp11"
            ></input>
            <input
                type="password"
                placeholder="Verify your new password"
                className="inp12"
            ></input>
            <button className='rpbutton1'>
                Reset my password
            </button>
            <Link to={"/login"}
            >
                <text className='rptext1'>Cancel password reset?</text>
            </Link>
            
            
        </div>

	);
};
export default Setnewpassword;
