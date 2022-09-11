import React from "react";
import { Link } from "react-router-dom";
import "../../Css/HomePage/Card.css";

function Card(props) {
  let data = props.data;
  //func to crate stars it's 'll be dynamce when thres an equation to calc the rateing with the stars
  // defult  i set all 5 stars
  const StarRating = () => {
    return [...Array(5)].map((star, index) => {
      index++;
      return (
        <li key={index}>
          <i className="fa-solid fa-star star-icon"></i>
        </li>
      );
    });
  };
  return (
    <div className="card-container" key={data?.id}>
      <Link to={`course/${data?.id}`} className="link">
        <div>
          <div className="image-container">
            <img src={data?.image} alt="ali" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>{data?.title}</h3>
            </div>
            <div className="card-body">
              <h6>{data?.author}</h6>
              <div className="rate-container">
                <h3 className="rating-value">{data?.rating}</h3>
                <ul className="stars-list">{StarRating()}</ul>
                <h6 className="pepole">{`(${data?.ratingCount})`}</h6>
              </div>
              <div>
                {/*  this div cause warning __Each child in a list shoul..__ */}
                {data?.instructor?.map((instructor, index) => (
                  <>
                    {index === 0 ? <></> : <span>, </span>}
                    <span>{instructor.name}</span>
                  </>
                ))}
              </div>
              <div className="price">
                <div className="currentPrice">{"E£" + data?.price}</div>
                <s className="m-1 d-d-block">
                  <div>E£{data?.originalPrice}</div>
                </s>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
