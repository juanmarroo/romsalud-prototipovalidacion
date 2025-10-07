import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importar navegación

const estiloBoton = {
  backgroundColor: '#0077cc',
  color: 'white',
  padding: '10px 18px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1em',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginRight: '10px'
};

const estiloBotonHome = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '10px 18px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1em',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginTop: '30px'
};

function EscuelaRomSalud() {
  const navigate = useNavigate(); // ✅ Activar navegación

  return (
    <div style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '30px',
      backgroundColor: '#fefefe',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#0077cc', marginBottom: '20px' }}>🎓 Escuela RomSalud</h2>

      <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
        Bienvenido/a al espacio educativo de RomSalud. Aquí encontrarás contenidos diseñados para fortalecer la alfabetización digital en salud, tanto para pacientes como para profesionales. Aprende a usar el sistema, mejora tus habilidades tecnológicas y participa en una comunidad que se forma para transformar.
      </p>

      <h4>📚 Contenidos disponibles:</h4>
      <ul style={{ marginBottom: '20px' }}>
        <li>Uso básico de RomSalud para pacientes</li>
        <li>Registro de signos vitales y seguimiento clínico</li>
        <li>Buenas prácticas digitales en salud comunitaria</li>
        <li>Seguridad, privacidad y ética digital</li>
      </ul>

      <button style={estiloBoton} onClick={() => alert('Accediendo a contenidos educativos...')}>
        Explorar contenidos
      </button>

      <hr style={{ margin: '30px 0' }} />

      <h4>📞 ¿Necesitas ayuda?</h4>
      <p>Escríbenos a <strong>escuela@romsalud.org</strong> o consulta con tu promotor comunitario.</p>

      {/* ✅ Botón para volver al home */}
      <button style={estiloBotonHome} onClick={() => navigate('/')}>
        🔙 Volver al inicio
      </button>
    </div>
  );
}

export default EscuelaRomSalud;
