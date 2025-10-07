import React from 'react';

function PanelAlergias() {
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
        ⚠️ Registro de alergias
      </h2>

      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Este módulo está en desarrollo. Pronto podrás consultar y actualizar tus alergias registradas, incluyendo:
      </p>

      <ul style={{ fontSize: '17px', lineHeight: '1.8', paddingLeft: '20px' }}>
        <li>🌾 Alergias alimentarias (ej. maní, mariscos)</li>
        <li>💊 Alergias a medicamentos (ej. penicilina)</li>
        <li>🌳 Alergias ambientales (ej. polen, polvo)</li>
        <li>🧪 Reacciones adversas registradas</li>
        <li>📅 Historial de episodios y seguimiento</li>
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
          🛠 Estamos trabajando para que puedas gestionar tus alergias de forma segura y compartida con tu equipo clínico.
        </p>
        <p style={{ fontSize: '16px' }}>
          Tu seguridad es prioridad. Este módulo te ayudará a prevenir riesgos y mejorar tu atención.
        </p>
      </div>
    </div>
  );
}

export default PanelAlergias;