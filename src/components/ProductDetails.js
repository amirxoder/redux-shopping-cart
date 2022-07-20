import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//react router dom
import { Link } from "react-router-dom";

//styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {

  const params = useParams();
  const id = params.id;


  const products = useSelector((state) => state.productsState.products);
  const product = products[id - 1];

  const { title, price, description, category, image } = product;

  return (
    <div className={styles.productDetails__wrapper}>
      <div className={styles.productDetails__container}>
        <img src={image} alt="product" className={styles.img} />
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
          <p className={styles.category}>
            <span>Category:</span> {category}
          </p>
          <div>
            <span>{price}$</span>
            <Link className={styles.details__btn} to={"/products"}>
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;