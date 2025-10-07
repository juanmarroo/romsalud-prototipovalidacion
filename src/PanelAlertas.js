import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPacientes } from './pacientesData';

function PanelAlertas() {
  const { codigo } = useParams();
  const [paciente, setPaciente] = useState(null);

  // Actualiza el paciente cada 3 segundos para reflejar cambios desde otros módulos
  useEffect(() => {
    const interval = setInterval(() => {
      const actualizado = getPacientes()[codigo];
      setPaciente(actualizado);
    }, 1000);

    return () => clearInterval(interval);
  }, [codigo]);

  if (!paciente) {
  return (
    <div style={{ textAlign: 'center', padding: '20px', color: '#555' }}>
      <p>⏳ Cargando perfil del paciente...</p>
    </div>
  );
}

  const tieneAlertas = Array.isArray(paciente.alertas) && paciente.alertas.length > 0;

  return (
    <div>
      <h2>🚨 Alertas clínicas</h2>
      {tieneAlertas ? (
        paciente.alertas.map((alerta, index) => (
          <div
            key={index}
            style={{
              border: '1px solid red',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              backgroundColor: '#ffeaea'
            }}
          >
            <p><strong>Tipo:</strong> {alerta.tipo}</p>
            <p><strong>Nivel:</strong> {alerta.nivel}</p>
            <p><strong>Mensaje:</strong> {alerta.mensaje}</p>
          </div>
        ))
      ) : (
        <p style={{ color: '#555' }}>No hay alertas clínicas registradas.</p>
      )}
    </div>
  );
}

export default PanelAlertas;