import { RequestHandler } from "express";
import { pool } from "../config/database";
import Asamblea from "../models/Asamblea.model";

export const getAsambleas: RequestHandler = async (_req, res) => {
  try {
    const [rows] = await pool.query<Asamblea[]>("SELECT * FROM Asamblea");
    res.json(rows);
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};

export const getAsamblea: RequestHandler = async (req, res) => {
  try {
    const [rows] = await pool.query<Asamblea[]>(
      "SELECT * FROM Asamblea WHERE id_asamblea = ?",
      [req.params.id]
    );
    res.json(rows);
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};

export const createAsamblea: RequestHandler = async (req, res) => {
  const {
    usuario,
    fechaProgramada,
    direccion,
    NumeroConvocatoria,
    tipoAsamblea,
    directivaConvocante,
    estatusAsamblea,
    fecha_registro,
  } = req.body;
  try {
    await pool.query<Asamblea[]>(
      "INSERT INTO Asamblea (usuario, fechaProgramada, direccion, NumeroConvocatoria, tipoAsamblea, directivaConvocante,estatusAsamblea, fecha_registro) VALUES (?,?,?,?,?,?,?,?)",
      [
        usuario,
        fechaProgramada,
        direccion,
        NumeroConvocatoria,
        tipoAsamblea,
        directivaConvocante,
        estatusAsamblea,
        fecha_registro,
      ]
    );
    const [asambleafound] = await pool.query<Asamblea[]>(
      "SELECT * FROM Usuario WHERE email = ?",
      [NumeroConvocatoria]
    );
    console.log(req.body);
    res.json({
      msg: "Asamblea Creada",
      asambleafound: asambleafound[0],
    });
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};

export const deleteAsamblea: RequestHandler = async (req, res) => {
  try {
    const [rows] = await pool.query<Asamblea[]>(
      "DELETE FROM Asamblea WHERE id_asamblea = ?",
      [req.params.id]
    );
    res.json(rows);
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};

export const updateAsamblea: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const {
    usuario,
    fechaProgramada,
    direccion,
    NumeroConvocatoria,
    tipoAsamblea,
    directivaConvocante,
    estatusAsamblea,
    fecha_registro,
  } = req.body;
  const [rows] = await pool.query(
    "UPDATE Asamblea SET usuario = IFNUL(?,usuario), fechaProgramada = IFNUL(?,fechaProgramada), direccion = IFNUL(?,direccion),NumeroConvocatoria =IFNUL(?,NumeroConvocatoria), tipoAsamblea= IFNUL(?,tipoAsamblea), directivaConvocante = IFNUL(?,directivaConvocante), estatusAsamblea = IFNUL(?,estatusAsamblea), fecha_registro = IFNUL(?,fecha_registro) WHERE id_asamblea = ?",
    [
      usuario,
      fechaProgramada,
      direccion,
      NumeroConvocatoria,
      tipoAsamblea,
      directivaConvocante,
      estatusAsamblea,
      fecha_registro,
      id,
    ]
  );
  res.json(rows);
};
