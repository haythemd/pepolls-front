import React from 'react';
import { Card4,Sidebar,Header } from '../components/index.js';
import './profil.css';
import like from '../logos/like.svg';
import dislike from '../logos/dislike.svg';
import fire from '../logos/fire.svg';
import send from '../logos/send.svg';
import comment from '../logos/comment.svg';
import earth from '../logos/earth.svg';
import verified from '../logos/verified.svg'





const Profil = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Card4/>
      <div className='imb'>
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
        <circle id="_1" data-name="1" cx="35" cy="35" r="35" fill="#1a2552"/>
        </svg>
      </div>
      <img src={verified} alt='verified' className='verif'/>
      <text className='txt8b'>Mahdi Bouden</text>
      <text className='txt9b'>Machine Learning Engineer</text>
      <div className='editb'>
      </div>
      <text className='editbb'>Edit my profile</text>
      <text className='polnum'>0</text>
      <text className='pol'>Polls</text>
      <text className='votnum'>0</text>
      <text className='vot'>Votes</text>

      <div className='ima'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <circle id="_1" data-name="1" cx="20" cy="20" r="20" fill="#1a2552" />
        </svg>
      </div>
      <text className='txt8a'>Mahdi Bouden</text>
      <text className='txt9a'>Politics - 5 min Ago</text>
      <img src={earth} alt='earth' className='mazmouza'/>
      <text className='txt4a'>We are looking for an innovative team that can work with us on the development of our ERP model in collaboration with our internal team. Please apply if you are interested.</text>
      <div className='circlea'></div>
      <text className='txt14a'>...</text>
      <div className='pha'></div>

      <div className='reacta'></div>
      <img src={like} alt="like" className="likea" />
      <img src={dislike} alt="dislike" className="dislikea" />
      <img src={fire} alt="fire" className="moz1a" />
      <text className='txt10a'>214 Trends</text>
      <img src={comment} alt="comment" className="moz2a" />
      <text className='txt11a'>67 Debate</text>
      <img src={send} alt="send" className="moz3a" />
      <text className='txt12a'>18 Shares</text>
      <div className='reactiona'></div>
      <text className='txt13a'>+270</text>

     
    </div>
  );
};

export default Profil;