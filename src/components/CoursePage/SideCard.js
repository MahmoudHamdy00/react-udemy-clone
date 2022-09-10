import React from "react";
import "../../Css//CoursePage/SideCard.css";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function SideCard({ course }) {
  return (
    <>
      <div className="stickly-card">
        <div className="cover">
          <div className="img-mastercover">
            <img src={course?.image} alt="course" style={{width:'100%',height:'100%'}}/>
            <img
              src="https://archive.org/download/mx-player-icon/mx-player-icon.png"
              width="54px"
              alt="Play button"
              className="play-button"
            />
          </div>
          <div className="card-text-area ">
            <div className="card-side-price">
              <div className="d-flex flex-row">
                <h2 className="m-1">E£{course?.price}</h2>
                {Math.round((course?.price / course?.originalPrice) * 100) !==
                100 ? (
                  <>
                    <s className="m-1 d-d-block">
                      <h5>E£{course?.originalPrice}</h5>
                    </s>
                    <h5 className="m-1 d-d-block">
                      {Math.round(
                        (course?.price / course?.originalPrice) * 100
                      )}
                      % off
                    </h5>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <button type="button" className="btn btn-danger buy">
                <span>Add To Card</span>
              </button>
              <button type="button" className="btn btn-outline-dark buy">
                <span> Buy Now</span>
              </button>
            </div>
            <h6>30-Day Money-Back Guarantee</h6>
            <div className="side-card-containt">
              <h4>This course includes:</h4>
              <div className="side-card-item">
                <Icon.PlayBtn />
                <h4 className="item-text">
                  {course?.hoursCount}hours on-demand video
                </h4>
              </div>
              <div className="side-card-item">
                <Icon.FileEarmark />
                <h4 className="item-text">{course?.articlesCount} article</h4>
              </div>
              <div className="side-card-item">
                <Icon.FileArrowDown />
                <h4 className="item-text">
                  {course?.downloadableResource} downloadable resources
                </h4>
              </div>
              <div className="side-card-item">
                <Icon.Infinity />
                <h4 className="item-text">Full lifetime access</h4>
              </div>
              <div className="side-card-item">
                <Icon.Phone />
                <h4 className="item-text">Access on mobile and TV</h4>
              </div>
              <div className="side-card-item">
                <Icon.Trophy />
                <h4 className="item-text">Certificate of completion</h4>
              </div>
            </div>
            <div className="side-card-links">
              <Link to={"/"}>
                <span>Share</span>
              </Link>
              <Link to={"/"}>
                <span>Gift this course</span>
              </Link>
              <Link to={"/"}>
                <span>Apply Coupon</span>
              </Link>
            </div>
            <hr />
            <div className="side-card-training">
              <h4 className="font-weight-bold m-2">
                Training 5 or more people?
              </h4>
              <h6 className="m-2">
                Get your team access to 17,000+ top Udemy courses anytime,
                anywhere.
              </h6>
              <button type="button" className="btn btn-outline-dark business">
                <span>Try Udemy Business</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideCard;
