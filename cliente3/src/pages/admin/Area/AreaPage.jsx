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
} from "flowbite-react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Card } from "flowbite-react";
import { useAreaData } from "../../../hooks/useArea";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";


// eslint-disable-next-line no-unused-vars, react/prop-types
function AreaPage() {
  const { register, handleSubmit } = useForm();
  const {
    deleteArea,
    createArea,
    setAreas,
    getAreasData,
    updateArea,
    getAreaSearch,
    areas,
    getAreas,
  } = useAreaData();
  const [openModalAgregar, setOpenModalAgregar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState({});

  const onHandleDelete = async (id) => {
    await deleteArea(id);
    await getAreas();
  };

  const onSubmit = handleSubmit(async (datas, e) => {
    e.preventDefault();
    await createArea(datas);
    const res = await getAreasData();
    setAreas(res.datas);
  });

  const onHandleAreaSearch = handleSubmit(async (data, e) => {
    e.preventDefault();
    const res = await getAreaSearch(data.search);
    setAreas(res);
  });

  const onHandleupdate = handleSubmit(async (data, e) => {
    e.preventDefault();
    data.id_area = selectedArea.id_area;
    await updateArea(data);
  });

  // eslint-disable-next-line no-unused-vars

  const GenerarPdf = () => {
    const doc = new jsPDF({
      orientation: "p",
      fontSize: 12,
    });
    doc.text("Reporte Areas", 95, 20);
    const column = ["ID", "Area"];
    const today = new Date();
    doc.text(`Reporte emitido: ${today}`, 10, 270);
    doc.autoTable({
      startY: 30,
      head: [column],
      body: areas.map((area) => [`${area.id_area}`, `${area.area}`]),
    });
    doc.save("Reporte Area.pdf");
  };

  return (
    <>

    <div>
      <Card className="w-full">
        <Modal
          show={openModalAgregar}
          onClose={() => setOpenModalAgregar(false)}
        >
          <Modal.Header>Agregar</Modal.Header>
          <Modal.Body>
            <form onSubmit={onSubmit} className="w-full">
              <TextInput
                placeholder="Area"
                {...register("area")}
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
            <Button color="gray" onClick={() => setOpenModalAgregar(false)}>
              <Link to="/admin/dashboard/area">Salir</Link>
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="text-center">
          <Card> Areas</Card>
          <form onSubmit={onHandleAreaSearch}>
            <Card>
              <TextInput
                {...register("search")}
                placeholder="buscar por: "
              ></TextInput>
              <Button type="submit" className="mb-5 w-full">
                Buscar
              </Button>
            </Card>
          </form>
        </div>
        <Button color="red" onClick={GenerarPdf}> Reporte </Button>
        <Card>
          <Button color="green" onClick={() => setOpenModalAgregar(true)}>
            Agregar
          </Button>
          <div className="overflow-auto max-h-72">
            <Table className="table-auto overflow-scroll max-h-96">
              <TableHead>
                <TableHeadCell>id</TableHeadCell>
                <TableHeadCell>Area</TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Acciones</span>
                </TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Acciones</span>
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {areas?.map((area) => (
                  <TableRow
                    key={area.id_area}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {area.id_area}
                    </TableCell>
                    <TableCell> {area.area}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setOpenModal(true);
                          setSelectedArea(area);
                        }}
                      >
                        Editar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <a
                        href="#"
                        className="font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => {
                          onHandleDelete(area.id_area);
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

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Editar</Modal.Header>
        <Modal.Body>
          <form onSubmit={onHandleupdate} className="w-full">
            <TextInput
              disabled
              placeholder="Area"
              value={selectedArea.id_area}
              {...register("id_area")}
              autoFocus
              className="mt-5 mb-2 w-full"
            />

            <TextInput
              placeholder={selectedArea.area}
              {...register("area", { value: selectedArea.area })}
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
            <Link to="/admin/dashboard/area">Salir</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}


export default AreaPage;
