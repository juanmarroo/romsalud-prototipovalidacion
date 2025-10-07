import { useParams } from 'react-router-dom';

export default function GestorPerfil() {
  const { codigo } = useParams();

  // Simulación de datos del gestor territorial
  const gestor = {
    nombre: 'Luis Ramírez',
    zona: 'Región Centro-Norte — Aragua',
    promotoresActivos: 4,
    cabinasOperativas: 3,
    alertasActivas: 13, 
    ultimaSincronizacion: '27/09/2025 — 6:45 p.m.',
    conectividadRegional: '✅ Estable'
  };

  return (
    <div style={{ maxWidth: '750px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>👤 Perfil del Gestor Territorial</h2>

      <div style={cardStyle('#e6f7ff')}>
        <p><strong>Nombre:</strong> {gestor.nombre}</p>
        <p><strong>Zona asignada:</strong> {gestor.zona}</p>
        <p><strong>Promotores activos:</strong> {gestor.promotoresActivos}</p>
        <p><strong>Cabinas operativas:</strong> {gestor.cabinasOperativas}</p>
        <p><strong>Alertas activas en la región:</strong> {gestor.alertasActivas}</p>
        <p><strong>Última sincronización regional:</strong> {gestor.ultimaSincronizacion}</p>
        <p><strong>Estado de conectividad:</strong> {gestor.conectividadRegional}</p>
      </div>

      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>📌 Funciones estratégicas</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🧭 Coordinar promotores y cabinas móviles en su zona.</li>
          <li>📡 Supervisar alertas clínicas y logísticas.</li>
          <li>📊 Consolidar indicadores territoriales para toma de decisiones.</li>
          <li>📋 Generar reportes semanales para autoridades locales.</li>
        </ul>
      </div>

      {/* Alertas clínicas por incidencia */}
      <div style={cardStyle('#ffe6e6')}>
        <h3 style={sectionTitleStyle}>🚨 Alertas por incidencia territorial</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🔴 Sector 2 — brote activo de fiebre persistente (6 casos en 48h)</li>
          <li>🟠 Sector 4 — hipertensión en adultos mayores (5 casos en 72h)</li>
          <li>🟡 Sector 1 — evolución de síntomas respiratorios con derivaciones clínicas</li>
        </ul>
        <p style={{ marginTop: '10px', color: '#555' }}>
          Estas alertas fueron generadas automáticamente por el sistema al detectar patrones clínicos repetidos en zonas específicas. Reflejan la evolución territorial y permiten anticipar brotes.
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