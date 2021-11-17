import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenueItem from "../components/MenuItem";
import { MenuList } from "../helpers/MenuList";
import Select from "react-select";
import SinglePic from "../assets/singleprod.jpg";
import { Redirect } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import getCurrentUser from "../auth/auth";
import Searchbar from "../components/Searchbar";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SingleProduct = ({ MenuList, addToCart, items }) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const { name } = useParams();
  console.log(MenuList);
  const menudesc = MenuList.find((item) => item.name === name);
  const menuitem = MenuList.find((item) => item.name === name);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e) => {
    setSelectedOption(e);
  };
  const [selectedOptions, setSelectedOptions] = useState(null);
  const handleChanges = (e) => {
    setSelectedOptions(e);
  };
  const [timeValue, setValue] = React.useState(new Date());
  // const [value, setValue] = React.useState(new Date("2021-10-1T 12:00:00"));
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [numOfCakes, setNumOfCakes] = useState(1);
  const [desc, setDesc] = useState("");

  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setIsLoggedIn(true);
    } else {
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>;
      setRedirect("/LoginForm");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    addToCart({
      id: menuitem._id,
      egg: selectedOption[0].value == 1 ? true : false,
      size: selectedOptions[0].value,
      numOfCakes,
      desc,
      time: timeValue,
    });
  };
  const data = [
    {
      value: 1,
      label: "Egg",
    },
    {
      value: 2,
      label: "Eggless",
    },
  ];
  const sizes = [
    {
      value: 1,
      label: 1,
    },
    {
      value: 1.5,
      label: 1.5,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 5,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
  ];

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div onClick={handleClick}>
      {/* <Searchbar MenuList={MenuList} items={items} addToCart={addToCart} /> */}
      <div className="singleProductContainer">
        <div className="singleProductCard">
          <h1>{menudesc.title}</h1>
          <MenueItem
            name={menuitem.name}
            image={menuitem.imageUrl}
            price={menuitem.price}
          />

          <p className="productDesc">{menudesc.description}</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="singleProductSelect"
          style={{ backgroundImage: `url(${SinglePic})` }}
        >
          <p>Tag:&nbsp;&nbsp; &nbsp;&nbsp; {menudesc.name}</p> <br />
          <p>Price:&nbsp;&nbsp;&nbsp;&nbsp; ${menudesc.price}</p>
          <br />
          <div>
            Cake-type:
            <Select
              className="selectType"
              isMulti
              placeholder="Select Option"
              value={selectedOption}
              options={data}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <br />
          <div>
            Size in Kgs:
            <Select
              className="selectSize"
              isMulti
              placeholder="Select Option"
              value={selectedOptions}
              options={sizes}
              onChange={handleChanges}
              required
            />
          </div>
          <label className="descLabel" htmlFor="message">
            Additional Description:
          </label>
          <textarea
            className="desciptionArea"
            rows="6"
            // placeholder="Enter description..."
            name="Dascription"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="numberInputDiv">
            Number of cakes:
            <br />
            <input
              type="number"
              min="1"
              className="numberInput"
              required
              onChange={(e) => setNumOfCakes(e.target.value)}
              value={numOfCakes}
            />
          </div>
          <div className="cal">
            Select Pick-up Date and Time: <br />
            <br />
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              className="caltime"
            >
              <DateTimePicker
                className="caltime"
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={timeValue}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </div>
          <button
            className="addCartButton"
            type="submit"
            // onClick={() => addToCart(menuitem._id)}
          >
            ADD TO CART
          </button>
        </form>
      </div>
    </div>
  );
};
export default SingleProduct;
