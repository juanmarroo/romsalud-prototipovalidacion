import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importar navegación

const estiloBoton = {
  backgroundColor: '#0077cc',
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1em',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
};

const estiloBotonHome = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1em',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginTop: '30px'
};

function AccedeConsulta() {
  const navigate = useNavigate(); // ✅ Activar navegación

  return (
    <div style={{
      maxWidth: '700px',
      margin: 'auto',
      padding: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#0077cc', marginBottom: '20px' }}>🩺 Accede a consulta</h2>
      
      <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
        Bienvenido/a al módulo de consulta clínica. Aquí puedes iniciar tu atención médica según tu contexto. Selecciona la modalidad que se ajuste a tu situación:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <button style={estiloBoton} onClick={() => alert('Consulta presencial agendada.')}>
          🏥 Consulta presencial
        </button>
        <button style={estiloBoton} onClick={() => alert('Consulta remota iniciada.')}>
          📱 Consulta remota
        </button>
        <button style={estiloBoton} onClick={() => alert('Consulta en cabina móvil registrada.')}>
          🚐 Cabina móvil
        </button>
      </div>

      <hr style={{ margin: '30px 0' }} />

      <h4 style={{ marginBottom: '10px' }}>📅 Horarios de atención</h4>
      <ul>
        <li>Lunes a viernes: 8:00am – 4:00pm</li>
        <li>Sábados: 9:00am – 1:00pm</li>
        <li>Cabinas móviles: según programación territorial</li>
      </ul>

      <h4 style={{ marginTop: '20px' }}>📞 Contacto</h4>
      <p>Si tienes dudas, puedes escribir al equipo RomSalud: <strong>romsalud@territorio.org</strong></p>

      {/* ✅ Botón para volver al home */}
      <button style={estiloBotonHome} onClick={() => navigate('/')}>
        🔙 Volver al inicio
      </button>
    </div>
  );
}

export default AccedeConsulta;