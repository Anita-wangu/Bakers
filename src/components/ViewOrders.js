// import "../styles/ViewOrders.css";
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

const ViewOrders = ({ OrderList }) => {
  return (
    <>
      {OrderList.length && (
        <div>
          <table border="1" className="viewProductsTable">
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

const AllOrders = ({ order }) => {
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
    <tr>
      <td>{order.user.email}</td>
      <td>{/*order.items*/}</td>
      <td>{order.total}</td>
      <td>{order.status}</td>
      <td>
        <button onClick={() => completeOrder(order._id)}> Completed</button>
        <button onClick={() => declineOrder(order._id)}> Declined</button>
      </td>
    </tr>
  );
};
