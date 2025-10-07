import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usuariosPrueba } from './usuarios';
import { getPacientes } from './pacientesData'; 

function LoginPaciente() {
  const navigate = useNavigate();
  const [identificador, setIdentificador] = React.useState('');
  const [clave, setClave] = React.useState('');
  const [error, setError] = React.useState('');
  const [intentosFallidos, setIntentosFallidos] = React.useState(0);

  const handleLogin = () => {
    if (!identificador || !clave) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // ✅ Unificar pacientes simulados y reales
    const todos = { ...getPacientes() };
    const listaPacientes = [...usuariosPrueba, ...Object.values(todos)];

    const paciente = listaPacientes.find(p =>
      (p.historia === identificador || p.documento === identificador) &&
      p.clave === clave
    );

    if (paciente) {
      localStorage.setItem('codigoPaciente', paciente.historia);
      navigate(`/paciente/perfil/${paciente.historia}`);
    } else {
      setIntentosFallidos(intentosFallidos + 1);
      setError('Identificador o contraseña incorrectos');
    }
  };

  return (
    <div className="App" style={{
      maxWidth: '420px',
      margin: 'auto',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      backgroundColor: '#e8f5e9',
      color: '#2e7d32'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>🩺 Acceso al portal del paciente</h2>
      <p style={{ fontSize: '14px', textAlign: 'center', marginBottom: '20px' }}>
        Puedes ingresar con tu cédula o tu código de historia clínica.
      </p>

      <input
        placeholder="Cédula o código de historia"
        value={identificador}
        onChange={e => setIdentificador(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={clave}
        onChange={e => setClave(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handleLogin} style={buttonStyle}>
        ✅ Ingresar
      </button>

      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <a href="#" style={{ color: '#1b5e20' }}>¿Olvidaste tu contraseña?</a>
      </p>

      {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
      {intentosFallidos >= 3 && (
        <p style={{ color: 'orange', textAlign: 'center' }}>
          Has fallado varios intentos. Verifica tus datos o solicita ayuda.
        </p>
      )}

      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '25px',
          backgroundColor: '#1b5e20',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '8px',
          cursor: 'pointer',
          width: '100%',
          fontSize: '16px'
        }}
      >
        🔙 Volver al menú inicial
      </button>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '12px',
  borderRadius: '6px',
  border: '1px solid #c5e1a5',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#43a047',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default LoginPaciente;