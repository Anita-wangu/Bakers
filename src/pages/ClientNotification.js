import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import getCurrentUser from "./../lib/auth";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const ClientNotification = ({ items, MenuList }) => {
  const [user, setUser] = useState();
  const [clientOrderList, setClientOrderList] = useState([]);
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setUser(user);
      axios
        .get(`http://localhost:2000/api/order/${user._id}`)
        .then((res) => setClientOrderList(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(clientOrderList);
  console.log(user);
  return (
    <>
      {clientOrderList.length ? (
        <>
          <h1>My Orders</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell>Image</TableCell> */}
                  <TableCell align="left">Ordered Items</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                  <TableCell align="center">Date Created </TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clientOrderList.map((order) => {
                  return <OrderedItems order={order} products={MenuList} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <p className="shoppingBoxPara">No items Ordered</p>
      )}
    </>
  );
};
export default ClientNotification;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderedItems = ({ order, products }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableRow
      key={order._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/* <TableCell component="th" scope="row">
        {order.user.name}
      </TableCell> */}
      <TableCell>
        <Button
          size="small"
          style={{
            paddingBottom: "10px",
            color: "black",
            fontWeight: "bold",
          }}
          onClick={handleClickOpen}
        >
          click to view order details
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            {order.user.name} <br /> {order.user.email}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {order.items.length &&
                order.items.map((item) => {
                  console.log(products);

                  const product = products.find((p) => (p._id = item.product));
                  return (
                    <div key={item._id}>
                      <p>Product id: {product._id}</p>
                      <p>Product name: {product.name}</p>
                      <p>Size in Kgs: {item.cakeSize}</p>
                      <p>Cake type: {item.cakeType}</p>
                      <p>Additional Description: {item.description}</p>
                      <p>Peices: {item.numOfCakes}</p>
                      <p>Created at: {new Date(item.createdAt).toString()}</p>
                      <p>Pickup: {new Date(item.pickUp).toString()}</p>
                    </div>
                  );
                })}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </TableCell>
      <TableCell align="right">{order.total}</TableCell>
      <TableCell align="center">
        {new Date(order.createdAt).toString()}
      </TableCell>

      {/* <TableCell align="right">{products.name}</TableCell> */}
      <TableCell align="right">{order.status}</TableCell>
    </TableRow>
  );
};
