import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/editais"
}); //conexão com o backend

export const buscarEditais = async () => {
    const response = await api.get("/editais");
    return response.data;
};

//endpoints
function getEditais() {
}