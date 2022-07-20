import React, { useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../redux/products/productsAction";

const Store = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {productState.loading ? (
        <p>Loading</p>
      ) : productState.error ? (
        <p>Error 505</p>
      ) : (
        productState.products.map((product) => (
          <div>
            <p>{product.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Store;
