import React from 'react';

function PanelHabitos() {
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
        🧘 Hábitos y estilo de vida
      </h2>

      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Este módulo está en desarrollo. Pronto podrás registrar y consultar tus hábitos cotidianos, incluyendo:
      </p>

      <ul style={{ fontSize: '17px', lineHeight: '1.8', paddingLeft: '20px' }}>
        <li>🥗 Alimentación y nutrición</li>
        <li>🚶 Actividad física y movilidad</li>
        <li>😴 Sueño y descanso</li>
        <li>🧘 Prácticas de autocuidado y bienestar</li>
        <li>🚬 Consumo de sustancias y riesgos asociados</li>
      </ul>

      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f1f8e9',
        borderRadius: '8px',
        border: '1px solid #c5e1a5',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '16px', marginBottom: '10px' }}>
          🛠 Estamos trabajando para que puedas construir tu historia clínica con información relevante sobre tu estilo de vida.
        </p>
        <p style={{ fontSize: '16px' }}>
          Tu salud cotidiana también merece ser escuchada y acompañada.
        </p>
      </div>
    </div>
  );
}

export default PanelHabitos;