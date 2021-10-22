import React from "react";
import { useParams } from "react-router";
import MenueItem from "../components/MenuItem";
import { MenuList } from "../helpers/MenuList";

const SingleProduct = () => {
  const { name } = useParams();
  const menuitem = MenuList.find((item) => item.name === name);
  return (
    <div>
      {/* <h1>{menuitem.name}</h1> */}
      <MenueItem
        name={menuitem.name}
        image={menuitem.image}
        price={menuitem.price}
      />
    </div>
  );
};

export default SingleProduct;
