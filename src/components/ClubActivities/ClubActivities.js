import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import'./ClubActivites.css'
const ClubActivities = () => {
    const [activities,setActivities]=useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    return (
        <div>
            <div className='activities-title'>
            <h1>Club Activities</h1>
            <h2>Select today's activites</h2>
            </div>
           <div className='activities'>
           {
            activities.map(activity=><Activity activity={activity}
            key={activity._id}></Activity>)
           }
           </div>
        </div>
    );
};

export default ClubActivities;