import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../redux/products/productsAction";
import Product from "./shared/Product";

//styles
import styles from "./Store.module.css";

const Store = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productState.products.length) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {productState.loading ? (
          <p>Loading</p>
        ) : productState.error ? (
          <p>Error 505</p>
        ) : (
          productState.products.map((product) => (
            <Product key={product.id} productData={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Store;
