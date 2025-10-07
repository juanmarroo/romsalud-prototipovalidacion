import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importar navegación

const estiloInput = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1em'
};

const estiloBoton = {
  backgroundColor: '#0077cc',
  color: 'white',
  padding: '12px 20px',
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
  padding: '12px 20px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1em',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginTop: '30px'
};

function ContactoRomSalud() {
  const navigate = useNavigate(); // ✅ Activar navegación

  return (
    <div style={{
      maxWidth: '600px',
      margin: 'auto',
      padding: '30px',
      backgroundColor: '#fefefe',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#0077cc', marginBottom: '20px' }}>📞 Contactar al equipo RomSalud</h2>

      <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
        Si tienes dudas, sugerencias o necesitas acompañamiento, puedes escribirnos directamente. Estamos aquí para escucharte y mejorar juntos.
      </p>

      <form onSubmit={e => {
        e.preventDefault();
        alert('Mensaje enviado. Gracias por comunicarte con RomSalud.');
      }}>
        <input
          style={estiloInput}
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
        />
        <input
          style={estiloInput}
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          required
        />
        <textarea
          style={{ ...estiloInput, height: '120px' }}
          name="mensaje"
          placeholder="Escribe tu mensaje aquí..."
          required
        />
        <button type="submit" style={estiloBoton}>Enviar mensaje</button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      <h4>📬 También puedes escribirnos a:</h4>
      <p><strong>equipo@romsalud.org</strong></p>
      <p><strong>WhatsApp:</strong> +58 412-1234567</p>

      {/* ✅ Botón para volver al home */}
      <button style={estiloBotonHome} onClick={() => navigate('/')}>
        🔙 Volver al inicio
      </button>
    </div>
  );
}

export default ContactoRomSalud;