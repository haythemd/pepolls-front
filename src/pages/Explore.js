import React from 'react';
import { Card3 , Sidebar,Header} from '../components/index.js';
import './explore.css';
import like from '../logos/like.svg';
import dislike from '../logos/dislike.svg';
import fire from '../logos/fire.svg';
import send from '../logos/send.svg';
import comment from '../logos/comment.svg';
import earth from '../logos/earth.svg';




const Explore = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <text className='ex'>Explore</text>
      <Card3/>
      <div className='im'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <circle id="_1" data-name="1" cx="20" cy="20" r="20" fill="#1a2552" />
        </svg>
      </div>
      <text className='txt8'>Mahdi Bouden</text>
      <text className='txt9'>Politics - 5 min Ago</text>
      <img src={earth} alt='earth' className='mazmouz'/>
      <text className='txt4'>We are looking for an innovative team that can work with us on the development of our ERP model in collaboration with our internal team. Please apply if you are interested.</text>
      <div className='circle'></div>
      <text className='txt14'>...</text>
      <div className='ph'></div>

      <div className='react'></div>
      <img src={like} alt="like" className="like" />
      <img src={dislike} alt="dislike" className="dislike" />
      <img src={fire} alt="fire" className="moz1" />
      <text className='txt10'>214 Trends</text>
      <img src={comment} alt="comment" className="moz2" />
      <text className='txt11'>67 Debate</text>
      <img src={send} alt="send" className="moz3" />
      <text className='txt12'>18 Shares</text>
      <div className='reaction'></div>
      <text className='txt13'>+270</text>
      


    </div>
  );
};

export default Explore;