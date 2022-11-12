import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import image from "../../img/konika.png";
import swal from "sweetalert";
import "./ClubInfo.css";
import fakeDb from "../Utilities/fakeDatabase";

const ClubInfo = (props) => {
  const { exerciseTime } = props;
  const [breakTime,setBreakTime]=useState(null)

  const handleAddToBreakTime = (time) => {
    setBreakTime(`${time} second`)
  };
  // sweet alert
  const sweetAlert = () => {
    swal({
      title: "Congratulations!",
      text: "You have completed !",
      icon: "success",
      button: "ok!",
    });
    fakeDb();
  };
  const breakTimeButtons = [
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 30, value: 30 },
    { label: 40, value: 40 },
    { label: 50, value: 50 },
  ];
  return (
    <div>
      <section className="user-info">
        <img src={image} alt="" />
        <div className="user-name">
          <h3>Mayeda Islam</h3>
          <div className="user-location">
            <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
            <small>Dhaka,Bangladesh</small>
          </div>
        </div>
      </section>
      <section className="user-weight-age">
        <div className="user">
          <span className="weight">42</span>
          <small>kg</small>
          <p>Weight</p>
        </div>
        <div className="user">
          <span className="height">5</span>
          <small>icn</small>
          <p>Height</p>
        </div>
        <div className="user">
          <span className="age">22</span>
          <small>yrs</small>
          <p>Age</p>
        </div>
      </section>
      <section className="addABreak">
        <h3>Add a Break</h3>
        <div className="addABreak-time">
          {breakTimeButtons.map((timeButton) => (
            <button className="btn" onClick={() => handleAddToBreakTime(timeButton.value)}>
              {timeButton.label}
            </button>
          ))}
        </div>
      </section>
      <section className="exercise-details">
        <h3>Exercise Details</h3>
        <div className="exercise-time">
          <span id="exercise-time-label" className="exercise-time-label">
            Exercise time
          </span>
          <input
            id="exercise-time-input"
            type="text"
            value={`${exerciseTime} second`}
            placeholder= "exercise-time"
          />
        </div>
        <div className="break-time">
          <span id="break-time-label" className="break-time-label">
            Break time
          </span>
          <input type="text" id="break-time-input" value={breakTime} placeholder="Break-time" />
        </div>
      </section>
      <section className="activity-complited">
        <button
          onClick={() => sweetAlert()}
          className=" activity-complited-btn"
        >
          Activity completed
        </button>
      </section>
    </div>
  );
};

export default ClubInfo;
