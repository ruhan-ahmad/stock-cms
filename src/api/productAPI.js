import axios from "./axiosConfig.js";

export const getProducts = () => {
  return axios.get("/products");
};

export const createProduct = (payload) => {
  return axios.post("/products", payload);
};