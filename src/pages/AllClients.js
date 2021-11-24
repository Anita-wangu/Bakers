import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AllClients.css";
import { Button } from "@mui/material";

const AllClients = () => {
  //   console.log(UserList);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/auth/users")
      .then((res) => setUserList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* {UserList.length && ( */}
      <div>
        <table border="1" className="viewClientsTable">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Email</th>
              <th>Contacts</th>
              <th>Activation Status</th>
              <th colSpan="2"> Status</th>
            </tr>
          </thead>

          <tbody>
            {userList.length &&
              userList.map((user) => <AllUsers user={user} />)}
          </tbody>
        </table>
      </div>
      {/* )} */}
    </>
  );
};

export default AllClients;

const AllUsers = ({ user }) => {
  const activeUsers = (id) => {
    try {
      axios.put(`http://localhost:2000/api/user/${id}`, {
        status: "In active",
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  console.log(user);

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.active ? "Active" : "In Active"}</td>
      <td>
        <Button
          size="small"
          style={{
            paddingBottom: "10px",
            color: "black",
            fontWeight: "bold",
            paddingRight: "25px",
          }}
          onClick={() => activeUsers(user._id)}
        >
          De-activate
        </Button>
      </td>
    </tr>
  );
};
