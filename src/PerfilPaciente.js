import React from 'react';
import { useParams } from 'react-router-dom';
import { getPacientes } from './pacientesData';
import EvaluacionACV from './EvaluacionACV';

function PerfilPaciente() {
  const { codigo } = useParams();

  const [paciente, setPaciente] = React.useState(null);
  const [resultadoACV, setResultadoACV] = React.useState(null);

  React.useEffect(() => {
    const pacientesActualizados = getPacientes();
    setPaciente(pacientesActualizados[codigo]);

    const interval = setInterval(() => {
      const actualizados = getPacientes();
      setPaciente(actualizados[codigo]);
    }, 3000);

    return () => clearInterval(interval);
  }, [codigo]);

  React.useEffect(() => {
    if (paciente?.evaluacionACV) {
      setResultadoACV(paciente.evaluacionACV);
    }
  }, [paciente]);

  if (!paciente) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#555' }}>
        <p>⏳ Cargando perfil del paciente...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      {/* Cabecera del perfil */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
        <img src="https://via.placeholder.com/80" alt="avatar" style={{ borderRadius: '50%' }} />
        <div>
          <h2 style={{ marginBottom: '5px' }}>{paciente.nombre}</h2>
          <p>🩺 Diagnóstico: {paciente.diagnostico}</p>
          <p>📅 Última visita: {paciente.ultimaVisita}</p>
        </div>
      </div>

      {/* Estado clínico */}
      <div style={cardStyle('#ffe0e0')}>
        <h3>🩺 Estado clínico actual</h3>
        {paciente.alertas?.length > 0 ? (
          <ul>
            {paciente.alertas.map((alerta, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{alerta.tipo}:</strong> {alerta.nivel} — {alerta.mensaje}
              </li>
            ))}
          </ul>
        ) : (
          <p>Sin alertas activas. Estado clínico estable.</p>
        )}
      </div>

      {/* Acciones rápidas ampliadas */}
      <div style={cardStyle()}>
        <h4>Acciones rápidas</h4>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button style={btnStyle()} onClick={() => alert('Llamada al médico solicitada')}>📞 Llamar al médico</button>
          <button style={btnStyle()} onClick={() => alert('Solicitud de visita comunitaria enviada')}>🚑 Solicitar visita</button>
          <button style={btnStyle()} onClick={() => alert('Mensaje enviado al equipo de salud')}>💬 Enviar mensaje</button>
          <button style={btnStyle('#28a745')} onClick={() => alert('Mostrando evolución clínica')}>📊 Ver evolución clínica</button>
          <button style={btnStyle('#17a2b8')} onClick={() => alert('Recomendaciones médicas cargadas')}>🧠 Ver recomendaciones</button>
          <button style={btnStyle('#ffc107')} onClick={() => alert('Agenda abierta')}>📅 Agendar próxima consulta</button>
          <button style={btnStyle('#6f42c1')} onClick={() => alert('Resumen clínico descargado')}>🧾 Descargar resumen clínico</button>
          <button style={btnStyle('#20c997')} onClick={() => alert('Accediendo a Escuela RomSalud')}>🎓 Escuela RomSalud</button>
          <button style={btnStyle('#343a40')} onClick={() => alert('Equipo médico asignado')}>🧑‍⚕️ Ver equipo médico</button>
        </div>
      </div>

      {/* Evaluación de riesgo ACV */}
      <div style={cardStyle()}>
        <EvaluacionACV resultado={resultadoACV} />
      </div>
    </div>
  );
}

// Estilos reutilizables
const cardStyle = (bg = '#fff') => ({
  backgroundColor: bg,
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  padding: '20px',
  marginBottom: '20px'
});

const btnStyle = (color = '#007bff') => ({
  backgroundColor: color,
  color: '#fff',
  padding: '10px 16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '0.95em',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
  minWidth: '160px'
});

export default PerfilPaciente;