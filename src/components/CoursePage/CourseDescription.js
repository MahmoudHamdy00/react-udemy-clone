import React, { useState } from "react";
import "../../Css/CoursePage/CourseDescription.css";

function CourseDescription({ description, forWho }) {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <div className="CourseDescription">
      <h2>Description</h2>

      <div className="show-more--container--3W59b">
        {seeAll
          ? description.map((item,index) => <p key={index}>{item}</p>) // how to break the line (<br/> doesn't work)
          : description.join("\n").substr(0, 255)}
        <br />
        <button className="seeMoreBtn" onClick={() => setSeeAll(!seeAll)}>
          See {seeAll ? "Less" : "More"}
        </button>
      </div>
      <h3>Who this course is for:</h3>
      <ul>
        {/* {forWho} */}
        {forWho.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDescription;
