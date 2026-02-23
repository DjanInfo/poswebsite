import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/editais"
}); //conexão com o backend

export const buscarEditais = async () => {
    const response = await api.get("/editais");
    return response.data;
};

export async function getEditais() {
    const response = await api.get("/");
    return response.data;
}

export async function postEditais(edital) {
    const response = await api.post("/", edital);
    return response.data;
}

export async function deleteEditais(id) {
    if (!id) throw new Error("ID do edital é obrigatório para exclusão");
    const response = await api.delete(`/${id}`);
    return response.data;
}