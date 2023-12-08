import axios from "./axios";

export const getmiembrosRequest = () => axios.get("/miembro");

// eslint-disable-next-line no-unused-vars
export const getmiembroRequest = (id) =>
  axios.get(`/miembro/${id}`);

export const createmiembroRequest = (miembro) =>
  axios.post("/miembro", miembro);

export const updatemiembroRequest = (miembro) =>
  axios.patch(`/miembro/${miembro.id_user}`, miembro);

// eslint-disable-next-line no-unused-vars
export const deletemiembroRequest = (id) => axios.delete(`/miembro/${id}`);
