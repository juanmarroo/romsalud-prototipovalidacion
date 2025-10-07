import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeResponsive.css';

function Home() {
  const navigate = useNavigate();

  const roles = [
    { label: '👩‍⚕️ Profesional de la salud', path: '/login' },
    { label: '🧑‍🌾 Promotor comunitario', path: '/promotor/perfil/PR-0001' },
    { label: '📍 Gestor territorial', path: '/gestor/perfil/GT-0001' },
    { label: '🧑‍⚕️ Paciente', path: '/paciente-login' }
  ];

  const [mostrarAcceso, setMostrarAcceso] = React.useState(false);

  return (
    <div style={styles.container}>
      <img
        src="/romsalud-logo1.png"
        alt="RomSalud Logo"
        style={styles.logo}
        className="logo-fade"
      />
      <h1 style={styles.title}>Bienvenido a <span style={{ color: '#222' }}>RomSalud</span></h1>
      <p style={styles.subtitle}>
        Una plataforma para la salud digital con enfoque territorial
      </p>
      <p style={{ fontSize: '1em', color: '#666', marginBottom: '30px' }}>
        Cada rol tiene una misión, cada paciente una voz.
      </p>

      {/* Card de roles */}
      {!mostrarAcceso ? (
        <div style={styles.card} className="home-card">
          <h2 style={styles.cardTitle}>🔐 Acceso al sistema</h2>
          <p style={{ color: '#666' }}>
            Este prototipo incluye funciones clínicas para demostración.  
            <button
              style={styles.linkButton}
              onClick={() => setMostrarAcceso(true)}
            >
              Mostrar accesos
            </button>
          </p>
        </div>
      ) : (
        <div style={styles.card} className="home-card">
          <h2 style={styles.cardTitle}>Selecciona tu rol para continuar:</h2>
          <div style={styles.buttonContainer} className="button-container">
            {roles.map((rol, index) => (
              <button
                key={index}
                onClick={() => navigate(rol.path)}
                style={styles.button}
                className="home-button"
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              >
                {rol.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Card de acciones adicionales */}
      <div style={{ ...styles.card, marginTop: '30px' }} className="home-card">
        <h2 style={styles.cardTitle}>¿Eres nuevo en RomSalud?</h2>
        <div style={styles.buttonContainer} className="button-container">
          <button style={styles.button} className="home-button" onClick={() => navigate('/registro')}>📝 Registrarse</button>
          <button style={styles.button} className="home-button" onClick={() => navigate('/consulta')}>💬 Acceder a consulta</button>
          <button style={styles.button} className="home-button" onClick={() => navigate('/contacto')}>📞 Contactar equipo</button>
          <button style={styles.button} className="home-button" onClick={() => navigate('/explorar')}>🌐 Explorar RomSalud</button>
          <button style={styles.button} className="home-button" onClick={() => navigate('/escuela')}>🎓 Escuela RomSalud</button>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>📘 ¿Qué es RomSalud? <a href="/info" style={styles.link}>Conoce más</a></p>
        <p style={{ fontSize: '0.9em', color: '#333' }}>Versión prototipo • Septiembre 2025</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px 20px',
    fontFamily: 'Lato, sans-serif',
    backgroundImage: 'url("/fondo-romsalud.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    backdropFilter: 'brightness(1)',
  },
  logo: {
    width: '400px',
    marginBottom: '20px'
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '10px',
    color: '#222'
  },
  subtitle: {
    fontSize: '1.2em',
    marginBottom: '40px',
    color: '#555'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '30px',
    maxWidth: '600px',
    margin: 'auto'
  },
  cardTitle: {
    marginBottom: '20px',
    fontSize: '1.5em'
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '8px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  },
  footer: {
    marginTop: '60px',
    fontSize: '1em'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '1em',
    padding: 0
  }
};

export default Home;