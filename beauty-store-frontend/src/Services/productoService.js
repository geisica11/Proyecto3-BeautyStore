import axios from "axios";

const API = "https://localhost:7050/api/Productos";

export const getProductos = async () => {
    const response = await axios.get(API);
    return response.data;
};