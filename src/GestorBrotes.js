import { useParams } from 'react-router-dom';

export default function GestorBrotes() {
  const { codigo } = useParams();

  // Simulación de brotes detectados por reglas 
  const brotes = [
    {
      zona: 'Sector 4',
      condicion: 'Hipoglucemia y presión elevada en adultos mayores',
      casos: 5,
      umbral: 3,
      estado: '🔴 Brote activo'
    },
    {
      zona: 'Sector 2',
      condicion: 'Fiebre persistente en población infantil',
      casos: 4,
      umbral: 4,
      estado: '🟠 Riesgo elevado'
    },
    {
      zona: 'Sector 1',
      condicion: 'Síntomas respiratorios y presión arterial elevada',
      casos: 2,
      umbral: 2,
      estado: '🟡 Riesgo leve'
    }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>🧠 Detección de brotes clínicos</h2>

      <div style={cardStyle('#ffe6e6')}>
        <p>Este panel simula el motor de reglas que analiza patrones clínicos y genera alertas poblacionales cuando se supera un umbral epidemiológico. Los datos se basan en registros comunitarios y evolución territorial.</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Zona</th>
              <th style={tableHeader}>Condición</th>
              <th style={tableHeader}>Casos detectados</th>
              <th style={tableHeader}>Umbral</th>
              <th style={tableHeader}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {brotes.map((b, index) => (
              <tr key={index}>
                <td style={tableCell}>{b.zona}</td>
                <td style={tableCell}>{b.condicion}</td>
                <td style={tableCell}>{b.casos}</td>
                <td style={tableCell}>{b.umbral}</td>
                <td style={tableCell}>{b.estado}</td>
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