import React from 'react';

function EvaluacionACV({ resultado }) {

  console.log("Resultado recibido en tarjeta:", resultado);

  if (!resultado || resultado.probabilidad === undefined || resultado.riesgo === undefined) {
    return <p>No hay evaluación de riesgo disponible.</p>;
  }

  const porcentaje = Math.round(resultado.probabilidad * 100);

  return (
    <div style={{
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      marginTop: '10px'
    }}>
      <h4>🧠 Evaluación de riesgo de ACV</h4>
      <p><strong>Probabilidad estimada:</strong> {porcentaje}%</p>
      <p><strong>Clasificación:</strong> {resultado.riesgo}</p>
      {resultado.riesgo === 'Alto' && (
        <p style={{ color: 'red' }}>⚠️ Riesgo elevado. Se recomienda evaluación médica inmediata.</p>
      )}
      {resultado.riesgo === 'Bajo' && (
        <p style={{ color: 'green' }}>✅ Riesgo bajo. Continuar con seguimiento preventivo.</p>
      )}
    </div>
  );
}

export default EvaluacionACV;

