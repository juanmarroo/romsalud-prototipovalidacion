import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';

// vistas generales
import LoginPaciente from './LoginPaciente';
import PerfilPaciente from './PerfilPaciente';
import LoginProfesional from './LoginProfesional'; 

// secciones del paciente
import RegistroSignos from './RegistroSignos';
import RegistroSintomas from './RegistroSintomas';
import PanelAlertas from './PanelAlertas';
import PanelVisitas from './PanelVisitas';
import ConfiguracionPaciente from './ConfiguracionPaciente';
import LayoutPaciente from './LayoutPaciente';
import ProfesionalSalud from './ProfesionalSalud';
import HistorialSignos from './HistorialSignos';
import PromotorPerfil from './PromotorPerfil';
import PanelImagenes from './PanelImagenes';
import PanelLaboratorio from './PanelLaboratorio';
import PanelMedicamentos from './PanelMedicamentos';
import PanelAlergias from './PanelAlergias';
import PanelHabitos from './PanelHabitos';

// secciones del promotor
import LayoutPromotor from './LayoutPromotor';
import PromotorInfo from './PromotorInfo';
import PromotorVisitas from './PromotorVisitas';
import PromotorSeguimiento from './PromotorSeguimiento';
import PromotorIndicadores from './PromotorIndicadores';
import PromotorCabina from './PromotorCabina';

// secciones del gestor
import LayoutGestor from './LayoutGestor';
import GestorPerfil from './GestorPerfil';
import GestorZonas from './GestorZonas';
import GestorAlertas from './GestorAlertas';
import GestorIndicadores from './GestorIndicadores';
import GestorReportes from './GestorReportes';
import GestorEvolucion from './GestorEvolucion';
import GestorBrotes from './GestorBrotes';

// otras secciones
import EscuelaRomSalud from './EscuelaRomSalud';
import AccedeConsulta from './AccedeConsulta';
import RegistroRomSalud from './RegistroRomSalud';
import ContactoRomSalud from './ContactoRomSalud';
import ExplorarRomSalud from './ExplorarRomSalud';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal y login */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginProfesional />} /> {/* ✅ Login modular */}
        <Route path="/panel" element={<ProfesionalSalud />} />
        <Route path="/paciente-login" element={<LoginPaciente />} />
        <Route path="/promotor-login" element={<PromotorPerfil />} />

        {/* Vistas del paciente con navegación lateral */}
        <Route path="/paciente" element={<LayoutPaciente />}>
          <Route path="perfil/:codigo" element={<PerfilPaciente />} />
          <Route path="signos/:codigo" element={<RegistroSignos />} />
          <Route path="sintomas/:codigo" element={<RegistroSintomas />} />
          <Route path="historial/:codigo" element={<HistorialSignos />} />
          <Route path="alertas/:codigo" element={<PanelAlertas />} />
          <Route path="visitas/:codigo" element={<PanelVisitas />} />
          <Route path="config/:codigo" element={<ConfiguracionPaciente />} />
          <Route path="imagenes/:codigo" element={<PanelImagenes />} />
          <Route path="laboratorio/:codigo" element={<PanelLaboratorio />} />
          <Route path="medicamentos/:codigo" element={<PanelMedicamentos />} />
          <Route path="alergias/:codigo" element={<PanelAlergias />} />
          <Route path="habitos/:codigo" element={<PanelHabitos />} />
        </Route>

        {/* Vistas del promotor comunitario con navegación lateral */}
        <Route path="/promotor" element={<LayoutPromotor />}>
          <Route path="perfil/:codigo" element={<PromotorInfo />} />
          <Route path="visitas/:codigo" element={<PromotorVisitas />} />
          <Route path="seguimiento/:codigo" element={<PromotorSeguimiento />} />
          <Route path="indicadores/:codigo" element={<PromotorIndicadores />} />
          <Route path="cabina/:codigo" element={<PromotorCabina />} />
        </Route>

        {/* Vistas del gestor comunitario con navegación lateral */}
        <Route path="/gestor" element={<LayoutGestor />}>
          <Route path="perfil/:codigo" element={<GestorPerfil />} />
          <Route path="zonas/:codigo" element={<GestorZonas />} />
          <Route path="alertas/:codigo" element={<GestorAlertas />} />
          <Route path="indicadores/:codigo" element={<GestorIndicadores />} />
          <Route path="reportes/:codigo" element={<GestorReportes />} />
          <Route path="evolucion/:codigo" element={<GestorEvolucion />} />
          <Route path="brotes/:codigo" element={<GestorBrotes />} />
        </Route>

        {/* Secciones independientes */}
        <Route path="/escuela" element={<EscuelaRomSalud />} />
        <Route path="/consulta" element={<AccedeConsulta />} />
        <Route path="/registro" element={<RegistroRomSalud />} />
        <Route path="/contacto" element={<ContactoRomSalud />} />
        <Route path="/explorar" element={<ExplorarRomSalud />} />
      </Routes>
    </Router>
  );
}