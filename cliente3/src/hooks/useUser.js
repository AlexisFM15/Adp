import { useState, useEffect } from "react";
import {
  getUsuariosRequest,
  getUsuarioRequest,
  createUsuarioRequest,
  deleteUsuarioRequest,
} from "../api/usuario";

export function useUserData() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUsers() {
    const res = await getUsuariosRequest();
    setUsuarios(res.data);
  }

  async function getUsersData() {
    const res = await getUsuariosRequest();
    return res.data;
  }

  async function getUser(id) {
    const res = await getUsuarioRequest(id);
    return res.data;
  }

  async function createUser(usuario) {
    const res = await createUsuarioRequest(usuario);
    setUsuarios([...usuarios, res.data.userfound]);
    console.log(res.data.msg);
    // getUsers()
  }

  async function deleteUser(id) {
    await deleteUsuarioRequest(id);
    return;
  }

  return {
    getUsers,
    usuarios,
    getUser,
    createUser,
    deleteUser,
    setUsuarios,
    getUsersData,
  };
}
