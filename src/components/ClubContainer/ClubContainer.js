
import ClubActivities from '../ClubActivities/ClubActivities';
import ClubInfo from '../ClubInfo/ClubInfo';
import './ClubContainer.css'

const ClubContainer = () => {
    
    return (
        <div className='club-container'>
            <div className="club-activities">
                <ClubActivities ></ClubActivities>
                
            </div>
            <div className="club-info">
                <ClubInfo></ClubInfo>
            </div>
        </div>
    );
};

export default ClubContainer;