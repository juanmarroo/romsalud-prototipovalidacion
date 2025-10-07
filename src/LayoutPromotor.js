import { Outlet, useParams, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './ResponsivePromotor.css';

function LayoutPromotor() {
  const { codigo } = useParams();
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="layout-promotor">
      {/* Botón hamburguesa en móviles */}
      {isMobile && (
        <div className="boton-hamburguesa">
          <button onClick={() => setMenuAbierto(!menuAbierto)}>☰ Menú</button>
        </div>
      )}

      {/* Menú lateral */}
      <div className={`menu-promotor ${isMobile ? (menuAbierto ? 'movil-activo' : 'movil-cerrado') : ''}`}>
        <div>
          <h3 className="titulo-menu">🚐 Menú promotor</h3>
          <ul className="lista-menu">
            <li><Link className="link-promotor" to={`/promotor/perfil/${codigo}`} onClick={() => setMenuAbierto(false)}>👤 Información general</Link></li>
            <li><Link className="link-promotor" to={`/promotor/visitas/${codigo}`} onClick={() => setMenuAbierto(false)}>🚐 Visitas recientes</Link></li>
            <li><Link className="link-promotor" to={`/promotor/seguimiento/${codigo}`} onClick={() => setMenuAbierto(false)}>📋 Seguimiento comunitario</Link></li>
            <li><Link className="link-promotor" to={`/promotor/indicadores/${codigo}`} onClick={() => setMenuAbierto(false)}>📊 Indicadores</Link></li>
            <li><Link className="link-promotor" to={`/promotor/cabina/${codigo}`} onClick={() => setMenuAbierto(false)}>🏥 Cabina móvil</Link></li>
          </ul>
        </div>

        <button className="boton-inicio" onClick={() => { setMenuAbierto(false); navigate('/'); }}>
          🔙 Ir al inicio
        </button>
      </div>

      {/* Panel principal */}
      <div className="panel-promotor">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPromotor;