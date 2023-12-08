import axios from "./axios";

export const getcentroEducativosRequest = () => axios.get("/centroEducativo");

// eslint-disable-next-line no-unused-vars
export const getcentroEducativoRequest = (id) =>
  axios.get(`/centroEducativo/${id}`);

export const createcentroEducativoRequest = (centroEducativo) =>
  axios.post("/centroEducativo", centroEducativo);

export const updatecentroEducativoRequest = (centroEducativo) =>
  axios.patch(`/centroEducativo/${centroEducativo.id_user}`, centroEducativo);

// eslint-disable-next-line no-unused-vars
export const deletecentroEducativoRequest = (id) => axios.delete(`/centroEducativo/${id}`);
