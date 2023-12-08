import { useState, useEffect } from "react";
import {
    gettrasladosRequest,
    gettrasladoRequest,
    createtrasladoRequest,
    deletetrasladoRequest,
} from "../api/traslado";

export function useTrasladoData() {
  const [traslados, setTraslados] = useState([]);

  useEffect(() => {
    getTraslados();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTraslados() {
    const res = await gettrasladosRequest();
    setTraslados(res.data);
  }

  async function getTrasladosData() {
    const res = await gettrasladosRequest();
    return res.data;  
  }

  async function getTraslado(id) {
    const res = await gettrasladoRequest(id);
    return res.data;
  }

  async function createTraslado(usuario) {
    const res = await createtrasladoRequest(usuario);
    setTraslados([...traslados, res.data.trasladofound]);
    // getUsers()
  }

  async function deleteTraslado(id) {
    await deletetrasladoRequest(id);
    return;
  }

  return {
    getTraslados,
    traslados,
    getTraslado,
    createTraslado,
    deleteTraslado,
    setTraslados,
    getTrasladosData,
  };
}
