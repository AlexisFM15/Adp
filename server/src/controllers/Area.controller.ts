import {  RequestHandler} from "express"
import { pool } from "../config/database"
import Area from "../models/Area.model"

export const getAreas: RequestHandler = async(_req ,res) => {
    const [rows] = await pool.query('SELECT * FROM Area')
    res.json(
        rows
    )
}

export const getArea: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query<Area[]>('SELECT * FROM Area WHERE id_area = ?', [req.params.id])
    res.json(rows)
}


export const createArea: RequestHandler = async(req ,res) => {
   
   try {
       const {area}= req.body
       await pool.query<Area[]>('INSERT INTO Area (area) VALUES (?)', [ area])
       const [areafound] = await pool.query<Area[]>(
           "SELECT * FROM Area WHERE area = ?",
           [area]
         );
   
       console.log(req.body)
       console.log(areafound)
       res.json({
           msg: 'Area Creada',
           areafound: areafound[0].id_area
       })
    
   } catch (error) {
    res.status(400).json({msg:'no se ha podido crear',error:error})
   }
}


export const deleteArea: RequestHandler = async(req ,res) => {
    const [rows] = await pool.query<Area[]>('DELETE FROM Area WHERE id_area = ?', [req.params.id])
    res.json(rows)
}


export const updateArea: RequestHandler = async(req ,res) => {
    const {id} = req.params
    const {area} = req.body
    const [rows] = await pool.query<Area[]>('UPDATE Area SET area = IFNULL(?,area) WHERE id_area = ?', [area,id])
    res.json(rows)
}