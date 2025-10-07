import { useParams } from 'react-router-dom';

export default function GestorAlertas() {
  const { codigo } = useParams();

  // Simulación de alertas activas por sector
  const alertas = [
    {
      sector: 'Sector 1',
      promotor: 'María González',
      paciente: 'Carlos López',
      tipo: 'Presión arterial elevada',
      valor: '140/95',
      fecha: '27/09/2025',
      estado: '🟠 Moderado'
    },
    {
      sector: 'Sector 2',
      promotor: 'José Martínez',
      paciente: 'Ana Pérez',
      tipo: 'Fiebre persistente',
      valor: '38.5°C',
      fecha: '26/09/2025',
      estado: '🟠 Moderado'
    },
    {
      sector: 'Sector 4',
      promotor: 'María González',
      paciente: 'Luis Mendoza',
      tipo: 'Hipoglucemia',
      valor: '65 mg/dL',
      fecha: '25/09/2025',
      estado: '🔴 Crítico'
    }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>🚨 Alertas territoriales activas</h2>

      <div style={cardStyle('#ffe6e6')}>
        <p>Este panel muestra las alertas clínicas registradas por los promotores comunitarios en sus cabinas móviles, agrupadas por sector y nivel de urgencia.</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Sector</th>
              <th style={tableHeader}>Promotor</th>
              <th style={tableHeader}>Paciente</th>
              <th style={tableHeader}>Tipo de alerta</th>
              <th style={tableHeader}>Valor</th>
              <th style={tableHeader}>Fecha</th>
              <th style={tableHeader}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {alertas.map((a, index) => (
              <tr key={index}>
                <td style={tableCell}>{a.sector}</td>
                <td style={tableCell}>{a.promotor}</td>
                <td style={tableCell}>{a.paciente}</td>
                <td style={tableCell}>{a.tipo}</td>
                <td style={tableCell}>{a.valor}</td>
                <td style={tableCell}>{a.fecha}</td>
                <td style={tableCell}>{a.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>📌 Recomendaciones estratégicas</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔴 Priorizar atención médica en Sector 4.</li>
          <li>🟠 Verificar seguimiento clínico en Sector 1 y Sector 2.</li>
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