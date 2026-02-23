import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const buscarDocumentos = async () => {
  const response = await api.get("/documentos");
  return response.data;
};