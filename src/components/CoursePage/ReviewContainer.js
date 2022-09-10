import React from 'react'
import '../../Css//CoursePage/ReviewContainer.css'
import ReviewLike from './ReviewLike'

function ReviewContainer({review}) {
    const StarRating = () => {
        return [...Array(5)].map((star, index) => {
            index++
            return (
                <li key={index}>
                    <i className="fa-solid fa-star star-icon"></i>
                </li>
            )
        })
    }
    return (
        <div className="student-review">
            <div className="rev-custom-name">
                <h2>{review.name.substr(0,1)}{review.name.substr(review.name.search(' ')+1,1)}</h2>
            </div>
            <div className="rev-desc">
                <div className="ev-desc-comment">
                    <h1>{review.name}</h1>
                </div>

                <div className="rev-rate-line">
                    <ul className="stars-list"> {StarRating()}</ul>
                    <h4>3 weeks ago</h4>
                </div>
                <div className="ev-desc-comment">
                    {review.content}
                </div>
                <ReviewLike />
            </div>
        </div>
    )
}

export default ReviewContainer
