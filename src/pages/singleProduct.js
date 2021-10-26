import React, { useState } from "react";
import { useParams } from "react-router";
import MenueItem from "../components/MenuItem";
import { MenuList } from "../helpers/MenuList";
import Select from "react-select";
import SinglePic from "../assets/singleprod.jpg";

const SingleProduct = () => {
  const { name } = useParams();
  const menudesc = MenuList.find((item) => item.name === name);
  const menuitem = MenuList.find((item) => item.name === name);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e) => {
    setSelectedOption(e);
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
      value: 2,
      label: 1.5,
    },
    {
      value: 3,
      label: 2,
    },
    {
      value: 4,
      label: 3,
    },
    {
      value: 5,
      label: 4,
    },
    {
      value: 6,
      label: 5,
    },
  ];

  return (
    <div className="singleProductContainer">
      <div className="singleProductCard">
        <h1>{menudesc.title}</h1>
        <MenueItem
          name={menuitem.name}
          image={menuitem.image}
          price={menuitem.price}
        />

        <p className="productDesc">{menudesc.description}</p>
      </div>
      <div
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
            value={selectedOption}
            options={sizes}
            onChange={handleChange}
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
        ></textarea>
        <div className="numberInputDiv">
          Number of cakes:
          <br />
          <input type="number" min="1" className="numberInput" />
        </div>
        <button className="addCartButton" type="submit">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
