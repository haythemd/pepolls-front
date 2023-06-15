import React, { useState } from 'react';
import axios from 'axios';
import { Header, Card6, Button3 } from '../components/index.js';
import { Link } from 'react-router-dom';
import './createAccount.css';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleCreateAccount = async () => {
    try {
      // Check if passwords match
      if (password !== verifyPassword) {
        // Handle password mismatch error
        return;
      }

      // Make a POST request to the backend
      const response = await axios.post('http://localhost:5000/auth/register', {
        email,
        password,
      });

      // Account created successfully, you can handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <Card6 />
      <Button3 onClick={handleCreateAccount}/>
      <input
        type="email"
        placeholder="Your email address"
        className="inp3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Create your new password"
        className="inp4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Verify your new password"
        className="inp5"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      ></input>
      <text className="catxt1">
        <Link to="/Login">Already have an account? Login</Link>
      </text>
    </div>
  );
};

export default CreateAccount;
