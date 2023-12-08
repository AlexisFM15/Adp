import axios from "./axios";

export const getareasRequest = () => axios.get("/area");
export const getAreaSearchRequest = (search) => {
  return axios.get(`/area/search/${search}`);
};
export const getareaRequest = (id) => axios.get(`/area/id/:${id}`);

export const createareaRequest = (area) => axios.post("/area", area);

export const updateareaRequest = (area) => {
 return axios.patch(`/area/${area.id_area}`, { data: JSON.stringify(area) });
};
export const deleteareaRequest = (id) => axios.delete(`/area/${id}`);
