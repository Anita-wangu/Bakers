import React, { useState } from "react";
import Logo from "../assets/cakeLogo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

const AdminNavbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div>
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo} />
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">AdminHome</Link>
          <Link to="/products">Products</Link>
          <Link to="/checkout">Checkout</Link>

          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
