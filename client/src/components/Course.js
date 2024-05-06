import React from 'react';
import './Course.css'
import { CgAlbum } from "react-icons/cg";
import { BsClockHistory } from "react-icons/bs";

const Course = ({ name, description, level, duration }) => {
  return (
    <div className="course-card">
      <div className='TitleCourse'>
        <CgAlbum className="icon"/>
        <h4>{name}</h4>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className="course-details">
        <span className="level">Level: {level}</span>
        <BsClockHistory className="icon"/>
        <span className="duration">Duration: {duration}</span>
      </div>
    </div>
  );
};

export default Course;