// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import getCurrentUser from "../auth/auth";
// import "../styles/ShoppingCart.css";
// import { grey } from "@mui/material/colors";
// // import Alert from "@mui/material/Alert";
// // import Stack from "@mui/material/Stack";

// import Box from "@mui/material/Box";

// const ShoppingCart = ({ items, MenuList }) => {
//   const primary = grey[900];
//   const accent = grey["A900"];

//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const user = getCurrentUser();
//     if (user) {
//       setUser(user);
//     }
//   }, []);
//   console.log(items);

//   return (
//     <>
//       <div className="shoppingBox">
//         {items.length ? (
//           <>
//             <h1> Shopping Cart</h1>
//             {items.map((item) => {
//               let product = MenuList.find((product) => product._id === item.id);
//               return product ? (
//                 <ShoppingCartItem
//                   product={product}
//                   item={item}
//                   key={product._id}
//                 />
//               ) : null;
//             })}
//             <p className="shoppingBoxTotals">
//               {console.log(items)}
//               Total $: {calculateTotal(items, MenuList)}
//             </p>
//             {/* <Stack sx={{ width: "100%" }} spacing={2}>
//               <Alert severity="success">Order Successful</Alert>
//             </Stack> */}
//             <button
//               className="shoppingBoxButton"
//               disabled={!user}
//               onClick={() => {
//                 checkOut(user, items, calculateTotal(items, MenuList));
//               }}
//             >
//               Check Out
//             </button>
//           </>
//         ) : (
//           <p className="shoppingBoxPara">No items in the cart</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default ShoppingCart;

// const ShoppingCartItem = ({ product, item }) => {
//   return (
//     <>
//       <div className="shoppingcartFlex">
//         <img
//           className="shoppingcartFlexImg"
//           src={product.imageUrl}
//           alt={product.name}
//         />
//         <p className="shoppingcartFlexName">{product.name}</p>
//         <p className="shoppingcartFlexCalc">Kgs: {item.size}</p>
//         <p className="shoppingcartFlexCalc">Pieces: {item.numOfCakes}</p>
//         <p className="shoppingcartFlexPrice">${product.price}</p>
//         <div>
//           <p>hello</p>
//         </div>
//       </div>
//     </>
//   );
// };

// function calculateTotal(items, products) {
//   let prices = items
//     .map((i) => {
//       return products.find((product) => product._id === i.id);
//     })
//     .map((i) => {
//       let x = items.find((x) => x._id == i.id);
//       let num = x.numOfCakes;
//       let size = x.size;
//       return i.price * num * size;
//     });

//   let total = prices.reduce((total, currentValue) => total + currentValue, 0);
//   return total;
// }

// async function checkOut(user, items, total) {
//   if (user) {
//     try {
//       const response = await axios.post("http://localhost:2000/api/order", {
//         items,
//         total,
//         user: user._id,
//       });
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return;
//   }
//   console.log(items);
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import getCurrentUser from "../auth/auth";
import "../styles/ShoppingCart.css";
import { grey } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
// import Stack from "@mui/material/Stack";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const ShoppingCart = ({ items, MenuList }) => {
  const [user, setUser] = useState(null);
  const [calc, setCalc] = useState(0);
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setUser(user);
    }
  }, []);
  let numCake = 0;
  let numSize = 0;
  let numPrice = 0;
  const [subTotals, setSubTotals] = useState([]);

  let calcTotals = (item, product) => {
    const price = item.size * item.numOfCakes * product.price;
    return price;
  };
  console.log(subTotals);

  return (
    <>
      <div className="shoppingBox">
        {items.length ? (
          <>
            <h1> Shopping Cart</h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">
                      Quantities&nbsp;(in Kgs)
                    </TableCell>
                    <TableCell align="right">Pieces</TableCell>
                    <TableCell align="right">
                      Price&nbsp;(ksh. per kg)
                    </TableCell>
                    <TableCell align="right">
                      Total Price&nbsp;(in ksh)
                    </TableCell>
                  </TableRow>
                </TableHead>
                {items.map((item) => {
                  let product = MenuList.find(
                    (product) => product._id === item.id
                  );
                  numCake += Number(item.numOfCakes);
                  numSize += Number(item.size);
                  numPrice += Number(product.price);

                  // setTotals([...totals, calcTotals(item, product)]);
                  // console.log(numPrice);
                  return product ? (
                    <ShoppingCartItem
                      product={product}
                      item={item}
                      key={product._id}
                      calcTotals={calcTotals}
                    />
                  ) : null;
                })}
              </Table>
            </TableContainer>
            <p className="shoppingBoxTotals">
              Total $: {calculateTotal(items, MenuList)}
            </p>

            <div>
              <button
                className="shoppingBoxButton"
                disabled={!user}
                onClick={() => {
                  <Alert severity="success">Order Successful</Alert>;
                  checkOut(user, items, calculateTotal(items, MenuList));
                }}
              >
                Check Out
              </button>

              <Link to="/ClientNotification">
                <button className="shoppingBoxOrderButton">My Orders</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="shoppingBoxPara">No items in the cart</p>
            <Link to="/ClientNotification">
              <button className="shoppingBoxOrderButton">My Orders</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;

const ShoppingCartItem = ({ product, item, calcTotals }) => {
  return (
    <>
      <TableBody>
        <TableRow
          key={product.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {product.name}
          </TableCell>
          <TableCell align="right">{product.name}</TableCell>
          <TableCell align="right">{item.size}</TableCell>
          <TableCell align="right">{item.numOfCakes}</TableCell>
          <TableCell align="right">{product.price}</TableCell>
          <TableCell align="right">
            {item.size.toString() +
              " kgs * " +
              item.numOfCakes.toString() +
              " pieces * ksh. " +
              product.price.toString() +
              " =  ksh. " +
              calcTotals(item, product)}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

function calculateTotal(items, products) {
  let prices = items
    .map((i) => {
      return products.find((product) => product._id === i.id);
    })
    .map((i) => {
      let x = items.find((x) => x.id == i._id);
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
  console.log(items, total);
}
