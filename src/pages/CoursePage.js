import React, { useContext, useState } from "react";
import CourseContent from "../components/CoursePage/CourseContent";
import CourseDescription from "../components/CoursePage/CourseDescription";
import CourseHeader from "../components/CoursePage/CourseHeader";
import CourseRequirements from "../components/CoursePage/CourseRequirements";
import Instructor from "../components/CoursePage/Instructor";
import InstructorList from "../components/CoursePage/InstructorList";
import StudentReview from "../components/CoursePage/StudentReview";
import ReviewContainer from "../components/CoursePage/ReviewContainer";
import ReviewList from "../components/CoursePage/ReviewList";
import WhatYouWillLearn from "../components/CoursePage/WhatYouWillLearn";
import "../Css/CoursePage/CoursePage.css";
import SideCard from "../components/CoursePage/SideCard";
import { useParams } from "react-router-dom";

let courseObject;

// fetch(`http://localhost:3009/data?id=8324`)
//   .then(async (response) => response.json())
//   .then(async (data) => {
//     console.log(data);
//     courseObject = data[0];
//   });
function CoursePage({ data }) {
  const { id } = useParams();
  if(id>data.length){
    return <h1 style={{display:'flex',justifyContent:'center',height:'200px'}}>Course not found</h1>
  }
  const course = data[id - 1];
  return (
    <>
      <div className="course-page-main-content">
        <SideCard course={course} />
        <CourseHeader data={course} />
        <div className="centre-body">
          <WhatYouWillLearn />
          <CourseContent course={course} />
          <CourseRequirements requirements={course?.requirements} />
          <CourseDescription
            description={course?.description}
            forWho={course?.whoFor}
          />
          <InstructorList instructors={course?.instructor} />
          <StudentReview studentFeedback={course?.studentFeedback} />
          <ReviewList reviews={course?.reviews} />
        </div>
      </div>
    </>
  );
}

export default CoursePage;
