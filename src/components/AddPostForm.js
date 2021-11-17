import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/AddPostForm.css";
import Adminformpic from "../assets/admincake.jpg";
import { Link } from "react-router-dom";

const AddPostForm = () => {
  const [image, setImage] = useState(null);
  const [createObjectUrl, setCreateObjectUrl] = useState(null);
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
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

    try {
      await axios.post("http://localhost:2000/api/product", body);
      history.push("/menu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="postHeader">
        <div
          className="addFormContainer"
          style={{ backgroundImage: `url(${Adminformpic})` }}
        >
          <form encType="multipart/form-data" onSubmit={uploadToServer}>
            <h1> Add Product</h1>
            <img src={createObjectUrl} />
            <div className="postFormInputs">
              <div>
                <label>
                  Select Image: <br />
                </label>
                <input
                  className="formImageInput"
                  type="file"
                  alt="product image"
                  onChange={uploadToClient}
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
                <button type="submit" className="addFormButton">
                  Upload
                </button>
                <Link to="/admin">
                  <button type="button" className="addFormButtonBack">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPostForm;
