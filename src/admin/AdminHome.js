import React from "react";
// import { Link } from "react-router-dom";
import BannerImage from "../assets/carpic3.jpg";
import "../styles/AdminHome.css";

const Home = () => {
  return (
    <div
      className="adminHome"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="adminHeaderContainer">
        <h1> Live, Love, Cake </h1>
        <p> BAKED WITH LOVE</p>
        {/* <Link to="/">
          <button className="homeOrderButton"> ORDER NOW </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
