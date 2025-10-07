import { useParams } from 'react-router-dom';

export default function GestorReportes() {
  const { codigo } = useParams();

  // Simulación de reportes semanales por zona
  const reportes = [
    {
      sector: 'Sector 1',
      promotor: 'María González',
      visitas: 9,
      alertas: 2,
      seguimiento: '78%',
      derivaciones: 1,
      estado: '🟠 Riesgo moderado'
    },
    {
      sector: 'Sector 2',
      promotor: 'José Martínez',
      visitas: 5,
      alertas: 1,
      seguimiento: '65%',
      derivaciones: 0,
      estado: '🟡 Parcial'
    },
    {
      sector: 'Sector 4',
      promotor: 'María González',
      visitas: 12,
      alertas: 3,
      seguimiento: '82%',
      derivaciones: 2,
      estado: '🔴 Alta carga'
    }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>📋 Reportes semanales por zona</h2>

      <div style={cardStyle('#f0f5ff')}>
        <p>Este panel muestra un resumen semanal de actividad territorial por sector, consolidando datos clínicos, logísticos y operativos registrados por los promotores.</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Sector</th>
              <th style={tableHeader}>Promotor</th>
              <th style={tableHeader}>Visitas</th>
              <th style={tableHeader}>Alertas</th>
              <th style={tableHeader}>Seguimiento</th>
              <th style={tableHeader}>Derivaciones</th>
              <th style={tableHeader}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map((r, index) => (
              <tr key={index}>
                <td style={tableCell}>{r.sector}</td>
                <td style={tableCell}>{r.promotor}</td>
                <td style={tableCell}>{r.visitas}</td>
                <td style={tableCell}>{r.alertas}</td>
                <td style={tableCell}>{r.seguimiento}</td>
                <td style={tableCell}>{r.derivaciones}</td>
                <td style={tableCell}>{r.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={cardStyle('#e6f7ff')}>
        <h3 style={sectionTitleStyle}>📌 Observaciones estratégicas</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔴 Sector 4 requiere refuerzo clínico y redistribución de recursos.</li>
          <li>🟡 Sector 2 necesita mejorar seguimiento y cobertura.</li>
          <li>🟠 Sector 1 presenta signos de alerta clínica. Se recomienda seguimiento reforzado.</li>
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