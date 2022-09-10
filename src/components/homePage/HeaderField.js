import React, { useEffect, useState } from "react";
import { HomeHeader } from "../../db";
import useFetch from "../../Hooks/useFetch";
import LoadingSpinner from "../LoadingSpinner";

function HeaderField() {
  const CourseHeader =
    "https://my-json-server.typicode.com/M7mmed-Sayed/myjsondata/python-header";
  //   const { data, isLoading, hasError } = useFetch(CourseHeader);
  const data = HomeHeader;
  const isLoading = false;
  const hasError = false;
  return (
    <div className="course-header">
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <LoadingSpinner/>
      ) : (
        <>
          <div className="course-header">
            <div className="title">
              <h3>{data.tagline}</h3>
            </div>
            <div className="description">
              <p>{data.description}</p>
            </div>
            <button className="explore-btn"> Explor Python</button>
          </div>
        </>
      )}
    </div>
  );
}

export default HeaderField;
