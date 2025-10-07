import { useParams } from 'react-router-dom';

export default function PromotorCabina() {
  const { codigo } = useParams();

  // Simulación de datos de la cabina móvil
  const cabina = {
    ubicacion: 'Plaza Bolívar — Sector 4',
    conectividad: '✅ En línea',
    dispositivo: 'Tablet RomSalud v2.1',
    sincronizacion: '26/09/2025 — 4:30 p.m.',
    energia: '🔋 85% disponible'
  };

  const actividades = [
    { tipo: 'Registro de síntomas', cantidad: 5, icono: '📝' },
    { tipo: 'Toma de signos vitales', cantidad: 4, icono: '🩺' },
    { tipo: 'Dispensación de medicamentos', cantidad: 3, icono: '💊' },
    { tipo: 'Alertas generadas', cantidad: 2, icono: '🚨' },
    { tipo: 'Derivaciones realizadas', cantidad: 1, icono: '🔄' }
  ];

  const insumos = [
    { nombre: 'Paracetamol 500mg', disponible: 12 },
    { nombre: 'Kit de presión arterial', disponible: 3 },
    { nombre: 'Guantes estériles', disponible: 25 },
    { nombre: 'Mascarillas', disponible: 40 }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>🏥 Cabina móvil — Actividad territorial</h2>

      {/* Estado general */}
      <div style={cardStyle('#eaf4fc')}>
        <h3 style={sectionTitleStyle}>📍 Estado actual</h3>
        <p><strong>Ubicación:</strong> {cabina.ubicacion}</p>
        <p><strong>Conectividad:</strong> {cabina.conectividad}</p>
        <p><strong>Dispositivo activo:</strong> {cabina.dispositivo}</p>
        <p><strong>Última sincronización:</strong> {cabina.sincronizacion}</p>
        <p><strong>Estado de energía:</strong> {cabina.energia}</p>
      </div>

      {/* Actividades registradas */}
      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>📊 Actividades registradas hoy</h3>
        <ul style={{ paddingLeft: '20px' }}>
          {actividades.map((a, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {a.icono} <strong>{a.tipo}:</strong> {a.cantidad}
            </li>
          ))}
        </ul>
      </div>

      {/* Insumos disponibles */}
      <div style={cardStyle('#fff7e6')}>
        <h3 style={sectionTitleStyle}>💼 Insumos disponibles en cabina</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Insumo</th>
              <th style={tableHeader}>Cantidad disponible</th>
            </tr>
          </thead>
          <tbody>
            {insumos.map((i, index) => (
              <tr key={index}>
                <td style={tableCell}>{i.nombre}</td>
                <td style={tableCell}>{i.disponible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón para sincronizar cabina */}
<div style={{ textAlign: 'center', marginBottom: '30px' }}>
  <button style={btnStyle()} onClick={() => alert('Cabina sincronizada exitosamente')}>
    🔄 Sincronizar cabina
  </button>
</div>

{/* Gráfico simulado de actividad por hora */}
<div style={cardStyle('#e8fce8')}>
  <h3 style={sectionTitleStyle}>📈 Actividad por hora</h3>
  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
    <thead>
      <tr>
        <th style={tableHeader}>Hora</th>
        <th style={tableHeader}>Actividad</th>
        <th style={tableHeader}>Cantidad</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style={tableCell}>08:00</td><td style={tableCell}>Registro de síntomas</td><td style={tableCell}>2</td></tr>
      <tr><td style={tableCell}>09:30</td><td style={tableCell}>Toma de signos</td><td style={tableCell}>1</td></tr>
      <tr><td style={tableCell}>11:00</td><td style={tableCell}>Dispensación</td><td style={tableCell}>1</td></tr>
      <tr><td style={tableCell}>13:00</td><td style={tableCell}>Derivación</td><td style={tableCell}>1</td></tr>
    </tbody>
  </table>
</div>
{/* Alertas automáticas generadas */}
<div style={cardStyle('#ffe6e6')}>
  <h3 style={sectionTitleStyle}>🚨 Alertas automáticas</h3>
  <ul style={{ paddingLeft: '20px' }}>
    <li>🔴 Carlos López — Presión arterial elevada (140/95)</li>
    <li>🟠 Ana Pérez — Fiebre persistente (38.5°C)</li>
  </ul>
  <p style={{ marginTop: '10px', color: '#555' }}>
    Estas alertas fueron generadas automáticamente por la cabina móvil tras registrar signos clínicos fuera de rango.
  </p>
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

