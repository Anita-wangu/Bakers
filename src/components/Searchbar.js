import React from "react";
import { useState } from "react";
import Menu from "../pages/Menu";

import "../styles/Searchbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

function Searchbar(props) {
  // const StyledBadge = styled(Badge)(({ theme }) => ({
  //   "& .MuiBadge-badge": {
  //     right: -3,
  //     top: 13,
  //     border: `2px solid ${theme.palette.background.paper}`,
  //     padding: "0 4px",
  //   },
  // }));

  const { onSearch, MenuList, items } = props;

  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };
  console.log(searchText);
  return (
    <>
      <div className="containerSearchbar">
        <div>
          <p className="searchTitle">Delicious to the last piece.</p>
        </div>
        <div className="search">
          <input
            className="searchbar"
            onChange={handleInput}
            onKeyPress={handleEnterKeyPressed}
            type="text"
            value={searchText}
            placeholder="Search.."
          />
          <a id="btnSearch" className="btn-search">
            <i className="fa fa-search"></i>
          </a>
        </div>
        {/* <div className="shopping">
          <IconButton aria-label="add to shopping cart">
            <Link to="/shoppingCart" color="primary">
              <StyledBadge badgeContent={items.length}>
                <ShoppingCartOutlinedIcon />
              </StyledBadge>
            </Link>
          </IconButton>
        </div> */}
      </div>
      <Menu menusearch={searchText} MenuList={MenuList} />
    </>
  );
}

export default Searchbar;
