
import Activity from '../Activity/Activity';
import'./ClubActivites.css'
const ClubActivities = (props) => {
    const {activities}=props
    const {handleAddToList}=props
    
    return (
        <div>
            <div className='activities-title'>
            <h1>Club Activities</h1>
            <h2>Select today's activites</h2>
            </div>
           <div className='activities'>
           {
            activities.map(activity=><Activity handleAddToList={handleAddToList}  activity={activity}
            key={activity._id}></Activity>)
           }
           </div>
        </div>
    );
};

export default ClubActivities;