import { useParams } from 'react-router-dom';

export default function GestorEvolucion() {
  const { codigo } = useParams();

  // Simulación de evolución de alertas por zona
  const evolucion = [
    { fecha: '20/09', sector1: 1, sector2: 1, sector4: 2 },
    { fecha: '22/09', sector1: 2, sector2: 2, sector4: 3 },
    { fecha: '24/09', sector1: 2, sector2: 3, sector4: 4 },
    { fecha: '26/09', sector1: 1, sector2: 4, sector4: 5 },
    { fecha: '28/09', sector1: 2, sector2: 4, sector4: 6 }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>📈 Evolución de alertas por zona</h2>

      <div style={cardStyle('#f0f5ff')}>
        <p>Este panel muestra la evolución de alertas clínicas en los sectores supervisados, permitiendo detectar tendencias y anticipar brotes. Los datos reflejan patrones registrados por los promotores comunitarios en cabinas móviles.</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Fecha</th>
              <th style={tableHeader}>Sector 1</th>
              <th style={tableHeader}>Sector 2</th>
              <th style={tableHeader}>Sector 4</th>
            </tr>
          </thead>
          <tbody>
            {evolucion.map((e, index) => (
              <tr key={index}>
                <td style={tableCell}>{e.fecha}</td>
                <td style={tableCell}>{e.sector1}</td>
                <td style={tableCell}>{e.sector2}</td>
                <td style={tableCell}>{e.sector4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cardStyle = (bg = '#fff') => ({
  backgroundColor: bg,
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  padding: '25px',
  marginBottom: '25px'
});

const tableHeader = {
  borderBottom: '1px solid #ccc',
  padding: '10px',
  backgroundColor: '#e0e0e0',
  textAlign: 'left'
};

const tableCell = {
  padding: '10px',
  borderBottom: '1px solid #eee'
};