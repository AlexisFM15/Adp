import axios from "./axios";

export const getnombramientosRequest = () => axios.get("/nombramiento");

// eslint-disable-next-line no-unused-vars
export const getnombramientoRequest = (id) =>
  axios.get(`/nombramiento/${id}`);

export const createnombramientoRequest = (nombramiento) =>
  axios.post("/nombramiento", nombramiento);

export const updatenombramientoRequest = (nombramiento) =>
  axios.patch(`/nombramiento/${nombramiento.id_user}`, nombramiento);

// eslint-disable-next-line no-unused-vars
export const deletenombramientoRequest = (id) => axios.delete(`/nombramiento/${id}`);
