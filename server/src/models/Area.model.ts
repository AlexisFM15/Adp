import {RowDataPacket } from "mysql2"

export default interface Area extends RowDataPacket {
    area?: string;
    id_user?: number;
   
}