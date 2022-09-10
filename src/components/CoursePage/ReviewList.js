import React from "react";
import ReviewContainer from "./ReviewContainer";
import "../../Css/CoursePage/StudentReview.css";
function ReviewList({ reviews }) {
  return (
    <div className="student-container-review">
      <h1>Review</h1>
      {reviews?.map((review) => (
        <ReviewContainer review ={review} key={review.id}/>
      ))}
    </div>
  );
}

export default ReviewList;
