import { pacientesPrueba } from './pacientesPrueba';

let pacientes = (() => {
  const local = JSON.parse(localStorage.getItem('pacientes')) || {};
  return { ...pacientesPrueba, ...local };
})();

export function getPacientes() {
  return pacientes;
}

export function guardarPacientes(nuevoEstado) {
  localStorage.setItem('pacientes', JSON.stringify(nuevoEstado));
  pacientes = { ...pacientesPrueba, ...nuevoEstado }; // Actualiza fuente unificada
}

export function agregarPaciente(nuevo) {
  pacientes[nuevo.historia] = {
    ...nuevo,
    ultimaVisita: new Date().toLocaleDateString(),
    signos: {
      presion: '—',
      glucosa: '—',
      temperatura: '—',
      saturacion: '—',
    },
    alertas: [],
    visitasCabina: [],
    historialSignos: [],
  };
  guardarPacientes(pacientes);
}

export function registrarVisita(historia, visita) {
  if (pacientes[historia]) {
    pacientes[historia].visitasCabina.push(visita);
    guardarPacientes(pacientes);
  }
}

export function actualizarSignos(historia, nuevosSignos) {
  if (pacientes[historia]) {
    pacientes[historia].signos = { ...nuevosSignos };
    pacientes[historia].ultimaVisita = new Date().toLocaleDateString();
    guardarPacientes(pacientes);
  }
}

export function agregarSignos(historia, nuevosSignos) {
  const fechaActual = new Date().toLocaleString();

  if (pacientes[historia]) {
    pacientes[historia].historialSignos = pacientes[historia].historialSignos || [];

    pacientes[historia].historialSignos.push({
      fecha: fechaActual,
      ...nuevosSignos
    });

    pacientes[historia].signos = {
      presion: nuevosSignos.presion,
      glucosa: nuevosSignos.glucosa,
      temperatura: nuevosSignos.temperatura,
      saturacion: nuevosSignos.saturacion,
      edad: nuevosSignos.edad,
      bmi: nuevosSignos.bmi,
      hipertension_cronica: nuevosSignos.hipertension_cronica,
      heart_disease: nuevosSignos.heart_disease,
      edad_categoria: nuevosSignos.edad_categoria,
      glucosa_categoria: nuevosSignos.glucosa_categoria,
      bmi_categoria: nuevosSignos.bmi_categoria,
      presion_categoria: nuevosSignos.presion_categoria
    };

    pacientes[historia].ultimaVisita = fechaActual;
    guardarPacientes(pacientes);
  }
}

export function evaluarAlertas(historia) {
  const paciente = pacientes[historia];
  if (!paciente || !Array.isArray(paciente.historialSignos) || paciente.historialSignos.length === 0) return;

  const signos = paciente.historialSignos.at(-1);
  const nuevasAlertas = [];

  // Regla 1: Presión arterial alta
  if (signos.presion && signos.presion.includes('/')) {
    const [sistolica, diastolica] = signos.presion.split('/').map(p => parseInt(p));
    if (sistolica >= 140 || diastolica >= 90) {
      nuevasAlertas.push({
        tipo: 'Hipertensión',
        nivel: 'Alto',
        mensaje: 'Presión arterial elevada. Se recomienda seguimiento clínico.',
      });
    }
  }

  // Regla 2: Temperatura elevada
  const tempNum = parseFloat(signos.temperatura);
  if (!isNaN(tempNum) && tempNum >= 38) {
    nuevasAlertas.push({
      tipo: 'Fiebre',
      nivel: 'Moderado',
      mensaje: 'Temperatura corporal elevada. Evaluar posible infección.',
    });
  }

  // Regla 3: Saturación baja
  const satNum = parseInt(signos.saturacion);
  if (!isNaN(satNum) && satNum < 94) {
    nuevasAlertas.push({
      tipo: 'Hipoxemia',
      nivel: 'Alto',
      mensaje: 'Saturación de oxígeno baja. Evaluar función respiratoria.',
    });
  }

  // Regla 4: Glucosa alterada
  const glucosaNum = parseInt(signos.glucosa);
  if (!isNaN(glucosaNum) && glucosaNum >= 110) {
    nuevasAlertas.push({
      tipo: 'Hiperglucemia',
      nivel: 'Alto',
      mensaje: 'Glucosa elevada. Posible riesgo metabólico.',
    });
  }

  paciente.alertas = nuevasAlertas;
  guardarPacientes(pacientes);
}

export function buscarPorCedula(cedula) {
  const todos = Object.values(pacientes);
  return todos.find(p => p.documento === cedula) || null;
}