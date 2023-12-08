import { useState, useEffect } from "react";
import {
    getnombramientosRequest,
    getnombramientoRequest,
    createnombramientoRequest,
    deletenombramientoRequest,
} from "../api/nombramiento";

export function useNombramientoData() {
  const [nombramientos, setNombramientos] = useState([]);

  useEffect(() => {
    getNombramientos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNombramientos() {
    const res = await getnombramientosRequest();
    setNombramientos(res.data);
  }

  async function getNombramientosData() {
    const res = await getnombramientosRequest();
    return res.data;
  }

  async function getNombramiento(id) {
    const res = await getnombramientoRequest(id);
    return res.data;
  }

  async function createNombramiento(usuario) {
    const res = await createnombramientoRequest(usuario);
    setNombramientos([...nombramientos, res.data.nombramientofound]);
    // getUsers()
  }

  async function deleteNombramiento(id) {
    await deletenombramientoRequest(id);
    return;
  }

  return {
    getNombramientos,
    nombramientos,
    getNombramiento,
    createNombramiento,
    deleteNombramiento,
    setNombramientos,
    getNombramientosData,
  };
}
