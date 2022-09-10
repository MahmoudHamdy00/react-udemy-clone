import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/homePage/Banner";
import FieldContainer from "../components/homePage/FieldContainer";
import NavBar from "../components/NavBar/NavBar";
import "../Css/HomePage/HomePage.css";
function HomePage({ searchItems }) {
  return (
    <>
      <NavBar searchItems={searchItems} />
      <div className="home-body">
        <Banner />
        <FieldContainer></FieldContainer>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
