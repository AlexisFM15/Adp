import axios from "./axios";

export const getasambleasRequest = () => axios.get("/asamblea");

// eslint-disable-next-line no-unused-vars
export const getasambleaRequest = (id) =>
  axios.get(`/asamblea/${id}`);

export const createasambleaRequest = (asamblea) =>
  axios.post("/asamblea", asamblea);

export const updateasambleaRequest = (asamblea) =>
  axios.patch(`/asamblea/${asamblea.id_user}`, asamblea);

// eslint-disable-next-line no-unused-vars
export const deleteasambleaRequest = (id) => axios.delete(`/asamblea/${id}`);
