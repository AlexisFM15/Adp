import { useState, useEffect } from "react";
import {
  getareasRequest,
  getareaRequest,
  createareaRequest,
  deleteareaRequest,
  updateareaRequest,
  getAreaSearchRequest,
} from "../api/area";

export function useAreaData() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    getAreas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAreas() {
    const res = await getareasRequest();
    setAreas(res.data.sort((a, b) => a.id_area < b.id_area));
  }

  async function getAreasData() {
    const res = await getareasRequest();
    return res.data;
  }

  async function getAreaSearch(data) {
    const res = await getAreaSearchRequest(data);
    return res.data;
  }

  async function getArea(id) {
    const res = await getareaRequest(id);
    setAreas(res.data);
  }

  async function createArea(area) {
    const res = await createareaRequest(area);
    areas.push(res.data.areafound);
    setAreas([...areas, res.data.areafound].sort((item) => item.id_area));
    // getareas()
  }

  async function updateArea(area) {
    await updateareaRequest(area);
    // areas.indexOf(area)
    // eslint-disable-next-line no-unused-vars
    const found = areas.filter((item) => item.id_area != area.id_area);
    setAreas([...found, area].sort((item) => item.id_area));
  }

  async function deleteArea(id) {
    await deleteareaRequest(id);
    const found = areas.filter((item) => item.id_area != id);
    setAreas([...found].sort((item) => item.id_area));
  }

  function renderData(data) {
    setAreas(data);
  }

  return {
    getAreas,
    areas,
    getArea,
    createArea,
    deleteArea,
    setAreas,
    getAreasData,
    updateArea,
    getAreaSearch,
    renderData,
  };
}
