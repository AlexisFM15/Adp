import { useState, useEffect } from "react";
import {
  getcentroEducativosRequest,
  getcentroEducativoRequest,
  createcentroEducativoRequest,
  deletecentroEducativoRequest,
} from "../api/centroEducativo";

export function useCentroEducativoData() {
  const [centroEducativos, setCentroEducativos] = useState([]);

  useEffect(() => {
    getCentroEducativos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getCentroEducativos() {
    const res = await getcentroEducativosRequest();
    setCentroEducativos(res.data);
  }

  async function getCentroEducativosData() {
    const res = await getcentroEducativosRequest();
    return res.data;
  }

  async function getCentroEducativo(id) {
    const res = await getcentroEducativoRequest(id);
    return res.data;
  }

  async function createCentroEducativo(usuario) {
    const res = await createcentroEducativoRequest(usuario);
    setCentroEducativos([...centroEducativos, res.data.centroEducativoound]);
    // getUsers()
  }

  async function deleteCentroEducativo(id) {
    await deletecentroEducativoRequest(id);
    return;
  }

  return {
    getCentroEducativos,
    centroEducativos,
    getCentroEducativo,
    createCentroEducativo,
    deleteCentroEducativo,
    setCentroEducativos,
    getCentroEducativosData,
  };
}
