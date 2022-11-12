import React from 'react';

const Activity = (props) => {
    const {name,img,age,description,time_require}=props.activity
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Age:{age}</p>
                <p>{description}</p>
                <p>Time requirement:{time_require}</p>
            </div>
            <button>Add to list</button>
        </div>
    );
};

export default Activity;