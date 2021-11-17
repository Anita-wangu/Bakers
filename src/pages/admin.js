import React from "react";
import { useEffect, useState } from "react";
import getCurrentUser from "../auth/auth";
import { Redirect } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";
import Admincake1 from "../assets/adm1.jpg";
import Admincake2 from "../assets/adm2.jpg";
import Admincake3 from "../assets/adm3.jpg";
import CakeLeft from "../assets/cakeLeft.jpg";
import { Link } from "react-router-dom";
import "../styles/admin.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    // url: "/static/images/buttons/breakfast.jpg",
    name: Admincake1,
    title: "Add Products",
    width: "35%",
    height: "550px",
    Link: "AddPostForm",
    textDecoration: "none",
  },
  {
    url: "/assets/cakeLeft.jpg",
    name: Admincake2,
    title: "Edit Products",
    width: "35%",
    height: "550px",
    Link: "EditProductsForm",
  },
  {
    // url: "../assets/admincake3.jfif",
    name: Admincake3,
    title: "Orders",
    width: "30%",
    height: "550px",
    Link: "ViewOrders",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    if (user && user.role === "admin") {
      setIsAdmin(user);
    } else if (user) {
      setIsAdmin(null);
    } else {
      setRedirect("/LoginForm");
    }
  }, [Admin]);

  const admin_component = (
    <div className="admin">
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
              height: image.height,
              textDecoration: image.textDecoration,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.name})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Link
                to={image.Link}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Link>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </div>
  );
  const $403_component = (
    <div>
      <h1>403 Not Allowed</h1>
    </div>
  );

  return isAdmin ? (
    admin_component
  ) : redirect ? (
    <Redirect to={redirect} />
  ) : (
    $403_component
  );
};

export default Admin;
