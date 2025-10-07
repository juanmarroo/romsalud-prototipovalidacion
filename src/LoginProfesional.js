import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginProfesional() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [intentosFallidos, setIntentosFallidos] = React.useState(0);
  const [error, setError] = React.useState('');

  const handleLogin = () => {
    if (!user || !pass) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (user === 'medico' && pass === '1234') {
      navigate('/panel');
    } else {
      setIntentosFallidos(intentosFallidos + 1);
      setError('Credenciales inválidas. Intenta nuevamente.');
    }
  };

  return (
    <div className="App" style={{
      maxWidth: '420px',
      margin: 'auto',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      backgroundColor: '#e3f2fd',
      color: '#0d47a1'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>🔐 Autenticación Profesional</h2>
      <p style={{ fontSize: '14px', textAlign: 'center', marginBottom: '20px' }}>
        Acceso exclusivo para profesionales autorizados. La información clínica está protegida.
      </p>

      <input
        placeholder="Usuario"
        value={user}
        onChange={e => setUser(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={e => setPass(e.target.value)}
        style={inputStyle}
      />

      <button onClick={handleLogin} style={buttonStyle}>
        ✅ Ingresar
      </button>

      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <a href="#" style={{ color: '#1565c0' }}>¿Olvidaste tu contraseña?</a>
      </p>

      {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
      {intentosFallidos >= 3 && (
        <p style={{ color: 'orange', textAlign: 'center' }}>
          Demasiados intentos fallidos. Verifica tus credenciales o contacta al administrador.
        </p>
      )}

      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '25px',
          backgroundColor: '#0d47a1',
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
  border: '1px solid #90caf9',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#1976d2',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default LoginProfesional;