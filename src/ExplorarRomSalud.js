import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importar navegación

const estiloSeccion = {
  marginBottom: '30px',
  textAlign: 'left'
};

const estiloTitulo = {
  fontSize: '2em',
  color: '#0077cc',
  marginBottom: '10px'
};

const estiloTexto = {
  fontSize: '1.1em',
  color: '#333',
  lineHeight: '1.6'
};

const estiloCard = {
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  marginBottom: '20px'
};

const estiloBoton = {
  backgroundColor: '#0077cc',
  color: 'white',
  padding: '14px 24px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '1.1em',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  marginRight: '10px'
};

const estiloBotonHome = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '14px 24px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '1.1em',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  marginTop: '20px'
};

function ExplorarRomSalud() {
  const navigate = useNavigate(); // ✅ Activar navegación

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '40px' }}>
      <h1 style={estiloTitulo}>🌐 Explora RomSalud</h1>
      <p style={estiloTexto}>
        RomSalud es más que una plataforma: es un ecosistema digital diseñado para transformar la experiencia clínica en territorios vulnerables. Aquí puedes conocer sus módulos, su arquitectura ética y su impacto real.
      </p>
<div style={estiloSeccion}>
  <h2 style={estiloTitulo}>🩺 Módulos clínicos</h2>

  <div style={estiloCard}>
    <p style={estiloTexto}>
      RomSalud es una <strong>plataforma de telemedicina</strong> diseñada para ofrecer atención clínica real en territorios vulnerables. No es solo un sistema digital: es una <strong>clínica digital</strong> que conecta pacientes con profesionales de salud, brindando acompañamiento humano, seguimiento continuo y decisiones compartidas.
    </p>
  </div>

  <div style={estiloCard}>
    <p style={estiloTexto}>
      El paciente puede acceder a <strong>consultas en línea</strong>, recibir orientación médica y participar activamente en su cuidado. La tecnología no reemplaza al médico: lo potencia. Cada módulo está pensado para facilitar el vínculo clínico, incluso en zonas remotas.
    </p>
  </div>

  <div style={estiloCard}>
    <p style={estiloTexto}>
      La plataforma incluye <strong>registro de signos vitales</strong>, visualización longitudinal, alertas clínicas y navegación intuitiva. Cada dato cuenta, cada paciente importa.
    </p>
  </div>

  <div style={estiloCard}>
    <p style={estiloTexto}>
      Un <strong>motor de reglas clínicas</strong> reacciona en tiempo real, interpretando la información para apoyar decisiones médicas. Además, el <strong>algoritmo de predicción de enfermedades</strong> permite emitir alertas tempranas, anticipar riesgos y fortalecer la seguridad clínica.
    </p>
  </div>
</div>

      <div style={estiloSeccion}>
  <h2 style={estiloTitulo}>🚐 Cabinas móviles y cobertura extendida</h2>
  <div style={estiloCard}>
    <p style={estiloTexto}>
      RomSalud no se queda en la pantalla: se despliega en el territorio. Las <strong>cabinas móviles</strong> llevan tecnología clínica a zonas remotas, permitiendo consultas, registros y seguimiento en comunidades sin acceso tradicional. Cada cabina es una extensión digna del sistema, equipada con conectividad, sensores y autonomía operativa.
    </p>
  </div>
</div>

<div style={estiloSeccion}>
  <h2 style={estiloTitulo}>🧠 Algoritmo de predicción y alertas clínicas</h2>
  <div style={estiloCard}>
    <p style={estiloTexto}>
      La plataforma integra un <strong>algoritmo de predicción de enfermedades</strong> que analiza patrones clínicos y emite alertas tempranas. Estas alertas se combinan con <strong>reglas predefinidas</strong> para reforzar la seguridad del paciente y apoyar decisiones médicas en tiempo real. No es solo tecnología: es anticipación con propósito.
    </p>
  </div>
</div>

      <div style={estiloSeccion}>
        <h2 style={estiloTitulo}>🎓 Escuela RomSalud</h2>
        <div style={estiloCard}>
          <p style={estiloTexto}>
            Espacio educativo para pacientes, promotores y profesionales. Aprende a usar el sistema, fortalece tu alfabetización digital y participa en una comunidad que se forma para transformar.
          </p>
        </div>
      </div>

      <div style={estiloSeccion}>
        <h2 style={estiloTitulo}>🤝 Impacto territorial</h2>
        <div style={estiloCard}>
          <p style={estiloTexto}>
            RomSalud nace desde el territorio, con sensibilidad social y visión sistémica. Cada módulo fue validado con profesionales reales, cada decisión refleja la dignidad del paciente.
          </p>
        </div>
      </div>

      <div style={estiloSeccion}>
        <h2 style={estiloTitulo}>📍 ¿Por qué consultarse en RomSalud?</h2>
        <ul style={{ ...estiloTexto, paddingLeft: '20px' }}>
          <li> Atención digna, clara y sin barreras tecnológicas</li>
          <li>Seguimiento clínico real, no solo registros</li>
          <li>Educación continua para todos los roles</li>
          <li>Arquitectura ética, modular y territorial</li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button style={estiloBoton} onClick={() => alert('Consulta iniciada.')}>
          💬 Quiero iniciar mi consulta
        </button>

        {/* ✅ Botón para volver al home */}
        <button style={estiloBotonHome} onClick={() => navigate('/')}>
          🔙 Volver al inicio
        </button>
      </div>
    </div>
  );
}

export default ExplorarRomSalud;