import React from 'react';
import { useParams } from 'react-router-dom';
import { getPacientes } from './pacientesData';

function PanelVisitas() {
  const { codigo } = useParams();
  const paciente = getPacientes()[codigo];

  if (!paciente) {
    return (
      <div style={{ textAlign: 'center', padding: '30px', color: '#2e7d32' }}>
        <p>⏳ Cargando perfil del paciente...</p>
      </div>
    );
  }

  const visitas = paciente.visitasCabina || [];

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
        🚐 Visitas comunitarias
      </h2>

      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Este módulo permite visualizar las visitas médicas realizadas en tu comunidad, incluyendo:
      </p>

      <ul style={{ fontSize: '17px', lineHeight: '1.8', paddingLeft: '20px' }}>
        <li>📅 Fecha y lugar de la visita</li>
        <li>🧑‍⚕️ Profesional que te atendió</li>
        <li>📝 Motivo clínico y evolución</li>
        <li>🔔 Alertas generadas durante la visita</li>
        <li>📍 Cobertura territorial y continuidad del cuidado</li>
      </ul>

      {visitas.length > 0 ? (
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>📋 Historial de visitas</h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.6', paddingLeft: '0' }}>
            {visitas.map((visita, index) => (
              <li key={index} style={{
                backgroundColor: '#f1f8e9',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #c5e1a5',
                listStyle: 'none'
              }}>
                <strong>📅 Fecha:</strong> {visita.fecha}<br />
                <strong>📍 Lugar:</strong> {visita.lugar}<br />
                <strong>📝 Motivo:</strong> {visita.motivo}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f1f8e9',
          borderRadius: '8px',
          border: '1px solid #c5e1a5',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '16px' }}>No hay visitas registradas en tu historial clínico.</p>
          <p style={{ fontSize: '15px', color: '#558b2f' }}>
            Este módulo se actualizará automáticamente cuando se registre una nueva visita desde el área profesional.
          </p>
        </div>
      )}
    </div>
  );
}

export default PanelVisitas;