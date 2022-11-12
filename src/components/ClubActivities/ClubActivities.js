import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
const ClubActivities = () => {
    const [activities,setActivities]=useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])

    return (
        <div>
            <h1>Club Activities</h1>
            <h4>Select today's activites</h4>
           {
            activities.map(activity=><Activity activity={activity}
            key={activity._id}></Activity>)
           }
        </div>
    );
};

export default ClubActivities;