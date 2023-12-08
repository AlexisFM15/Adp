/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";
import { useUserData } from "../../../hooks/useUser";

function UsuarioFormPage({ setUsuarios }) {
  const { register, handleSubmit } = useForm();
  const { createUser, getUsersData } = useUserData();

  const onSubmit = handleSubmit(async (datas, e) => {
    e.preventDefault();
    await createUser(datas);

    const res = await getUsersData();
    setUsuarios(res);
  });

 
  return (
    <div className=" bg-zinc-700 my-2 flex justify-center align-center py-5 px-10 rounded-lg w-full">
      <form onSubmit={onSubmit} className="w-full">
        <TextInput
          placeholder="Nombre"
          {...register("nombre")}
          autoFocus
          className="mb-2 w-full"
        />
        <TextInput
          placeholder="Apellido"
          {...register("apellido")}
          className="mb-2 "
        ></TextInput>
        <TextInput
          placeholder="Email"
          {...register("email")}
          className="mb-2"
        ></TextInput>
        <TextInput
          placeholder="Contrasena"
          {...register("contrasena")}
          className="mb-2"
        ></TextInput>

        <Button type="submit" className="w-full">
          {" "}
          Save{" "}
        </Button>
      </form>
    </div>
  );
}

export default UsuarioFormPage;
