import React, { useState } from 'react';
import { Card1, Card2, Button1,Sidebar,Header } from '../components/index.js';
import './createPoll.css';
import Select from 'react-select';
import like from '../logos/like.svg';
import dislike from '../logos/dislike.svg';
import pour from '../logos/pour.svg';
import contre from '../logos/contre.svg';
import happy from '../logos/happy.svg';
import sad from '../logos/sad.svg';
import uploadim from '../logos/uploadim.svg';
import fire from '../logos/fire.svg';
import send from '../logos/send.svg';
import comment from '../logos/comment.svg';
import { FormGroup, FormControlLabel, Switch, ThemeProvider, createMuiTheme } from '@material-ui/core';

const CreatePoll = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1976d2', // Set the main color to blue a700
      },
    },
  });

  const fileInputRef = React.useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Perform further operations with the uploaded file
  };

  const options1 = [
    { value: 'music', label: 'Music' },
    { value: 'sport', label: 'Sport' },
    { value: 'movies', label: 'Movies' },
    { value: 'politics', label: 'Politics' },
    { value: 'beauty', label: 'Beauty' },
    { value: 'football', label: 'Football' }
  ];

  const options2 = [
    { value: 'public', label: 'public' },
    { value: 'private', label: 'private' }
  ];

  return (
    <div>
      <Sidebar/>
      <Header/>
      <text className="cp">Create poll</text>
      <Card1 />
      <input className="at" placeholder="Ask your friends what's on your mind" />
      <div className="im">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <circle id="_1" data-name="1" cx="20" cy="20" r="20" fill="#1a2552" />
        </svg>
      </div>
      <Select options={options1} className="selection1" placeholder="topics" />
      <Select options={options2} className="selection2" placeholder="public" />

      <span className="txt">Select how you want people to react to your poll.</span>
      <span className="txt2">Add to your poll</span>

      <div className="react1"></div>
      <img src={like} alt="like" className="like1" />
      <img src={dislike} alt="dislike" className="dislike1" />

      <div className="react2"></div>
      <img src={happy} alt="happy" className="happy" />
      <img src={sad} alt="sad" className="sad" />

      <div className="react3"></div>
      <img src={pour} alt="pour" className="pour" />
      <img src={contre} alt="contre" className="contre" />

      <img src={uploadim} alt="uploadim" className="uploadim" onClick={handleUploadClick} />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      <Button1 />
      <text className="mo">More options</text>

      <Card2 />

      <div className="minicard1"></div>
      <text className="txt5">People can trend your poll</text>
      <div className="tog1">
        <ThemeProvider theme={theme}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked color="primary" />} />
          </FormGroup>
        </ThemeProvider>
      </div>

      <div className="minicard2"></div>
      <text className="txt6">People can debate your poll</text>
      <div className="tog2">
        <ThemeProvider theme={theme}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked color="primary" />} />
          </FormGroup>
        </ThemeProvider>
      </div>

      <div className="minicard3"></div>
      <text className="txt7">People can share your poll</text>
      <div className="tog3">
        <ThemeProvider theme={theme}>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked color="primary" />} />
          </FormGroup>
        </ThemeProvider>
      </div>
    <div><img src={fire} alt="fire" className="maso1" /></div>
      
      <img src={comment} alt="comment" className="maso2" />
      <img src={send} alt="send" className="maso3" />
    </div>
  );
};

export default CreatePoll;
