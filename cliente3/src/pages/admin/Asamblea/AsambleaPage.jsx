/* eslint-disable react/prop-types */
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
    TextInput,
    Modal,
    Datepicker 
  } from "flowbite-react";
  
  import { Card } from "flowbite-react";
  import { useAsambleaData } from "../../../hooks/useAsamblea";
  import { Link } from "react-router-dom";
    import { useState } from "react";
    import { useForm } from "react-hook-form";
  
  
  // eslint-disable-next-line no-unused-vars, react/prop-types
  function AsambleaPage({ asambleas, getAsambleas  }) {
    const { deleteAsamblea, createAsamblea, getAsambleasData, setAsambleas } = useAsambleaData();
    
    const { register, handleSubmit } = useForm();
    const [openModal, setOpenModal] = useState(false);
   

  
    const onHandleDelete = async (id) => {
      await deleteAsamblea(id);
      await getAsambleas();
    };
  
    const onSubmit = handleSubmit(async (datas, e) => {
        e.preventDefault();
        console.log(datas)
        await createAsamblea(datas);
        const res = await getAsambleasData();
        setAsambleas(res);
      });

  
    return (
    <div>
        
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
        <form onSubmit={onSubmit} className="w-full">
              <TextInput
                placeholder="Usuario"
                {...register("usuario")}
                autoFocus
                className="mt-5 mb-2 w-full"
              />

              <Datepicker
                placeholder="Fecha"
                {...register("fechaProgramada")}
                className="mt-5 mb-2 w-full"
                format='MM-dd-aaaa'
                minDate={new Date()}
              />

              <TextInput
                placeholder="Direccion"
                {...register("direccion")}
                autoFocus
                className="mt-5 mb-2 w-full"
              />

              <TextInput
                placeholder="Numero Convocatoria"
                {...register("NumeroConvocatoria")}
                autoFocus
                className="mt-5 mb-2 w-full"
              />

              <TextInput
                placeholder="Tipo Asamblea"
                {...register("tipoAsamblea")}
                autoFocus
                className="mt-5 mb-2 w-full"
              />

              <TextInput
                placeholder="Directiva Convocante"
                {...register("directivaConvocante")}
                autoFocus
                className="mt-5 mb-2 w-full"
              />
              
              <TextInput
                placeholder="Estatus"
                {...register("estatusAsamblea")}
                autoFocus
                className="mt-5 mb-2 w-full"
              />

              <Button type="submit" className="mb-5 w-full">
                {" "}
                Save{" "}
              </Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
       
      <Card className="flex mb-5">
     
        <div className="text-center">
          <Card className="mb-3"> Asambleas</Card>
          <form>
            <Card>
              <TextInput placeholder="buscar por:"></TextInput>
              <Button type="submit" className="mb-5 w-full">
                <a
                  href="#"
                  onClick={() => {
                   
                  }}
                >
                  {" "}
                  Buscar{" "}
                </a>
              </Button>
            </Card>
          </form>
        </div>
        <Card className="flex ">
        <Button color = "green"onClick={() => setOpenModal(true)}>Agregar</Button>
          <div className="overflow-auto max-h-screen">
          
            <Table className="table-auto overflow-scroll max-h-96">
                
              <TableHead>
                <TableHeadCell>id</TableHeadCell>
                <TableHeadCell>Usuario</TableHeadCell>
                <TableHeadCell>Fecha Programada</TableHeadCell>
                <TableHeadCell>Direccion</TableHeadCell>
                <TableHeadCell>NumeroConvocatoria</TableHeadCell>
                <TableHeadCell>TipoAsamblea</TableHeadCell>
                <TableHeadCell>Directiva Convocante</TableHeadCell>
                <TableHeadCell>Estatus</TableHeadCell>
                <TableHeadCell>Fecha De registro</TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Acciones</span>
                </TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Acciones</span>
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {asambleas?.map((asambleas) => (
                  <TableRow
                    key={asambleas.id_asamblea}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {asambleas.id_asamblea}
                    </TableCell>
                    <TableCell> {asambleas.usuario}</TableCell>
                    <TableCell> {asambleas.fechaProgramada}</TableCell>
                    <TableCell> {asambleas.direccion}</TableCell>
                    <TableCell> {asambleas.NumeroConvocatoria}</TableCell>
                    <TableCell> {asambleas.tipoAsamblea}</TableCell>
                    <TableCell> {asambleas.directivaConvocante}</TableCell>
                    <TableCell> {asambleas.estatusAsamblea}</TableCell>
                    <TableCell> {asambleas.fecha_registro}</TableCell>

                    <TableCell>
                      <Link
                        to="/admin/dashboard/new-area"
                        className="font-medium text-green-600 hover:underline dark:text-green-500"
                      >
                        Editar
                      </Link>
                    </TableCell>
                    <TableCell>
                      <a
                        href="#"
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => {
                          onHandleDelete(asambleas.id_asamblea);
                        }}
                      >
                        Borrar
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </Card>
      </div>
    );
  }
  export default AsambleaPage;
  