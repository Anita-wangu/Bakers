// import "../styles/ViewOrders.css";
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import "../styles/ViewOrders.css";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const ViewOrders = ({ OrderList }) => {
  return (
    <>
      {OrderList.length && (
        <div>
          <table border="1" className="viewsTable">
            <thead>
              <tr>
                <th>Client</th>
                <th>Ordered Products</th>
                <th>Totals</th>
                <th>Order Status</th>
                <th colSpan="2"> Status</th>
              </tr>
            </thead>
            <tbody>
              {OrderList.map((order) => (
                <AllOrders order={order} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ViewOrders;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AllOrders = ({ order }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;
  const completeOrder = (id) => {
    try {
      axios.put(`http://localhost:2000/api/order/${id}`, {
        status: "completed",
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  const declineOrder = (id) => {
    try {
      axios.put(`http://localhost:2000/api/order/${id}`, {
        status: "declined",
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <tr className="viewRows">
      <td>{order.user.email}</td>
      {/* <td key={order.id}>{order.item}</td> */}
      <td>
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
          <DialogTitle>{order.user.email}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {/* {order.items} */} order details
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
        {/* <Button
          aria-describedby={id}
          size="small"
          style={{
            paddingBottom: "10px",
            color: "black",
            fontWeight: "bold",
            paddingRight: "25px",
          }}
          onClick={handleClick}
        >
          Order Details
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>{order.items}</Typography>
        </Popover> */}
      </td>
      <td>{order.total}</td>
      <td>{order.status}</td>
      <td>
        <Button
          size="small"
          style={{
            paddingBottom: "10px",
            color: "black",
            fontWeight: "bold",
            paddingRight: "25px",
          }}
          onClick={() => completeOrder(order._id)}
        >
          Completed
        </Button>
        <Button
          size="small"
          style={{
            paddingBottom: "10px",
            color: "black",
            fontWeight: "bold",
          }}
          onClick={() => declineOrder(order._id)}
        >
          Declined
        </Button>
      </td>
    </tr>
  );
};
