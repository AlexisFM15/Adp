import { useState, useEffect } from "react";
import {
  getasistenciasRequest,
  getasistenciaRequest,
  createasistenciaRequest,
  deleteasistenciaRequest,
} from "../api/asistencia";

export function useAsistenciaData() {
  const [aistencias, setAsistencias] = useState([]);

  useEffect(() => {
    getAsistencias();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAsistencias() {
    const res = await getasistenciasRequest();
    setAsistencias(res.data);
  }

  async function getAsistenciasData() {
    const res = await getasistenciaRequest();
    return res.data;
  }

  async function getAsistencia(id) {
    const res = await getasistenciaRequest(id);
    return res.data;
  }

  async function createAsistencia(usuario) {
    const res = await createasistenciaRequest(usuario);
    setAsistencias([...aistencias, res.data.aistenciafound]);
    // getUsers()
  }

  async function deleteAsistencia(id) {
    await deleteasistenciaRequest(id);
    return;
  }

  return {
    getAsistencias,
    aistencias,
    getAsistencia,
    createAsistencia,
    deleteAsistencia,
    setAsistencias,
    getAsistenciasData,
  };
}
