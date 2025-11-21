import axiosClient from "./axiosConfig";

export const getProducts = () => {
  return axiosClient.get("/products").then(res => res);
};

export const createProduct = (payload) => {
  return axiosClient.post("/products", payload).then(res => res);
};
