import axios from "./axios";

export const getnivelsRequest = () => axios.get("/nivel");

// eslint-disable-next-line no-unused-vars
export const getnivelRequest = (id) =>
  axios.get(`/nivel/${id}`);

export const createnivelRequest = (nivel) =>
  axios.post("/nivel", nivel);

export const updatenivelRequest = (nivel) =>
  axios.patch(`/nivel/${nivel.id_user}`, nivel);

// eslint-disable-next-line no-unused-vars
export const deletenivelRequest = (id) => axios.delete(`/nivel/${id}`);
