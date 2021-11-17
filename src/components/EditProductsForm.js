import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EditProductsForm.css";
import { Link } from "react-router-dom";
import EditForm from "../pages/EditForm";
import Button from "@mui/material/Button";

const EditProductsForm = () => {
  const [MenuList, setMenuList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/product")
      .then((res) => setMenuList(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(MenuList);
  return (
    <>
      {MenuList.length && (
        <div>
          <table border="1" className="productsTable">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Edit Products</th>
                <th>Delete Products</th>
              </tr>
            </thead>
            <tbody>
              {MenuList.map((product) => (
                <AllProducts product={product} key={product._id} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default EditProductsForm;

const AllProducts = ({ product }) => {
  const [open, setOpen] = React.useState(false);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:2000/api/product/${id}`);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <tr className="rows">
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        {/* <Link to="/EditForm" test={test} className="editLinks">
          Edit
        </Link> */}
        <span className="editLinks">
          <Button
            type="submit"
            onClick={handleClickOpen}
            size="small"
            style={{
              paddingBottom: "10px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            EDIT
          </Button>
        </span>
      </td>
      <EditForm open={open} product={product} onClose={handleClose} />
      <td>
        {/* <Link className="editLinks" onClick={() => deleteProduct(val._id)}>
          Delete
        </Link> */}
        {/* <Link className="editLinks">Delete</Link> */}
        <Button
          size="small"
          onClick={() => deleteProduct(product._id)}
          style={{
            paddingBottom: "10px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
