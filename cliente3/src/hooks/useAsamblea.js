import { useState, useEffect } from "react";
import {
  getasambleasRequest,
  getasambleaRequest,
  createasambleaRequest,
  deleteasambleaRequest,
} from "../api/asamblea";

export function useAsambleaData() {
  const [asambleas, setAsambleas] = useState([]);

  useEffect(() => {
    getAsambleas();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getAsambleas() {
    const res = await getasambleasRequest();
    setAsambleas(res.data);
  }

  async function getAsambleasData() {
    const res = await getasambleasRequest();
    return res.data;
  }

  async function getAsamblea(id) {
    const res = await getasambleaRequest(id);
    return res.data;
  }

  async function createAsamblea(asambleas) {
    const res = await createasambleaRequest(asambleas);
    setAsambleas([...asambleas, res.data.asambleafound]);
    // getUsers()
  }
  

  async function deleteAsamblea(id) {
    await deleteasambleaRequest(id);
    return;
  }

  return {
    getAsambleas,
    asambleas,
    getAsamblea,
    createAsamblea,
    deleteAsamblea,
    setAsambleas,
    getAsambleasData,
  };
}
