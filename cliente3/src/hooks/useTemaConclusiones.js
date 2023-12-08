import { useState, useEffect } from "react";
import {
    gettemaConclusionesRequest,
    gettemaConclusioneRequest,
    createtemaConclusionesRequest,
    deletetemaConclusioneRequest,
} from "../api/temaConclusiones";

export function useTemaData() {
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    getTemas();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTemas() {
    const res = await gettemaConclusionesRequest();
    setTemas(res.data);
  }

  async function getTemasData() {
    const res = await gettemaConclusionesRequest();
    return res.data;
  }

  async function getTema(id) {
    const res = await gettemaConclusioneRequest(id);
    return res.data;
  }

  async function createTema(usuario) {
    const res = await createtemaConclusionesRequest(usuario);
    setTemas([...temas, res.data.temafound]);
    console.log(res.data.msg);
    // getUsers()
  }

  async function deleteTema(id) {
    await deletetemaConclusioneRequest(id);
    return;
  }

  return {
    getTemas,
    temas,
    getTema,
    createTema,
    deleteTema,
    setTemas,
    getTemasData,
  };
}
