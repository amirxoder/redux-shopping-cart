import axios from "axios";

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUESTS",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(fetchProductsSuccess(res.data)))
      .catch((err) => dispatch(fetchProductsFailure(err.message)));
  };
};

export default fetchProducts;
