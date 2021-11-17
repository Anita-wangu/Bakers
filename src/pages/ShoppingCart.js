import React, { useState, useEffect } from "react";
import axios from "axios";
import getCurrentUser from "../auth/auth";
import "../styles/ShoppingCart.css";
import { grey } from "@mui/material/colors";

import Box from "@mui/material/Box";

const ShoppingCart = ({ items, MenuList }) => {
  const primary = grey[900];
  const accent = grey["A900"];

  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setUser(user);
    }
  }, []);
  console.log(items);

  return (
    <>
      <div className="shoppingBox">
        {items.length ? (
          <>
            <h1> Shopping Cart</h1>
            {items.map((item) => {
              let product = MenuList.find((product) => product._id === item.id);
              return product ? (
                <ShoppingCartItem
                  product={product}
                  item={item}
                  key={product._id}
                />
              ) : null;
            })}
            <p className="shoppingBoxTotals">
              Total $:{calculateTotal(items, MenuList)}
            </p>
            <button
              className="shoppingBoxButton"
              disabled={!user}
              onClick={() => {
                checkOut(user, items, calculateTotal(items, MenuList));
              }}
            >
              Check Out
            </button>
          </>
        ) : (
          <p className="shoppingBoxPara">No items in the cart</p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;

const ShoppingCartItem = ({ product, item }) => {
  return (
    <div className="shoppingcartFlex">
      <img
        className="shoppingcartFlexImg"
        src={product.imageUrl}
        alt={product.name}
      />
      <p className="shoppingcartFlexName">{product.name}</p>
      <p className="shoppingcartFlexCalc">Kgs: {item.size}</p>
      <p className="shoppingcartFlexCalc">Pieces: {item.numOfCakes}</p>
      <p className="shoppingcartFlexPrice">${product.price}</p>
    </div>
  );
};

function calculateTotal(items, products) {
  let prices = items
    .map((i) => {
      return products.find((product) => product._id === i.id);
    })
    .map((i) => {
      let x = items.find((x) => x._id == i.id);
      let num = x.numOfCakes;
      let size = x.size;
      return i.price * num * size;
    });

  let total = prices.reduce((total, currentValue) => total + currentValue, 0);
  return total;
}

async function checkOut(user, items, total) {
  if (user) {
    try {
      const response = await axios.post("http://localhost:2000/api/order", {
        items,
        total,
        user: user._id,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  } else {
    return;
  }
  console.log(items);
}
