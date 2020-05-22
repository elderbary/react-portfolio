import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/timeline.css';
import timelineimg from '../images/timeline.svg'

const Timeline = () => {
    return (
        <div className="timeline-container">
            <img src={timelineimg} alt="timeline" />
        </div>
    )
}

export default Timeline; 