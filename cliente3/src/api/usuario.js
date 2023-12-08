import axios from "./axios";

export const getUsuariosRequest = () => axios.get("/usuario");

// eslint-disable-next-line no-unused-vars
export const getUsuarioRequest = (id) =>
  axios.get(`/usuario/${id}`);

export const createUsuarioRequest = (usuario) =>
  axios.post("/usuario", usuario);

export const updateUsuarioRequest = (usuario) =>
  axios.patch(`/usuario/${usuario.id_user}`, usuario);

// eslint-disable-next-line no-unused-vars
export const deleteUsuarioRequest = (id) => axios.delete(`/usuario/${id}`);
