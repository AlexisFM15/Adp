import { useState, useEffect } from "react";
import {
    getnivelsRequest,
    getnivelRequest,
    createnivelRequest,
    deletenivelRequest,
} from "../api/nivel";

export function useNivelData() {
  const [nivels, setNivels] = useState([]);

  useEffect(() => {
    getNivels();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNivels() {
    const res = await getnivelsRequest();
    setNivels(res.data);
  }

  async function getNivelsData() {
    const res = await getnivelsRequest();
    return res.data;
  }

  async function getNivel(id) {
    const res = await getnivelRequest(id);
    return res.data;
  }

  async function createNivel(usuario) {
    const res = await createnivelRequest(usuario);
    setNivels([...nivels, res.data.nivelfound]);
    // getUsers()
  }

  async function deleteNivel(id) {
    await deletenivelRequest(id);
    return;
  }

  return {
    getNivels,
    nivels,
    getNivel,
    createNivel,
    deleteNivel,
    setNivels,
    getNivelsData,
  };
}
