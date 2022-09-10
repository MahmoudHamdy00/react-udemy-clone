import React from "react";
import Instructor from "./Instructor";

function InstructorList({ instructors }) {
  return (
    <div className="instractors-container">
      <h1>Instructors</h1>
      {instructors?.map((instructor) => (
        <Instructor instructor ={instructor}/>
      ))}
    </div>
  );
}

export default InstructorList;
