import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import image from '../../img/konika.png'
import'./ClubInfo.css'

const ClubInfo = (props) => {
    const {exerciseTime}=props
    document.getElementById('span-p').addEventListener('click',function(e){
        console.log(e.target)
    })
    return (
        <div >
           <section className='user-info'>
                <img src={image} alt="" />
                <div className='user-name'>
                    <h3>Mayeda Islam</h3>
                    <div className='user-location'><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    <small>Dhaka,Bangladesh</small></div>
                </div>
           </section>
           <section className='user-weight-age'>
            <div className='user'>
                <span className='weight'>42</span><small>kg</small>
                <p>Weight</p>
            </div>
            <div className='user'> 
                 <span className='height'>5</span><small>icn</small>
                <p>Height</p></div>
            <div className='user'>  
                <span className='age'>22</span><small>yrs</small>
                <p>Age</p></div>
           </section>
           <section className='addABreak'>
            <h3>Add a Break</h3>
            <div className='addABreak-time'>
                <p id='span-p'> <span >10</span>s</p>
                <p >20<span>s</span></p>
                <p  >30<span>s</span></p>
                <p  >40<span>s</span></p>
                <p  >50<span>s</span></p>
            </div>
           </section>
           <section className='exercise-details'>
            <h3>Exercise Details</h3>
            <div className="exercise-time">
                <span className='exercise-time-label'>Exercise time</span>
                <input type="text" placeholder={exerciseTime +" second"} />
            </div>
            <div className="break-time">
            <span className='break-time-label'>Break time</span>
                <input type="text" placeholder='Break-time' />
            </div>
           </section>
           <section className='activity-complited'>
            <button className=' activity-complited-btn'>Activity completed</button>
           </section>
        </div>
    );
};

export default ClubInfo;