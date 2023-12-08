import {  Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

function ProtectedRoute() {
    const {loading } = useAuth()


    if (loading) return <h1>loading....</h1>

    

    return <Outlet />
    
}

export default ProtectedRoute