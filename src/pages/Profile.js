import React from "react";
import "../styles/Profile.css";
import SinglePic from "../assets/singleprod.jpg";
import Purple from "../assets/profile3.jpg";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid, Input } from "@mui/material";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
  },
});

const Profile = (props) => {
  const { user } = props;
  const [createObjectUrl, setCreateObjectUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const history = useHistory();

  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateObjectUrl(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("profile-image", image);
    body.append("name", name);
    body.append("email", email);
    body.append("password", password);
    body.append("phone", phone);

    try {
      await axios.post("http://localhost:2000/api/", body);
      // history.push("/menu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="profileTitle">Profile</h1>
      <div
        className="profileContainer"
        style={{
          backgroundImage: `url(${Purple})`,
          objectFit: "cover",
          marginBottom: "50px",
        }}
      >
        <form encType="multipart/form-data" onSubmit={uploadToServer}>
          <Grid>
            <Grid item className="prifilePicture">
              <input
                className="profileImageInput"
                type="file"
                id="file"
                name="image"
                onChange={uploadToClient}
              />
              <img
                className="profileImage"
                src={createObjectUrl}
                width="100%"
                height="100%"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <br />
            </Grid>
            <Grid item>
              <label
                className="profileLabel"
                for="file"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Edit Pic
              </label>
            </Grid>
            <br />
            <div className="profileDetails">
              <Grid item>
                <CssTextField
                  id="custom-css-outlined-input"
                  name="name"
                  type="text"
                  value={name}
                  sx={{
                    width: "350px",
                    color: "white",
                    border: "18px",
                  }}
                  label="Enter New name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <br />
              <Grid className="profileInput">
                <CssTextField
                  id="custom-css-outlined-input"
                  className="textfield"
                  name="email"
                  type="email"
                  value={email}
                  style={{
                    width: "350px",
                    color: "white",
                  }}
                  label="Enter New email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <br />
              <Grid item className="profileInput">
                <CssTextField
                  id="custom-css-outlined-input"
                  name="password"
                  type="password"
                  value={password}
                  style={{
                    width: "350px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  label="Enter New password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <br />

              <Grid item className="profileInput">
                <CssTextField
                  id="custom-css-outlined-input"
                  name="phone"
                  type="text"
                  defaultValue={user.phone}
                  style={{
                    width: "350px",
                    color: "white",
                  }}
                  label="Enter New Phone number"
                  value={user.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <br />
              <Grid item className="profileInput">
                <Button
                  className="profileButton"
                  type="submit"
                  size="small"
                  style={{
                    paddingBottom: "10px",
                    color: "white",
                    backgroundColor: "black",
                    fontWeight: "bold",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "10px",
                  }}
                >
                  Update
                </Button>
              </Grid>
            </div>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default Profile;
