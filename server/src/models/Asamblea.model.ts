import {RowDataPacket } from "mysql2"

export default interface Asamblea extends RowDataPacket {
    id_asamblea?: number;
    usuario:number;
    fechaProgramada: Date;
    direccion?: string;
    NumeroConvocatoria: string;
    tipoAsamblea: string;
    directivaConvocante: number;
    estatusAsamblea: string;
    fecha_registro?: Date;
}