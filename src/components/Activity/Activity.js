import React from 'react';
import'./Activity.css'
const Activity = (props) => {
    const {name,img,age,description,time_required}=props.activity
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-details'>
                <h3>{name}</h3>
                <p className='activity-description'>{description}</p>
                <p className='activity-require-age'>Age: {age}</p>
                <p className='activity-time-require'>Time require: {time_required}s</p>
            </div>
            <button className='addToListBtn'>Add to list</button>
        </div>
    );
};

export default Activity;