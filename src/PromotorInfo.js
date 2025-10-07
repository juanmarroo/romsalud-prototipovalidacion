import { useParams } from 'react-router-dom';

export default function PromotorInfo() {
  const { codigo } = useParams();

  // Simulación de datos del promotor
  const promotor = {
    nombre: 'María González',
    zona: 'Sector 4 - Caracas',
    visitasRealizadas: 12,
    pacientesAsignados: 8,
    ultimaVisita: '25/09/2025',
    alertasActivas: 2,
    dispositivo: 'Tablet RomSalud v2.1',
    conectividad: 'En línea',
    sincronizacion: '26/09/2025 — 4:30 p.m.'
  };

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '30px', fontFamily: 'Lato, sans-serif' }}>
      <h2 style={{ marginBottom: '20px', color: '#007bff' }}>👤 Información del Promotor Comunitario</h2>

      <div style={cardStyle('#e6f7ff')}>
        <p><strong>Nombre:</strong> {promotor.nombre}</p>
        <p><strong>Zona asignada:</strong> {promotor.zona}</p>
        <p><strong>Pacientes bajo seguimiento:</strong> {promotor.pacientesAsignados}</p>
        <p><strong>Visitas realizadas:</strong> {promotor.visitasRealizadas}</p>
        <p><strong>Última visita:</strong> {promotor.ultimaVisita}</p>
        <p><strong>Alertas comunitarias activas:</strong> {promotor.alertasActivas}</p>
      </div>

      <div style={cardStyle('#f0f5ff')}>
        <h3 style={sectionTitleStyle}>📡 Estado tecnológico</h3>
        <p><strong>Dispositivo activo:</strong> {promotor.dispositivo}</p>
        <p><strong>Conectividad:</strong> ✅ {promotor.conectividad}</p>
        <p><strong>Última sincronización:</strong> {promotor.sincronizacion}</p>
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