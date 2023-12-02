import Sidebar from "../../../components/Sidebad"
import UsuarioFormPage from "./UsuarioFormPage"

function DashboardPage() {
  return (
    <>
    <div>    
    <div className="flex ">
    <div className="basis-[18%] h-[100vh] pr-2" >
          <Sidebar />
        </div>
   
    
    <div className="bg-zinc-700 my-0 flex justify-self-start py-5 px-10 rounded-lg">
        
        <UsuarioFormPage/>
    </div>

        


    </div>
    </div>

    </>
  )
}

export default DashboardPage
