import React, { useState } from "react";
import "../../Css/CoursePage/CourseContent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./Accordion";

function CourseContent({ course }) {
  const [expandBtnValue, setExpandBtnValue] = useState("Expand");
  const lecturesDuration = (content_length) => {
    let hmsFormat = content_length.split(":");
    if (hmsFormat.length < 3) hmsFormat = ["0", ...hmsFormat];
    if (hmsFormat[2] > 0) ++hmsFormat[1];
    let duration = ``;
    if (hmsFormat[0] > 0) duration += `${parseInt(hmsFormat[0])}h`;
    duration += `${parseInt(hmsFormat[1])}min`;
    return duration;
  };
  const handleExpandCollapseButton = (e) => {
    let accordionButtons = document.getElementsByClassName("accordion-button");
    Array.from(accordionButtons).forEach((item) => {
      item.classList.toggle("collapsed");
    });

    let accordionBodies = document.getElementsByClassName("accordion-collapse");
    Array.from(accordionBodies).forEach((item) => {
      item.classList.toggle("collapse");
    });
    setExpandBtnValue(expandBtnValue === "Collapse" ? "Expand" : "Collapse");
  };
  return (
    <div className="courseContent">
      <h2>Course content</h2>
      <div className="courseContentHeader">
        <div>
          {course?.sectionsCount} sections •{course?.lecturesCount}
          lectures • {course?.lecturesCount} total length
        </div>
        <button
          type="button"
          data-purpose="expand-toggle"
          aria-expanded="true"
          className="expandBtn"
          onClick={handleExpandCollapseButton}
        >
          <span>{expandBtnValue} all sections</span>
        </button>
      </div>
      <div className="accordion" id="courseContentAccordion">
        {course?.content?.map((item, index) => (
          <Accordion
            title={item[0]}
            items={item[1]}
            index={index}
            lecture_count={10}
            content_length_text={"60min"}
            lecturesDuration={lecturesDuration}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseContent;
