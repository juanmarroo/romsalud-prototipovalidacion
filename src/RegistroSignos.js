import React from 'react';
import { useParams } from 'react-router-dom';
import { getPacientes, agregarSignos, evaluarAlertas } from './pacientesData';
import { predecirACV } from './serviciosAPI';

function RegistroSignos({ codigo: codigoProp }) {
  const params = useParams();
  const codigo = codigoProp || params.codigo;
  const paciente = getPacientes()[codigo];

  const [signos, setSignos] = React.useState({
    presion: '',
    glucosa: '',
    temperatura: '',
    saturacion: '',
    edad: '',
    bmi: '',
    hipertension_cronica: '0',
    heart_disease: '0',
  });

  const clasificarEdad = edad => edad > 60 ? 'age>60' : 'age<=60';
  const clasificarGlucosa = glucosa => glucosa > 140 ? 'high_glucose' : 'normal_glucose';
  const clasificarBMI = bmi => bmi > 30 ? 'high_bmi' : 'normal_bmi';
  const clasificarPresion = presion => {
    if (!presion.includes('/')) return 'desconocida';
    const [sistolica, diastolica] = presion.split('/').map(p => parseInt(p));
    return (sistolica >= 140 || diastolica >= 90) ? 'high_pressure' : 'normal_pressure';
  };

  const guardarSignos = () => {
    const signosProcesados = {
      ...signos,
      edad_categoria: clasificarEdad(signos.edad),
      glucosa_categoria: clasificarGlucosa(signos.glucosa),
      bmi_categoria: clasificarBMI(signos.bmi),
      presion_categoria: clasificarPresion(signos.presion),
    };

    agregarSignos(codigo, signosProcesados);
    evaluarAlertas(codigo);

    const datosParaPrediccion = {
      age: parseFloat(signos.edad),
      avg_glucose_level: parseFloat(signos.glucosa),
      bmi: parseFloat(signos.bmi),
      hypertension: signos.hipertension_cronica,
      heart_disease: signos.heart_disease
    };

  predecirACV(datosParaPrediccion).then(resultado => {
  alert(`🧠 Riesgo estimado: ${resultado.riesgo} (${resultado.probabilidad * 100}%)`);
  getPacientes()[codigo].evaluacionACV = resultado;
  localStorage.setItem('pacientes', JSON.stringify(getPacientes())); // ✅ persistencia
  alert('Signos registrados correctamente');
});

    setSignos({
      presion: '',
      glucosa: '',
      temperatura: '',
      saturacion: '',
      edad: '',
      bmi: '',
      hipertension_cronica: '0',
      heart_disease: '0',
    });
  };

  if (!paciente) return <p>Paciente no encontrado</p>;

  return (
    <div>
      <h2>🩺 Registrar signos vitales</h2>

      {/* Presión arterial */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          style={{ flex: 1, padding: '10px' }}
          placeholder="Presión arterial (ej. 120/80)"
          value={signos.presion}
          onChange={e => setSignos({ ...signos, presion: e.target.value })}
        />
        <span style={{ marginLeft: '10px', color: '#555' }}>mmHg</span>
      </div>

      {/* Glucosa */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          style={{ flex: 1, padding: '10px' }}
          placeholder="Glucosa"
          value={signos.glucosa}
          onChange={e => setSignos({ ...signos, glucosa: e.target.value })}
        />
        <span style={{ marginLeft: '10px', color: '#555' }}>mg/dL</span>
      </div>

      {/* Temperatura */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          style={{ flex: 1, padding: '10px' }}
          placeholder="Temperatura"
          value={signos.temperatura}
          onChange={e => setSignos({ ...signos, temperatura: e.target.value })}
        />
        <span style={{ marginLeft: '10px', color: '#555' }}>°C</span>
      </div>

      {/* Saturación */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          style={{ flex: 1, padding: '10px' }}
          placeholder="Saturación de oxígeno"
          value={signos.saturacion}
          onChange={e => setSignos({ ...signos, saturacion: e.target.value })}
        />
        <span style={{ marginLeft: '10px', color: '#555' }}>%</span>
      </div>

      {/* Edad */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          style={{ flex: 1, padding: '10px' }}
          placeholder="Edad"
          value={signos.edad}
          onChange={e => setSignos({ ...signos, edad: e.target.value })}
        />
        <span style={{ marginLeft: '10px', color: '#555' }}>años</span>
      </div>

      {/* IMC */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          style={{ flex: 1, padding: '10px' }}
          placeholder="IMC"
          value={signos.bmi}
          onChange={e => setSignos({ ...signos, bmi: e.target.value })}
        />
        <span style={{ marginLeft: '10px', color: '#555' }}>kg/m²</span>
      </div>

      {/* Hipertensión */}
      <select
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        value={signos.hipertension_cronica}
        onChange={e => setSignos({ ...signos, hipertension_cronica: e.target.value })}
      >
        <option value="0">No tiene hipertensión diagnosticada</option>
        <option value="1">Tiene hipertensión diagnosticada</option>
      </select>

      {/* Enfermedad cardíaca */}
      <select
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        value={signos.heart_disease}
        onChange={e => setSignos({ ...signos, heart_disease: e.target.value })}
      >
        <option value="0">Sin enfermedad cardíaca</option>
        <option value="1">Con enfermedad cardíaca</option>
      </select>

      <button onClick={guardarSignos}>Registrar</button>
    </div>
  );
}

export default RegistroSignos;