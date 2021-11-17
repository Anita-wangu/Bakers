import React from "react";
import "../styles/Profile.css";
import SinglePic from "../assets/singleprod.jpg";
import Purple from "../assets/purple.jpg";

const Profile = () => {
  return (
    <>
      <h1 className="profileTitle">Profile</h1>
      <div
        className="profileContainer"
        style={{ backgroundImage: `url(${Purple})` }}
      >
        <div className="prifilePicture">
          <input
            className="profileImageInput"
            type="file"
            id="file"
            name="image"
          />
          <img
            className="profileImage"
            src={SinglePic}
            width="100%"
            height="100%"
          />
          <label className="profileLabel" for="file">
            Edit Pic
          </label>
        </div>
        <div className="profileDetails">
          <div className="profileInput">
            <input name="name" type="text" placeholder="Edit your name" />
          </div>
          <div className="profileInput">
            <input name="email" type="email" placeholder="Edit your Email" />
          </div>
          <div className="profileInput">
            <input
              name="password"
              type="password"
              placeholder="Change your password"
            />
          </div>

          <div className="profileInput">
            <input
              name="phone"
              type="text"
              placeholder="Edit your Phone Number"
            />
          </div>
          <div className="profileInput">
            <button className="profileButton">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
