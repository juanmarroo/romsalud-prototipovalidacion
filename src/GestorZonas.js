import { useParams } from 'react-router-dom';

export default function GestorZonas() {
  const { codigo } = useParams();

  // Simulación de zonas activas
  const zonas = [
    {
      sector: 'Sector 1',
      promotor: 'María González',
      cabina: 'Cabina Móvil #01',
      visitas: 9,
      alertas: 2,
      estado: '🟠 Riesgo moderado'
    },
    {
      sector: 'Sector 2',
      promotor: 'José Martínez',
      cabina: 'Cabina Móvil #02',
      visitas: 5,
      alertas: 4,
      estado: '🟠 Riesgo clínico'
    },
    {
      sector: 'Sector 4',
      promotor: 'María González',
      cabina: 'Cabina Móvil #01',
      visitas: 12,
      alertas: 6,
      estado: '🔴 Alta carga'
    }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>🗺️ Zonas activas en territorio</h2>

      <div style={cardStyle('#f0f5ff')}>
        <p>Este panel muestra los sectores bajo supervisión del gestor territorial, incluyendo promotores asignados, cabinas móviles y actividad registrada. Los datos reflejan evolución clínica y operativa en tiempo real.</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Sector</th>
              <th style={tableHeader}>Promotor</th>
              <th style={tableHeader}>Cabina</th>
              <th style={tableHeader}>Visitas</th>
              <th style={tableHeader}>Alertas</th>
              <th style={tableHeader}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {zonas.map((z, index) => (
              <tr key={index}>
                <td style={tableCell}>{z.sector}</td>
                <td style={tableCell}>{z.promotor}</td>
                <td style={tableCell}>{z.cabina}</td>
                <td style={tableCell}>{z.visitas}</td>
                <td style={tableCell}>{z.alertas}</td>
                <td style={tableCell}>{z.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={cardStyle('#e6f7ff')}>
        <h3 style={sectionTitleStyle}>📌 Observaciones simuladas</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔴 Sector 4 presenta alta carga de alertas. Se recomienda refuerzo clínico inmediato.</li>
          <li>🟠 Sector 2 muestra evolución ascendente de fiebre persistente. Requiere monitoreo intensivo.</li>
          <li>🟠 Sector 1 mantiene seguimiento activo pero con signos de presión elevada. Se sugiere revisión médica.</li>
        </ul>
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