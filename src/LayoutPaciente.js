import React, { useState } from 'react';
import { Outlet, useParams, Link, useNavigate } from 'react-router-dom';
import './ResponsivePaciente.css';

function LayoutPaciente() {
  const { codigo } = useParams();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="layout-paciente">
      {/* Botón hamburguesa en móviles */}
      {isMobile && (
        <div className="boton-hamburguesa">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>☰ Menú</button>
        </div>
      )}

      {/* Menú lateral */}
      <div className={`menu-paciente ${isMobile ? (menuAbierto ? 'movil-activo' : 'movil-cerrado') : ''}`}>
        <div>
          <h2>🌿 Menú del paciente</h2>
          <ul>
            <li><Link className="link-paciente" to={`/paciente/perfil/${codigo}`} onClick={() => setMenuAbierto(false)}>🏠 Perfil clínico</Link></li>
            <li><Link className="link-paciente" to={`/paciente/signos/${codigo}`} onClick={() => setMenuAbierto(false)}>🩺 Registrar signos</Link></li>
            <li><Link className="link-paciente" to={`/paciente/sintomas/${codigo}`} onClick={() => setMenuAbierto(false)}>📝 Registrar síntomas</Link></li>
            <li><Link className="link-paciente" to={`/paciente/historial/${codigo}`} onClick={() => setMenuAbierto(false)}>📊 Historial de signos</Link></li>
            <li><Link className="link-paciente" to={`/paciente/alertas/${codigo}`} onClick={() => setMenuAbierto(false)}>🚨 Alertas clínicas</Link></li>
            <li><Link className="link-paciente" to={`/paciente/visitas/${codigo}`} onClick={() => setMenuAbierto(false)}>🚐 Visitas</Link></li>
            <li><Link className="link-paciente" to={`/paciente/imagenes/${codigo}`} onClick={() => setMenuAbierto(false)}>📷 Imágenes médicas</Link></li>
            <li><Link className="link-paciente" to={`/paciente/laboratorio/${codigo}`} onClick={() => setMenuAbierto(false)}>🧪 Laboratorio</Link></li>
            <li><Link className="link-paciente" to={`/paciente/medicamentos/${codigo}`} onClick={() => setMenuAbierto(false)}>💊 Medicamentos</Link></li>
            <li><Link className="link-paciente" to={`/paciente/alergias/${codigo}`} onClick={() => setMenuAbierto(false)}>⚠️ Alergias</Link></li>
            <li><Link className="link-paciente" to={`/paciente/habitos/${codigo}`} onClick={() => setMenuAbierto(false)}>🧘 Hábitos</Link></li>
            <li><Link className="link-paciente" to={`/paciente/config/${codigo}`} onClick={() => setMenuAbierto(false)}>⚙️ Configuración</Link></li>
          </ul>
        </div>

        <button className="boton-inicio" onClick={() => { setMenuAbierto(false); navigate('/'); }}>
          🔙 Volver al inicio
        </button>
      </div>

      {/* Panel principal */}
      <div className="panel-paciente">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPaciente;