import { BrowserRouter, Routes,Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import Test from "./pages/Test"
import ProtectedRoute from "./ProtectedRoute"
import Navbar from "./components/Navbar"
import DashboardPage from "./pages/admin/Usuario/DashboardPage"
import UsuarioFormPage from "./pages/admin/Usuario/UsuarioFormPage"

function App(){
  return (  
    <AuthProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<h1 className='text-3xl font-bold underline'>Home Page</h1>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      
   
      
      <Route element={<ProtectedRoute></ProtectedRoute>}>
        <Route path="/test" element={<Test></Test>} />
        <Route path="/dashboard" element={<DashboardPage></DashboardPage>} /> 
        <Route path="/new-usuario" element={<UsuarioFormPage/>} />
      </Route>
      </Routes>
      
    </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
