import React, { useState, useEffect } from "react";
import Logo from "../assets/cakeLogo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import { useHistory } from "react-router-dom";
import getCurrentUser from "./../lib/auth";

import "../styles/Searchbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const Navbar = ({ items }) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -4,
      top: 19,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      color: "white",
    },
  }));

  const [openLinks, setOpenLinks] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  const handleLogoutClick = (e) => {
    localStorage.removeItem("user");
    history.push("/");
    window.location.reload();
  };
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setUser(user);
    }
  }, []);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} />
          <h1>{user ? user.name : "Cake♥"}</h1>
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/shoppingCart" color="white">
              <div className="shopping">
                <IconButton aria-label="add to shopping cart">
                  <StyledBadge badgeContent={items.length}>
                    <ShoppingCartOutlinedIcon />
                  </StyledBadge>
                </IconButton>
              </div>
            </Link>
            {!user && (
              <>
                <Link to="/LoginForm">Login</Link>
              </>
            )}
            {user && user.role === "admin" && (
              <>
                <Link to="/admin"> Admin </Link>
              </>
            )}
            {user && (
              <li
                style={{
                  cursor: "pointer",
                }}
                onClick={handleLogoutClick}
              >
                <span>Logout</span>
              </li>
            )}
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/shoppingCart" color="white">
            {/* <div className="shopping"> */}
            {/* <IconButton aria-label="add to shopping cart"> */}
            <StyledBadge badgeContent={items.length}>
              <ShoppingCartOutlinedIcon
                style={{
                  size: "20px",
                  width: "23px",
                  paddingTop: "2px",
                }}
              />
            </StyledBadge>
          </Link>
          {!user && (
            <>
              <Link to="/LoginForm">Login</Link>
            </>
          )}
          {user && user.role === "admin" && (
            <>
              <Link to="/admin"> Admin </Link>
            </>
          )}
          {user && (
            <li
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "white",
              }}
              onClick={handleLogoutClick}
            >
              <span>Logout</span>
            </li>
          )}
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
