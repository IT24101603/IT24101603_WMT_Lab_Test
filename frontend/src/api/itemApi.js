import axios from "axios";

const DEFAULT_API_URL = import.meta.env.PROD
  ? "https://it24101603-wmt-lab-test-1.onrender.com/api"
  : "http://localhost:5000/api";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || DEFAULT_API_URL,
});

export const getItems = () => API.get("/items");
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (itemData) => API.post("/items", itemData);
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;