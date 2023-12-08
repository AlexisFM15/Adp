import { useState, useEffect } from "react";
import {
    getmiembrosRequest,
    getmiembroRequest,
    createmiembroRequest,
    deletemiembroRequest,
} from "../api/miembro";

export function useMiembroData() {
  const [miembros, setMiembros] = useState([]);

  useEffect(() => {
    getMiembros();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMiembros() {
    const res = await getmiembrosRequest();
    setMiembros(res.data);
  }

  async function getMiembrosData() {
    const res = await getmiembrosRequest();
    return res.data;
  }

  async function getMiembro(id) {
    const res = await getmiembroRequest(id);
    return res.data;
  }

  async function createMiembro(usuario) {
    const res = await createmiembroRequest(usuario);
    setMiembros([...miembros, res.data.miembrofound]);
    console.log(res.data.msg);
    // getUsers()
  }

  async function deleteMiembro(id) {
    await deletemiembroRequest(id);
    return;
  }

  return {
    getMiembros,
    miembros,
    getMiembro,
    createMiembro,
    deleteMiembro,
    setMiembros,
    getMiembrosData,
  };
}
