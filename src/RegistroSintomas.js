import React from 'react';
import { useParams } from 'react-router-dom';
import { getPacientes } from './pacientesData';

function RegistroSintomas() {
  const { codigo } = useParams();
  const paciente = getPacientes()[codigo];
  const [sintomas, setSintomas] = React.useState('');

  const guardarSintomas = () => {
    if (!paciente) return;

    paciente.sintomas = paciente.sintomas || [];
    paciente.sintomas.push({
      fecha: new Date().toLocaleString(),
      texto: sintomas,
    });

    localStorage.setItem('pacientes', JSON.stringify(getPacientes()));
    alert('Síntomas registrados');
    setSintomas('');
  };

  if (!paciente) return <p>Paciente no encontrado</p>;

  return (
    <div>
      <h2>📝 Registrar síntomas</h2>
      <textarea
        style={{ width: '100%', height: '100px', marginBottom: '10px' }}
        placeholder="Describe tus síntomas o cómo te sientes hoy..."
        value={sintomas}
        onChange={e => setSintomas(e.target.value)}
      />
      <button onClick={guardarSintomas}>Registrar</button>
    </div>
  );
}

export default RegistroSintomas;