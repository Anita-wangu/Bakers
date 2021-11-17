import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../styles/AddPostForm.css";
import Adminformpic from "../assets/admincake.jpg";
import "../styles/EditForm.css";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Carpic3 from "../assets/carpic3.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Input from "@mui/material/Input";

const EditForm = (props) => {
  const { product } = props;
  console.log(product);
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const useStyles = makeStyles({
    root: {
      overflow: "scroll",
      height: "350px",
    },
  });
  const classes = useStyles();

  const [image, setImage] = useState(product.imageUrl);
  const [createObjectUrl, setCreateObjectUrl] = useState(product.imageUrl);
  const [name, setName] = useState(product.name);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const history = useHistory();

  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateObjectUrl(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("product-image", image);
    body.append("name", name);
    body.append("title", title);
    body.append("description", description);
    body.append("price", Number(price));
    body.append("id", product._id);

    try {
      await axios.put("http://localhost:2000/api/product", body);
      history.push("/menu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <div className="postHeader">
          <div
            className="editFormContainer"
            style={{ backgroundImage: `url(${Adminformpic})` }}
          >
            <form encType="multipart/form-data">
              <h1> Add Product</h1>
              <img src={createObjectUrl} />
              <div className="editFormInputs">
                <div>
                  <label>
                    Select Image: <br />
                  </label>
                  <input
                    className="editImageInput"
                    type="file"
                    alt="product image"
                    //   onChange={uploadToClient}
                    name="product-image"
                    id="product-image"
                  />
                  <br />
                </div>
                <label>
                  Product Title:
                  <br />
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <label>
                  Product Name:
                  <br />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>
                  Product Description:
                  <br />
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <label>
                  Product Price:
                  <br />
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={price}
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <div>
                  <button type="submit" className="editFormButton">
                    Edit
                  </button>
                  <Link to="/EditProductsForm">
                    <button type="button" className="editFormButtonBack">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Dialog> */}

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Product</DialogTitle>
        <Card>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            image={product.imageUrl}
            style={{
              objectFit: "cover",
            }}
          /> */}
          <CardMedia>
            <img
              src={createObjectUrl}
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            />
          </CardMedia>
          <form encType="multipart/form-data" onSubmit={uploadToServer}>
            <CardContent className={classes.root}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      marginTop: "0px",
                      paddingTop: "0px",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Grid>
                {/* <grid item>
                  <img src={createObjectUrl} />
                  <TextField type="file" hidden />
                </grid> */}
                <Grid item>
                  <input
                    className="formImageInput"
                    type="file"
                    alt="product image"
                    onChange={uploadToClient}
                    name="product-image"
                    id="product-image"
                  />
                  <br />
                  <Grid item>
                    <label className="editLabel">Title:</label>
                    <br />
                    <TextField
                      id="title"
                      // label="Product Title"
                      variant="outlined"
                      value={title}
                      required
                      size="small"
                      defaultValue={product.title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <label className="editLabel">Name:</label>
                    <br />
                    <TextField
                      id="name"
                      // label="name"
                      variant="outlined"
                      value={name}
                      size="small"
                      required
                      defaultValue={product.name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <label className="editLabel">Description:</label>
                    <br />
                    <TextField
                      id="description"
                      // label="description"
                      variant="outlined"
                      value={description}
                      size="small"
                      required
                      maxRows={3}
                      defaultValue={product.description}
                      onChange={(e) => setDescription(e.target.value)}
                      multiline
                    />
                  </Grid>

                  <Grid item>
                    <label className="editLabel">Price:</label>
                    <br />
                    <TextField
                      id="price"
                      // label="price"
                      variant="outlined"
                      value={price}
                      size="small"
                      required
                      defaultValue={product.price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <CardActions>
                      <Button
                        type="submit"
                        size="small"
                        style={{
                          paddingBottom: "10px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        Update
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default EditForm;
