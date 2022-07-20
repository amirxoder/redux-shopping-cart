import React from "react";
import { shorten } from "../../helpers/functions";
import { Link } from "react-router-dom";

const Product = ({ productData }) => {
  const { title, price, image, id } = productData;
  return (
    <div>
      <img src={image} alt="product" style={{ width: "200px" }} />
      <div>
        <h1>{shorten(title)}</h1>
        <p>{price} $</p>
        <div>
          <Link to={`/products/${id}`}>Details</Link>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
