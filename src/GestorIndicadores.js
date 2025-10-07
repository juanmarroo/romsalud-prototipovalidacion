import { useParams } from 'react-router-dom';

export default function GestorIndicadores() {
  const { codigo } = useParams();

  // Simulación de indicadores globales
  const indicadores = {
    coberturaPromotores: '80%',
    cabinasOperativas: '75%',
    seguimientoActivo: '72%',
    tiempoPromedioVisita: '4.5 días',
    alertasResueltasSemana: 7,
    zonasConAltaCarga: 2
  };

  const resumen = [
    { label: '🧑‍🌾 Cobertura de promotores', valor: indicadores.coberturaPromotores },
    { label: '🏥 Cabinas operativas', valor: indicadores.cabinasOperativas },
    { label: '📋 Seguimiento activo', valor: indicadores.seguimientoActivo },
    { label: '⏱️ Tiempo promedio entre visitas', valor: indicadores.tiempoPromedioVisita },
    { label: '🚨 Alertas resueltas esta semana', valor: indicadores.alertasResueltasSemana },
    { label: '📍 Zonas con alta carga clínica', valor: indicadores.zonasConAltaCarga }
  ];

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>📊 Indicadores globales territoriales</h2>

      <div style={cardStyle('#e8fce8')}>
        <p>Este panel consolida métricas clave del territorio bajo supervisión del gestor, permitiendo evaluar cobertura, eficiencia operativa y capacidad de respuesta. Los datos reflejan actividad registrada por promotores y evolución clínica en cabinas móviles.</p>

        <ul style={{ paddingLeft: '20px', marginTop: '20px' }}>
          {resumen.map((item, index) => (
            <li key={index} style={{ marginBottom: '12px', fontSize: '1.1em' }}>
              {item.label}: <strong>{item.valor}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>📌 Interpretación estratégica</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔹 Cobertura superior al 75% indica despliegue territorial efectivo.</li>
          <li>🔹 Tiempo promedio bajo mejora la detección temprana y seguimiento.</li>
          <li>🔹 Zonas con alta carga (Sector 4 y Sector 2) requieren refuerzo clínico y redistribución de recursos.</li>
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