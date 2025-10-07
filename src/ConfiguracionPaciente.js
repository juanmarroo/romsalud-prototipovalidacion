import React from 'react';
import { useParams } from 'react-router-dom';
import { getPacientes } from './pacientesData';

function ConfiguracionPaciente() {
  const { codigo } = useParams();
  const paciente = getPacientes()[codigo];

  const [nuevaClave, setNuevaClave] = React.useState('');
  const [confirmacion, setConfirmacion] = React.useState('');
  const [mensaje, setMensaje] = React.useState('');

  const cambiarClave = () => {
    if (!paciente) return;

    if (nuevaClave === confirmacion && nuevaClave.length >= 4) {
      paciente.clave = nuevaClave;
      localStorage.setItem('pacientes', JSON.stringify(getPacientes()));
      setMensaje('✅ Contraseña actualizada con éxito');
      setNuevaClave('');
      setConfirmacion('');
    } else {
      setMensaje('⚠️ Las contraseñas no coinciden o son demasiado cortas');
    }
  };

  if (!paciente) {
    return (
      <div style={{ textAlign: 'center', padding: '30px', color: '#2e7d32' }}>
        <p>⏳ Cargando perfil del paciente...</p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      margin: '0 auto',
      color: '#2e7d32'
    }}>
      <h2 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 'bold' }}>
        ⚙️ Configuración del paciente
      </h2>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>🔐 Cambiar contraseña</h3>
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={nuevaClave}
          onChange={e => setNuevaClave(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmacion}
          onChange={e => setConfirmacion(e.target.value)}
          style={inputStyle}
        />
        <button onClick={cambiarClave} style={buttonStyle}>Actualizar contraseña</button>
        {mensaje && <p style={{ marginTop: '10px' }}>{mensaje}</p>}
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>🎨 Personalizar experiencia</h3>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>🌈 Cambiar tema visual (modo claro/oscuro)</li>
          <li>🔔 Activar o desactivar notificaciones clínicas</li>
          <li>🗣 Seleccionar idioma preferido</li>
          <li>📱 Vincular dispositivo móvil</li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>🧾 Privacidad y datos</h3>
        <ul style={{ fontSize: '16px', lineHeight: '1.8', paddingLeft: '20px' }}>
          <li>🔒 Revisar permisos de acceso</li>
          <li>📁 Descargar copia de tu historia clínica</li>
          <li>🧹 Solicitar eliminación de datos</li>
        </ul>
      </section>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '6px',
  border: '1px solid #c5e1a5',
  fontSize: '16px'
};

const buttonStyle = {
  backgroundColor: '#2e7d32',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default ConfiguracionPaciente;