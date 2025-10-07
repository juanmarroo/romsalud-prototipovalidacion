import React from 'react';

function PanelLaboratorio() {
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
        🧪 Resultados de laboratorio
      </h2>

      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Este módulo está en desarrollo. Pronto podrás consultar tus resultados clínicos de forma clara y segura, incluyendo:
      </p>

      <ul style={{ fontSize: '17px', lineHeight: '1.8', paddingLeft: '20px' }}>
        <li>🩸 Hematología y perfil bioquímico</li>
        <li>🧫 Cultivos y pruebas microbiológicas</li>
        <li>🧬 Estudios genéticos y moleculares</li>
        <li>📅 Visualización por fecha y tipo de examen</li>
        <li>🔗 Integración con laboratorios comunitarios</li>
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
          🛠 Estamos trabajando para que puedas acceder a tus análisis desde cualquier dispositivo, con trazabilidad y respaldo clínico.
        </p>
        <p style={{ fontSize: '16px' }}>
          Tu salud merece información clara, accesible y confiable.
        </p>
      </div>
    </div>
  );
}

export default PanelLaboratorio;