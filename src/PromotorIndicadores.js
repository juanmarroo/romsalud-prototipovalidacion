import { useParams } from 'react-router-dom';

export default function PromotorIndicadores() {
  const { codigo } = useParams();

  // Simulación de indicadores comunitarios
  const indicadores = {
    seguimientoActivo: '75%',
    tiempoPromedioVisita: '4.2 días',
    alertasResueltas: 5,
    pacientesVisitadosSemana: 9,
    derivacionesRealizadas: 3
  };

  const resumen = [
    { label: '✅ Seguimiento activo', valor: indicadores.seguimientoActivo },
    { label: '⏱️ Tiempo promedio entre visitas', valor: indicadores.tiempoPromedioVisita },
    { label: '🚨 Alertas resueltas esta semana', valor: indicadores.alertasResueltas },
    { label: '🚐 Pacientes visitados esta semana', valor: indicadores.pacientesVisitadosSemana },
    { label: '🔄 Derivaciones realizadas', valor: indicadores.derivacionesRealizadas }
  ];

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>📊 Indicadores comunitarios</h2>

      <div style={cardStyle('#e8fce8')}>
        <p>Estos indicadores reflejan el impacto del promotor en su zona, permitiendo evaluar cobertura, eficiencia y respuesta ante alertas.</p>

        <ul style={{ paddingLeft: '20px', marginTop: '20px' }}>
          {resumen.map((item, index) => (
            <li key={index} style={{ marginBottom: '12px', fontSize: '1.1em' }}>
              {item.label}: <strong>{item.valor}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>📌 Interpretación sugerida</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔹 Un seguimiento activo superior al 70% indica buena cobertura territorial.</li>
          <li>🔹 Un tiempo promedio bajo entre visitas mejora la detección temprana.</li>
          <li>🔹 Las alertas resueltas reflejan capacidad de respuesta comunitaria.</li>
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