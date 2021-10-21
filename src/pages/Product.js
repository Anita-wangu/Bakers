import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <div className="productContainer">
      <Navbar />
      <wrapper className="productWrapper">
        <div className="imageContainer">
          <image className="productImage" src="" />
        </div>
        <div className="infoContainer">
          <title className="productTitle">
            <h1>CAKES</h1>
          </title>
          <desc className="productDescription">
            <p>
              Lorem Ipsum è un testo segnaposto utilizzato nel settore della
              tipografia e della stampa. Lorem Ipsum è considerato il testo
              segnaposto standard sin dal sedicesimo secolo, quando un anonimo
              tipografo prese una cassetta di caratteri e li assemblò per
              preparare un testo campione.
            </p>
          </desc>
          <price className="productPrice">
            <span></span>$12
          </price>
          <div className="filterContainer">
            <filter>
              <div className="filterTitle">Size in kgs</div>
            </filter>
          </div>
        </div>
      </wrapper>
      <Footer />
    </div>
  );
};

export default Product;
