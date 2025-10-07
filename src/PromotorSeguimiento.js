import { useParams } from 'react-router-dom';

export default function PromotorSeguimiento() {
  const { codigo } = useParams();

  // Simulación de pacientes bajo seguimiento
  const pacientes = [
    { nombre: 'Carlos López', riesgo: 'Alto', ultimoRegistro: '18/09/2025', estado: '🔴 Crítico' },
    { nombre: 'Ana Pérez', riesgo: 'Moderado', ultimoRegistro: '20/09/2025', estado: '🟡 En observación' },
    { nombre: 'Luis Mendoza', riesgo: 'Bajo', ultimoRegistro: '25/09/2025', estado: '🟢 Estable' }
  ];

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>📋 Seguimiento comunitario</h2>

      <div style={cardStyle('#fff7e6')}>
        <p>Esta vista muestra los pacientes asignados al promotor que requieren seguimiento según su nivel de riesgo y fecha del último registro.</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={tableHeader}>Paciente</th>
              <th style={tableHeader}>Riesgo</th>
              <th style={tableHeader}>Último registro</th>
              <th style={tableHeader}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((p, index) => (
              <tr key={index}>
                <td style={tableCell}>{p.nombre}</td>
                <td style={tableCell}>{p.riesgo}</td>
                <td style={tableCell}>{p.ultimoRegistro}</td>
                <td style={tableCell}>{p.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>📌 Recomendaciones</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔴 Visitar a pacientes con más de 7 días sin registro.</li>
          <li>🟡 Confirmar signos vitales en próximos 48 horas.</li>
          <li>🟢 Mantener contacto mensual con pacientes estables.</li>
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