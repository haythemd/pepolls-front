import './Button3.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Button3 = () => {
  return (
    <div>
      <Link to="/continuecreateaccount" >
      <button className='btn3'>
        Continue
      </button>
      </Link>
    </div>
  );
};

export default Button3;


