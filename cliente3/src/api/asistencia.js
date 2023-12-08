import axios from "./axios";

export const getasistenciasRequest = () => axios.get("/asistencia");

// eslint-disable-next-line no-unused-vars
export const getasistenciaRequest = (id) =>
  axios.get(`/asistencia/${id}`);

export const createasistenciaRequest = (asistencia) =>
  axios.post("/asistencia", asistencia);

export const updateasistenciaRequest = (asistencia) =>
  axios.patch(`/asistencia/${asistencia.id_user}`, asistencia);

// eslint-disable-next-line no-unused-vars
export const deleteasistenciaRequest = (id) => axios.delete(`/asistencia/${id}`);
