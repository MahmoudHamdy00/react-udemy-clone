import React, { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import "../../Css//HomePage/FieldContainer.css";
import LoadingSpinner from "../LoadingSpinner";
import Card from "./Card";
import HeaderField from "./HeaderField";
import * as Icon from "react-bootstrap-icons";

function FieldContainer() {
  const [CoursesBody, setCoursesBody] = useState("");
  const { data, isLoading, hasError } = useContext(DataContext);
  const generateCoursesCard = useCallback(() => {
    let view = data?.map((course) => {
      return <Card data={course} key={course.id}></Card>;
    });
    return view;
  }, [data]);

  useEffect(() => {
    if (!isLoading) {
      let res = generateCoursesCard();
      setCoursesBody(res);
    }
  }, [data, generateCoursesCard, isLoading]);
  if (hasError) {
    return (
      <div className="filed-box">
        <HeaderField />

        <div className="cards-parent">
          <Icon.Eraser />
          Something went wrong.
        </div>
      </div>
    );
  }
  return (
    <div className="filed-box">
      <HeaderField />
      {isLoading ? (
        <LoadingSpinner />
      ) : CoursesBody.length === 0 ? (
        <div className="cards-parent">
          NO available courses with this criteria{" "}
        </div>
      ) : (
        <div className="cards-parent">{CoursesBody}</div>
      )}
    </div>
  );
}

export default FieldContainer;
