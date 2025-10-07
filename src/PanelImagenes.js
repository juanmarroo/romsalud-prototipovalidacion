import React from 'react';

function PanelImagenes() {
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
        📷 Imágenes médicas
      </h2>

      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Este módulo está en desarrollo. Pronto podrás visualizar tus estudios médicos en formato digital, incluyendo:
      </p>

      <ul style={{ fontSize: '17px', lineHeight: '1.8', paddingLeft: '20px' }}>
        <li>🧠 Resonancias magnéticas</li>
        <li>🫁 Radiografías y tomografías</li>
        <li>🩻 Ecografías y estudios funcionales</li>
        <li>📁 Visualización longitudinal por fecha</li>
        <li>🔗 Integración con sistemas PACS y laboratorios</li>
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
          🛠 Estamos trabajando para que puedas acceder a tus estudios desde cualquier dispositivo, de forma segura y digna.
        </p>
        <p style={{ fontSize: '16px' }}>
          Tu historia clínica merece ser visualmente clara y accesible.
        </p>
      </div>
    </div>
  );
}

export default PanelImagenes;