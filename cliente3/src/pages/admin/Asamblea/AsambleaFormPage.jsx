/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";
import { useAsambleaData } from "../../../hooks/useAsamblea";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

function AsambleaFormPage({ setAsamblea }) {
  const { register, handleSubmit } = useForm();
  const { createAsamblea, getAsambleasData } = useAsambleaData();

  const onSubmit = handleSubmit(async (datas, e) => {
    e.preventDefault();
    await createAsamblea(datas);

    const res = await getAsambleasData();
    setAsamblea(res);

  });

 
  return (
    <Card  className="w-full">
    <Card> Areas
    <div className=" bg-zinc-700 my-2 flex justify-center align-center py-5 px-10 rounded-lg w-full">
      <form onSubmit={onSubmit} className="w-full">
        <TextInput
          placeholder="Usuario"
          {...register("usuario")}
          autoFocus
          className="mt-5 mb-2 w-full"
        />
        
        <Button type="submit" className="mb-5 w-full">
          <Link to ='/admin/dashboard/area'>
          {" "}
          Save{" "}
          </Link>
        </Button>
      </form>
    </div>
    </Card>
    </Card>
  );
}

export default AsambleaFormPage;
