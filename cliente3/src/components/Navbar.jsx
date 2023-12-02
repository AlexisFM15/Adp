import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Button, Dropdown } from "flowbite-react"

function Navbar(){
    const {isAuthenticated, logout} = useAuth()

    return (
      <nav className="bg-zinc-700 my-2 flex justify-between py-5 px-10 rounded-lg" >
        <h1 className="text 2xl font-bold">ADP</h1>
        <ul className="flex gap-x-2">
        {isAuthenticated? (
            <> 
            <Dropdown  dismissOnClick={false}  >
              <Dropdown.Item autoFocus>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item><Link to ='/' onClick={()=>{logout()}}>logout</Link> </Dropdown.Item>
            </Dropdown>
           
            </>

        ):(
            <>
            <li>
                <Button>
                <Link to ='/login'>login</Link>
                </Button>
            </li>
            <li>
                <Button>
                <Link to ='/register'>register</Link>
                </Button>
            </li>
            </>
        )}
        
           
        </ul>

      
      </nav>
    )

}

export default Navbar