import axios from "./axios";

export const gettemaConclusionesRequest = () => axios.get("/temaConclusiones");

// eslint-disable-next-line no-unused-vars
export const gettemaConclusioneRequest = (id) =>
  axios.get(`/temaConclusiones/${id}`);

export const createtemaConclusionesRequest = (temaConclusiones) =>
  axios.post("/temaConclusione", temaConclusiones);

export const updatetemaConclusioneRequest = (temaConclusiones) =>
  axios.patch(`/temaConclusione/${temaConclusiones.id_user}`, temaConclusiones);

// eslint-disable-next-line no-unused-vars
export const deletetemaConclusioneRequest = (id) => axios.delete(`/temaConclusione/${id}`);
