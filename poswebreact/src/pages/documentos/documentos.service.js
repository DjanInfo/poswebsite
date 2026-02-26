import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const buscarDocumentos = async () => {
  const response = await api.get("/documentos");
  return response.data;
<<<<<<< HEAD
};

export const buscarDocumentoPorId = async (id) => {
  const response = await api.get(`/documentos/${id}`);
  return response.data;
};

export const criarDocumento = async (dados) => {
  const response = await api.post("/documentos", dados);
  return response.data;
};

export const atualizarDocumento = async (id, dados) => {
  const response = await api.put(`/documentos/${id}`, dados);
  return response.data;
};

export const excluirDocumento = async (id) => {
  await api.delete(`/documentos/${id}`);
  return true;
=======
>>>>>>> 9097860fee835603fbdfd784844faed7ca8331ce
};