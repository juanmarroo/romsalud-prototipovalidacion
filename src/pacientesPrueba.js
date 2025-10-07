export const pacientesPrueba = {
  'HC-00125': {
    historia: 'HC-00125',
    documento: 'V12345678',
    clave: 'carlos125',
    nombre: 'Carlos Pérez',
    edad: 68,
    sexo: 'Masculino',
    diagnostico: 'Hipertensión',
    ultimaVisita: '4/10/2025, 8:17',
    signos: {
      presion: '145/95',
      glucosa: '160',
      temperatura: '37.2',
      saturacion: '96',
      edad: '68',
      bmi: '32',
      hipertension_cronica: '1',
      heart_disease: '0',
      edad_categoria: 'age>60',
      glucosa_categoria: 'high_glucose',
      bmi_categoria: 'high_bmi',
      presion_categoria: 'high_pressure'
    },
    historialSignos: [
      {
        fecha: '4/10/2025, 8:17',
        presion: '145/95',
        glucosa: '160',
        temperatura: '37.2',
        saturacion: '96',
        edad: '68',
        bmi: '32',
        hipertension_cronica: '1',
        heart_disease: '0',
        edad_categoria: 'age>60',
        glucosa_categoria: 'high_glucose',
        bmi_categoria: 'high_bmi',
        presion_categoria: 'high_pressure'
      }
    ],
    alertas: [
      {
        tipo: 'Hipertensión',
        nivel: 'Alto',
        mensaje: 'Presión arterial elevada. Se recomienda seguimiento clínico.'
      },
      {
        tipo: 'Hiperglucemia',
        nivel: 'Alto',
        mensaje: 'Glucosa elevada. Posible riesgo metabólico.'
      }
    ],
    visitasCabina: [
      {
        fecha: '2025-09-25',
        lugar: 'Cabina Móvil Maracay',
        motivo: 'Control de presión arterial'
      }
    ],
    medicamentos: ['Losartán 50mg'],
    laboratorio: ['Hemoglobina: 13.5'],
    alergias: ['Penicilina'],
    habitos: ['Camina 30 min diarios'],
    evaluacionACV: {
      riesgo: 'Moderado',
      probabilidad: 0.42
    }
  }
};