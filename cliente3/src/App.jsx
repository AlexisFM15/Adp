import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Test from "./pages/Test";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "./pages/admin/Usuario/DashboardPage";

import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Historia from "./pages/Historia";
import MisionVisionValores from "./pages/MisionVisionValores";

import UsuarioFormPage from "./pages/admin/Usuario/UsuarioFormPage";
import UsuarioPage from "./pages/admin/Usuario/UsuarioPage";
import AreaFormPage from "./pages/admin/Area/AreaFormPage";
import AreaPage from "./pages/admin/Area/AreaPage";
import AsambleaPage from "./pages/admin/Asamblea/AsambleaPage";
import { useAsambleaData } from "./hooks/useAsamblea";
import FooterAdmin from "./components/Footer";


function App() {
  const { asambleas, setAsambleas, getAsambleas } = useAsambleaData()
  return (
    <AuthProvider>
      
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/nosotros/historia" element={<Historia/>} />
          <Route path="/nosotros/misionvisionvalores" element={<MisionVisionValores/>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/register" element={<RegisterPage></RegisterPage>} />


          <Route element={<ProtectedRoute />}>
            <Route path="/test" element={<Test></Test>} />
            <Route
              path="/admin/dashboard"
              element={<DashboardPage></DashboardPage>}
            />
            <Route path="/admin/new-usuario" element={<UsuarioFormPage />} />
            <Route path="/admin/usuario" element={<UsuarioPage />} />
            <Route path="/admin/dashboard/new-area" element={<AreaFormPage />} />
            <Route path="/admin/dashboard/area" element={<AreaPage/>} />
            <Route path="/admin/dashboard/asamblea" element={<AsambleaPage  setAsambleas={setAsambleas} asambleas={asambleas} getAsambleas={getAsambleas} />} />

          </Route>
        </Routes>
        <FooterAdmin/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
