import React from 'react'
import { Link } from 'react-router-dom'
import '../../Css/CoursePage/Instructor.css'
function Instructor({instructor}) {
    return (
        <div className="instructor">
            <Link to={'/'}>
                <h2>{instructor?.name}</h2>
            </Link>
            <h4>{instructor?.Intro}</h4>
            <div className="inst-personal">
                <div className="inst-image">
                    <img
                        src={instructor?.Image}
                        alt="a1"
                    />
                </div>
                <div className="inst-udemy-info">
                    <div className="inst-rating">
                        <i className="fa-solid fa-star inst-info-icon"></i>
                        <h3>{instructor?.Rating} Instructor Rating</h3>
                    </div>
                    <div className="inst-review">
                        <i className="fa-sharp fa-solid fa-award inst-info-icon"></i>
                        <h3> {instructor?.reviewsNumber} Reviews</h3>
                    </div>
                    <div className="inst-students">
                        <i className="fa-solid fa-user-group inst-info-icon"></i>
                        <h3>{instructor?.studentsNumber} Students</h3>
                    </div>
                    <div className="inst-courses">
                        <i className="fa-solid fa-circle-play inst-info-icon"></i>
                        <h3>{instructor?.coursesNumber} Courses</h3>
                    </div>
                </div>
                </div>
                <div className="description">
                    {instructor?.description}
                </div>
        </div>
    )
}

export default Instructor
