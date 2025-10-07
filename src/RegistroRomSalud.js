import React, { useState } from 'react';
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
  marginTop: '20px'
};

function RegistroRomSalud() {
  const [datos, setDatos] = useState({
    nombre: '',
    documento: '',
    rol: '',
    correo: '',
    telefono: ''
  });

  const navigate = useNavigate(); // ✅ Activar navegación

  const handleChange = e => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Registro enviado. Gracias por confiar en RomSalud.');
    console.log(datos);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: 'auto',
      padding: '30px',
      backgroundColor: '#fefefe',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#0077cc', marginBottom: '20px' }}>📝 Registro en RomSalud</h2>

      <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
        Completa los siguientes datos para iniciar tu experiencia en RomSalud. Este registro es parte del proceso de validación del sistema.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          style={estiloInput}
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={datos.nombre}
          onChange={handleChange}
          required
        />
        <input
          style={estiloInput}
          type="text"
          name="documento"
          placeholder="Cédula o documento"
          value={datos.documento}
          onChange={handleChange}
          required
        />
        <select
          style={estiloInput}
          name="rol"
          value={datos.rol}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona tu rol</option>
          <option value="paciente">Paciente</option>
          <option value="promotor">Promotor comunitario</option>
          <option value="profesional">Profesional de la salud</option>
        </select>
        <input
          style={estiloInput}
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={datos.correo}
          onChange={handleChange}
        />
        <input
          style={estiloInput}
          type="tel"
          name="telefono"
          placeholder="Teléfono de contacto"
          value={datos.telefono}
          onChange={handleChange}
        />

        <button type="submit" style={estiloBoton}>Registrarse</button>
      </form>

      {/* ✅ Botón para volver al home */}
      <button style={estiloBotonHome} onClick={() => navigate('/')}>
        🔙 Volver al inicio
      </button>
    </div>
  );
}

export default RegistroRomSalud;