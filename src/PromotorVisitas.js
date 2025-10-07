import { useParams } from 'react-router-dom';

export default function PromotorVisitas() {
  const { codigo } = useParams();

  // Simulación de visitas comunitarias
  const visitas = [
    {
      fecha: '24/09/2025',
      paciente: 'Carlos López',
      motivo: 'Seguimiento post-alerta',
      observaciones: 'Paciente estable. Se recomendó control de presión.'
    },
    {
      fecha: '22/09/2025',
      paciente: 'Ana Pérez',
      motivo: 'Entrega de insumos',
      observaciones: 'Se entregó kit básico. Se detectó fiebre leve.'
    },
    {
      fecha: '20/09/2025',
      paciente: 'Luis Mendoza',
      motivo: 'Orientación preventiva',
      observaciones: 'Se explicó uso correcto de medicamentos.'
    }
  ];

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>🚐 Visitas comunitarias</h2>

      <div style={cardStyle('#f0f5ff')}>
        <p>Este panel muestra las visitas realizadas por el promotor en su zona, incluyendo acciones clínicas, entrega de insumos y orientación preventiva.</p>

        {visitas.length > 0 ? (
          <ul style={{ paddingLeft: '20px', marginTop: '20px' }}>
            {visitas.map((v, index) => (
              <li key={index} style={{ marginBottom: '15px' }}>
                <strong>{v.fecha}</strong> — <span style={{ color: '#333' }}>{v.paciente}</span><br />
                <em>Motivo:</em> {v.motivo}<br />
                <em>Observaciones:</em> {v.observaciones}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay visitas registradas aún.</p>
        )}
      </div>

      <div style={cardStyle('#e6f7ff')}>
        <h3 style={sectionTitleStyle}>📌 Recomendaciones para próximas visitas</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔍 Verificar signos vitales en pacientes con alertas recientes.</li>
          <li>💬 Reforzar orientación sobre uso de medicamentos.</li>
          <li>📦 Confirmar disponibilidad de insumos antes de salir.</li>
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