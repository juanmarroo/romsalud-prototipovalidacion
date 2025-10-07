import { useParams } from 'react-router-dom';

function PromotorPerfil() {
  const { codigo } = useParams();

  // Simulación de datos
  const promotor = {
    nombre: 'María González',
    zona: 'Sector 4 - Maracay',
    visitasRealizadas: 12,
    pacientesAsignados: 8,
    ultimaVisita: '25/09/2025',
    alertasActivas: 2
  };

  const visitas = [
    { fecha: '24/09/2025', paciente: 'Carlos López', motivo: 'Seguimiento post-alerta', observaciones: 'Paciente estable' },
    { fecha: '22/09/2025', paciente: 'Ana Pérez', motivo: 'Entrega de insumos', observaciones: 'Se entregó kit básico' }
  ];

  const indicadores = {
    seguimientoActivo: '75%',
    tiempoPromedio: '4.2 días',
    alertasResueltas: 5
  };

  const cobertura = [
    { sector: 'Sector 1', pacientes: 10, visitas: 3 },
    { sector: 'Sector 2', pacientes: 5, visitas: 2 },
    { sector: 'Sector 4', pacientes: 8, visitas: 7 }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>🧑‍🌾 Promotor Comunitario</h2>

      {/* Perfil general */}
      <div style={cardStyle('#e6f7ff')}>
        <h3 style={sectionTitleStyle}>👤 Información general</h3>
        <p><strong>Nombre:</strong> {promotor.nombre}</p>
        <p><strong>Zona asignada:</strong> {promotor.zona}</p>
        <p><strong>Pacientes bajo seguimiento:</strong> {promotor.pacientesAsignados}</p>
        <p><strong>Visitas realizadas:</strong> {promotor.visitasRealizadas}</p>
        <p><strong>Última visita:</strong> {promotor.ultimaVisita}</p>
        <p><strong>Alertas comunitarias activas:</strong> {promotor.alertasActivas}</p>
      </div>

      {/* Botón simulado */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button style={btnStyle()} onClick={() => alert('Función simulada: Registro de visita')}>
          ➕ Registrar nueva visita
        </button>
      </div>

      {/* Visitas recientes */}
      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>🚐 Visitas recientes</h3>
        {visitas.length > 0 ? (
          <ul style={{ paddingLeft: '20px' }}>
            {visitas.map((v, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <strong>{v.fecha}</strong> — {v.paciente} <span style={{ color: '#555' }}>({v.motivo})</span><br />
                <em style={{ color: '#888' }}>{v.observaciones}</em>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay visitas registradas aún.</p>
        )}
      </div>

      {/* Seguimiento comunitario */}
      <div style={cardStyle('#fff7e6')}>
        <h3 style={sectionTitleStyle}>📋 Seguimiento comunitario</h3>
        <p style={{ marginBottom: '10px' }}>Se recomienda visitar a pacientes con riesgo alto o sin signos registrados en los últimos 7 días.</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔴 <strong>Carlos López</strong> — Último registro: 18/09/2025</li>
          <li>🟡 <strong>Ana Pérez</strong> — Último registro: 20/09/2025</li>
        </ul>
      </div>

      {/* Indicadores comunitarios */}
      <div style={cardStyle('#e8fce8')}>
        <h3 style={sectionTitleStyle}>📊 Indicadores comunitarios</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>✅ Seguimiento activo: <strong>{indicadores.seguimientoActivo}</strong></li>
          <li>⏱️ Tiempo promedio entre visitas: <strong>{indicadores.tiempoPromedio}</strong></li>
          <li>🚨 Alertas resueltas esta semana: <strong>{indicadores.alertasResueltas}</strong></li>
        </ul>
      </div>

      {/* Cabina móvil */}
<div style={cardStyle('#eaf4fc')}>
  <h3 style={sectionTitleStyle}>🏥 Cabina móvil — Sector activo</h3>
  <p><strong>Ubicación actual:</strong> Plaza Bolívar — Sector 4</p>
  <p><strong>Estado de conectividad:</strong> ✅ En línea</p>
  <p><strong>Dispositivo activo:</strong> Tablet RomSalud v2.1</p>
  <p><strong>Última sincronización:</strong> 26/09/2025 — 4:30 p.m.</p>

  <h4 style={{ marginTop: '15px', color: '#007bff' }}>Actividades registradas hoy:</h4>
  <ul style={{ paddingLeft: '20px' }}>
    <li>📝 Registro de síntomas: 5 pacientes</li>
    <li>🩺 Toma de signos vitales: 4 pacientes</li>
    <li>💊 Dispensación de medicamentos: 3 entregas</li>
    <li>📡 Alertas generadas: 2 (hipertensión, fiebre)</li>
    <li>🔄 Derivaciones realizadas: 1 (consulta médica)</li>
  </ul>
</div>

      {/* Cobertura territorial */}
      <div style={cardStyle('#f5f5f5')}>
        <h3 style={sectionTitleStyle}>🗺️ Cobertura territorial</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Sector</th>
              <th style={tableHeader}>Pacientes</th>
              <th style={tableHeader}>Visitas esta semana</th>
            </tr>
          </thead>
          <tbody>
            {cobertura.map((zona, index) => (
              <tr key={index}>
                <td style={tableCell}>{zona.sector}</td>
                <td style={tableCell}>{zona.pacientes}</td>
                <td style={tableCell}>{zona.visitas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Estilos reutilizables
const cardStyle = (bg = '#fff') => ({
  backgroundColor: bg,
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  padding: '25px',
  marginBottom: '25px',
  transition: 'all 0.3s ease'
});

const sectionTitleStyle = {
  marginBottom: '15px',
  color: '#333',
  fontSize: '1.2em',
  borderBottom: '1px solid #ddd',
  paddingBottom: '5px'
};

const btnStyle = () => ({
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '8px',
  fontSize: '1em',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
});

const tableHeader = {
  borderBottom: '1px solid #ccc',
  padding: '10px',
  textAlign: 'left',
  backgroundColor: '#e0e0e0'
};

const tableCell = {
  padding: '10px',
  borderBottom: '1px solid #eee'
};

export default PromotorPerfil;