import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getSpecificProduct } from "../services/api";

//react router dom
import { Link } from "react-router-dom";

const ProductDetails = () => {
  // const [productData, setProductData] = useState({});

  const params = useParams();
  const id = params.id;

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     setProductData(await getSpecificProduct(id));
  //   };
  //   fetchProduct();
  // }, []);

  const products = useSelector((state) => state.productsState.products);
  const product = products[id - 1];

  const { title, price, description, category, image } = product;

  return (
    <div>
      <img src={image} alt="product-img" style={{ width: "200px" }} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <p>
          <span>Category : </span>
          {category}
        </p>
        <Link to={"/products"}>back to shop</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
