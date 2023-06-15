import './Button4.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Button4 = () => {
  return (
    <div>
      <Link to="/login" >
      <button className='btn4'>
        Continue
      </button>
      </Link>
    </div>
  );
};

export default Button4;
