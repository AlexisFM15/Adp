
import { useUserData } from "../../../hooks/useUser";

import UsuarioFormPage from "./UsuarioFormPage";
import UsuarioPage from "./UsuarioPage";
import NavbarAdmin from "../../../components/NavbarAdmin";
import Sidebad from "../../../components/Sidebad";
import { Card } from "flowbite-react";
function DashboardPage() {
    const { usuarios, setUsuarios, getUsers } = useUserData()
  
  return (
    <>
    <NavbarAdmin/>
   
    <div className="flex bg-zinc-950 h-full  w-full">
      
        <div className="flex  bg-zinc-950 h-full  w-full">
          <div className="h-full pr-2">
            <Sidebad />
          </div>

          <Card className=" mb-5 flex flex-col align-center py-5 px-10 rounded-lg">
           
            <UsuarioFormPage setUsuarios={setUsuarios}/>
            <UsuarioPage usuarios={usuarios} getUsers={getUsers}/>
            
            </Card>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
