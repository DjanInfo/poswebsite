import axios from "axios";

const api = axios.create({baseURL: "http://localhost:8000"});

export const buscarOuvidorias = async () => {
    const Ouvidorias = await api.get("/ouvidorias");
    return Response.data;
}
