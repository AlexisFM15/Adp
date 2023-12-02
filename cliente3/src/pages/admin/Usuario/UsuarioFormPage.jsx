import { useForm } from "react-hook-form"
import { Button, TextInput } from "flowbite-react"


function UsuarioFormPage(){
    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        
        <div className=" bg-zinc-700 my-2 flex justify-between py-5 px-10 rounded-lg  ">
        <form onSubmit = {onSubmit}>

            <TextInput placeholder="Nombre" {...register("nombre")} autoFocus className="mb-2 mx-0"/>
            <TextInput placeholder="Apellido" {...register("apellido")} className="mb-2 "></TextInput>
            <TextInput placeholder="Email" {...register("email")} className="mb-2"></TextInput>
            <TextInput placeholder="Contrasena" {...register("contrasena")} className="mb-2"></TextInput>
     
            <Button> Save </Button>

        </form>
        </div>
    )

}

export default UsuarioFormPage