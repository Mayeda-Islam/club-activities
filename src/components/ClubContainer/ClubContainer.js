
import { useEffect, useState } from 'react';
import ClubActivities from '../ClubActivities/ClubActivities';
import ClubInfo from '../ClubInfo/ClubInfo';
import './ClubContainer.css'

const ClubContainer = () => {
    const [activities,setActivities]=useState([])
    const [exerciseTime,setExerciseTime]=useState(0)
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
   
    const handleAddToList=(requireTime)=>{
       const newExerciseTime=exerciseTime+requireTime
        setExerciseTime(newExerciseTime)
    }
    console.log(exerciseTime)
    return (
        <div className='club-container'>
            <div className="club-activities">
                <ClubActivities handleAddToList={handleAddToList} activities={activities} ></ClubActivities>
                
            </div>
            <div className="club-info">
                <ClubInfo exerciseTime={exerciseTime}></ClubInfo>
            </div>
        </div>
    );
};

export default ClubContainer;