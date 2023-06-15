import React, { useState } from 'react';
import { Card8 , Sidebar,Header} from '../components/index.js';
import './edit.css';
import profilim from '../logos/profilim.svg';
import plus from '../logos/plus.svg';





const Edit = () => {
    const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('');

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
  return (
    <div>
      <Sidebar/>
      <Header/>
      <button className='btnEdit'>
        Save my changes
      </button>
      <Card8/>
      <div className="profilimage1">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className='uploaded-image' />
        ) : (
          <img src={profilim} alt="profilim" />
        )}
      </div>
      {!profileImage && (
        <div className="pluslogo1">
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
      <text className="ccatxt11">Upload your profile picture</text>
      <input type="text" placeholder="Your name" className="inp6" />
      <input type="text" placeholder="Your surname" className="inp7" />
      <input type="text" placeholder="Your username" className="inp8" />
      <input type="date" placeholder="Your date of birth" className="inp9" />
      <select value={gender} onChange={handleGenderChange} className="inp10">
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>


    </div>
  );
};

export default Edit;