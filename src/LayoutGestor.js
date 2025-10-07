import { Outlet, useParams, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './ResponsiveGestor.css';

function LayoutGestor() {
  const { codigo } = useParams();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="layout-gestor">
      {/* Botón hamburguesa en móviles */}
      {isMobile && (
        <div className="boton-hamburguesa">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>☰ Menú</button>
        </div>
      )}

      {/* Menú lateral */}
      <div className={`menu-gestor ${isMobile ? (menuAbierto ? 'movil-activo' : 'movil-cerrado') : ''}`}>
        <div>
          <h3 className="titulo-menu">📍 Menú territorial</h3>
          <ul className="lista-menu">
            <li><Link className="link-gestor" to={`/gestor/perfil/${codigo}`} onClick={() => setMenuAbierto(false)}>👤 Perfil del gestor</Link></li>
            <li><Link className="link-gestor" to={`/gestor/zonas/${codigo}`} onClick={() => setMenuAbierto(false)}>🗺️ Zonas activas</Link></li>
            <li><Link className="link-gestor" to={`/gestor/alertas/${codigo}`} onClick={() => setMenuAbierto(false)}>🚨 Alertas territoriales</Link></li>
            <li><Link className="link-gestor" to={`/gestor/indicadores/${codigo}`} onClick={() => setMenuAbierto(false)}>📊 Indicadores globales</Link></li>
            <li><Link className="link-gestor" to={`/gestor/reportes/${codigo}`} onClick={() => setMenuAbierto(false)}>📋 Reportes semanales</Link></li>
            <li><Link className="link-gestor" to={`/gestor/evolucion/${codigo}`} onClick={() => setMenuAbierto(false)}>📈 Evolución por zona</Link></li>
            <li><Link className="link-gestor" to={`/gestor/brotes/${codigo}`} onClick={() => setMenuAbierto(false)}>🧠 Detección de brotes</Link></li>
          </ul>
        </div>

        <button className="boton-inicio" onClick={() => { setMenuAbierto(false); navigate('/'); }}>
          🔙 Ir al inicio
        </button>
      </div>

      {/* Panel principal */}
      <div className="panel-gestor">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutGestor;