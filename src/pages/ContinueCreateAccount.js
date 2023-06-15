import React, { useState } from 'react';
import axios from 'axios';
import { Header, Card7, Button4 } from '../components/index.js';
import { Link } from 'react-router-dom';
import './continueCreateAccount.css';
import profilim from '../logos/profilim.svg';
import plus from '../logos/plus.svg';
import calendarIcon from '../logos/calendarIcon.svg';

const ContinueCreateAccount = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfileImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleContinue = async () => {
    try {
      // Make a POST request to the backend
      const response = await axios.post('http://localhost:5000/auth/register', {
        email: '',
        password: '',
        firstName: name,
        lastName: surname,
        picturePath: profileImage,
        friends: [],
        location: '',
        occupation: '',
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
      <Card7 />
      <Button4 />
      <div className="profilimage">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="uploaded-image" />
        ) : (
          <img src={profilim} alt="profilim" />
        )}
      </div>
      {!profileImage && (
        <div className="pluslogo">
          <label htmlFor="imageUpload">
            <img src={plus} alt="plus" />
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>
      )}
      <text className="ccatxt1">Upload your profile picture</text>
      <input
        type="text"
        placeholder="Your name"
        className="inp6"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your surname"
        className="inp7"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your username"
        className="inp8"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="date"
        placeholder="Your date of birth"
        className="inp9"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <select
        value={gender}
        onChange={handleGenderChange}
        className="inp10"
      >
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default ContinueCreateAccount;
