import { axios } from "axios";

export const getSpecificProduct = async () => {
  const response = await axios.get(`https://fakestoreapi.com/products/1`);
  return response.data;
};
