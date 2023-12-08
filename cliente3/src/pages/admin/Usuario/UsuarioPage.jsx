/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

import { useUserData } from "../../../hooks/useUser";

// eslint-disable-next-line no-unused-vars
function UsuarioPage({ usuarios, getUsers }) {  
  const { deleteUser } = useUserData();

  const onHandleDelete = async (id) => {
    await deleteUser(id);
    await getUsers()
  
  };

  return (
    <div className="overflow-auto max-h-72">
      <Table className="table-auto overflow-scroll max-h-96">
        <TableHead>
          <TableHeadCell>id</TableHeadCell>
          <TableHeadCell>Nombre</TableHeadCell>
          <TableHeadCell>Apellido</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Nivel</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Acciones</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {usuarios?.map((usuarios) => (
            <TableRow
              key={usuarios.id_user}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {usuarios.id_user}
              </TableCell>
              <TableCell> {usuarios.nombre}</TableCell>
              <TableCell> {usuarios.apellido}</TableCell>
              <TableCell> {usuarios.email}</TableCell>
              <TableCell> {usuarios.nivel}</TableCell>
              <TableCell>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
                  onClick={()=>{onHandleDelete(usuarios.id_user)}}
                >
                  Borrar
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
export default UsuarioPage;
