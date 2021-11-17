// import React from "react";
// import { Link } from "react-router-dom";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// const MenueItem = ({ image, name, price }) => {
//   return (
//     <div className="menuItem">
//       <Link to={`product/${name}`}>
//         <div style={{ backgroundImage: `url(${image})` }}> </div>
//       </Link>
//       <h1> {name} </h1>
//       <p> ${price} </p>
//       <div className="productSelection">
//         <Link to={`product/${name}`}>
//           <button className="MenuSelectButton">Select</button>
//         </Link>
//         <div className="cartIcon">
//           <ShoppingCartOutlinedIcon />
//         </div>

//         <div className="favIcon">
//           <FavoriteBorderOutlinedIcon />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenueItem;

import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const MenueItem = ({ image, name, price }) => {
  return (
    <div className="menuItem">
      <Link to={`product/${name}`}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
      </Link>
      <h1> {name} </h1>
      <p> ${price} </p>
      <div className="productSelection">
        <Link to={`product/${name}`} className="cardLink">
          <button className="MenuSelectButton">Select</button>

          <div className="cartIcon">
            <ShoppingCartOutlinedIcon />
          </div>
        </Link>

        <div className="favIcon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default MenueItem;
