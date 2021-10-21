import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/carpic3.jpg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Live, Love, Cake </h1>
        <p> BAKED WITH LOVE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
