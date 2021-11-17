// import { MenuList } from "../helpers/MenuList";
// import MenuItem from "../components/MenuItem";
// import "../styles/Menu.css";
// import Searchbar from "./../components/Searchbar";

// const Menu = () => {
//   return (
//     <>
//       <Searchbar />
//       <div className="menu">
//         <h1 className="menuTitle">Our Menu</h1>
//         <div className="menuList">
//           {MenuList.map((menuItem, key) => {
//             return (
//               <MenuItem
//                 key={key}
//                 image={menuItem.image}
//                 name={menuItem.name}
//                 price={menuItem.price}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;

import React, { useMemo, useState, useEffect } from "react";
// import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
// import Searchbar from "./../components/Searchbar";
import { Redirect } from "react-router-dom";
import getCurrentUser from "../auth/auth";

const Menu = (props) => {
  const { menusearch, MenuList } = props;
  console.log(menusearch);
  let isNotEmpty = menusearch.length > 0 ? true : false;

  return (
    <>
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>

        {MenuList && (
          <div className="menuList">
            {isNotEmpty
              ? MenuList.filter((menu) =>
                  menu.name.toLowerCase().includes(menusearch.toLowerCase())
                ).map((menuItem, key) => {
                  return (
                    <MenuItem
                      key={key}
                      image={menuItem.imageUrl}
                      name={menuItem.name}
                      price={menuItem.price}
                    />
                  );
                })
              : MenuList.map((menuItem, key) => {
                  return (
                    <MenuItem
                      key={key}
                      image={menuItem.imageUrl}
                      name={menuItem.name}
                      price={menuItem.price}
                    />
                  );
                })}
          </div>
        )}
      </div>
    </>
  );
  // return redirect ? <Redirect to={redirect} /> : menuPage;
};

export default Menu;
