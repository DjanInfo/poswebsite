import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const buscarDocentes = async () => {
    const response = await api.get("/docentes");
    return response.data;
}