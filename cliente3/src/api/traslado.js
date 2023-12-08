import axios from "./axios";

export const gettrasladosRequest = () => axios.get("/traslado");

// eslint-disable-next-line no-unused-vars
export const gettrasladoRequest = (id) =>
  axios.get(`/traslado/${id}`);

export const createtrasladoRequest = (traslado) =>
  axios.post("/traslado", traslado);

export const updatetrasladoRequest = (traslado) =>
  axios.patch(`/traslado/${traslado.id_user}`, traslado);

// eslint-disable-next-line no-unused-vars
export const deletetrasladoRequest = (id) => axios.delete(`/traslado/${id}`);
