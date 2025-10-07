import React from 'react';
import { getPacientes, agregarPaciente, agregarSignos, evaluarAlertas, guardarPacientes } from './pacientesData';
import RegistroSignos from './RegistroSignos';
import EvaluacionACV from './EvaluacionACV';
import { predecirACV } from './serviciosAPI';
import { clasificarRiesgo } from './serviciosAPI';
import { buscarPorCedula } from './pacientesData';
import EscuelaRomSalud from './EscuelaRomSalud';
import AccedeConsulta from './AccedeConsulta';
import './ProfesionalResponsive.css';

function ProfesionalSalud() {
  const [vista, setVista] = React.useState('inicio');
  const [codigo, setCodigo] = React.useState('');
  const [paciente, setPaciente] = React.useState(null);
  const [pacientes, setPacientes] = React.useState(getPacientes());
  const [verHistorialCompleto, setVerHistorialCompleto] = React.useState(false);
  const [indiceAEliminar, setIndiceAEliminar] = React.useState(null);
  const [resultadoACV, setResultadoACV] = React.useState(null);
  const [grupoRiesgo, setGrupoRiesgo] = React.useState(null);
const [recomendaciones, setRecomendaciones] = React.useState([]);
const claveEvaluacion = resultadoACV ? `${resultadoACV.probabilidad}-${resultadoACV.riesgo}` : 'sin-evaluacion';
const [codigoHistoria, setCodigoHistoria] = React.useState('');
const [codigoCedula, setCodigoCedula] = React.useState('');

const [paginaActual, setPaginaActual] = React.useState(1);
const registrosPorPagina = 10;
const [fechaInicio, setFechaInicio] = React.useState('');
const [fechaFin, setFechaFin] = React.useState('');

const [registrosFiltrados, setRegistrosFiltrados] = React.useState([]);
const [menuAbierto, setMenuAbierto] = React.useState(true); // true para escritorio, false para móviles

React.useEffect(() => {
  if (paciente?.evaluacionACV) {
    console.log("Evaluación guardada en paciente:", paciente.evaluacionACV);
    setResultadoACV(paciente.evaluacionACV);
  }
}, [paciente]);

React.useEffect(() => {
  if (window.innerWidth < 768) {
    setMenuAbierto(false);
  }
}, []);

  const [nuevoPaciente, setNuevoPaciente] = React.useState({
  nombre: '',
  edad: '',
  sexo: '',
  documento: '',
  motivoConsulta: '',
  antecedentes: '',
  tipoIngreso: '',
  clave: ''
});

  const [signos, setSignos] = React.useState({
  presion: '',
  glucosa: '',
  temperatura: '',
  saturacion: '',
});

const buscarPaciente = (codigo) => {
  if (pacientes[codigo]) {
    setPaciente(pacientes[codigo]);
    setVista('ficha');
  } else {
    alert('Paciente no encontrado por historia clínica');
    setPaciente(null);
  }
};

const buscarPacientePorCedula = (cedula) => {
  const resultado = buscarPorCedula(cedula);
  if (resultado) {
    setPaciente(resultado);
    setVista('ficha');
  } else {
    alert('Paciente no encontrado por documento');
    setPaciente(null);
  }
};

const filtrarPorFechas = () => {
  if (!fechaInicio || !fechaFin) return paciente.historialSignos;

  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);

  return paciente.historialSignos.filter(registro => {
    const fechaRegistro = new Date(registro.fecha);
    return fechaRegistro >= inicio && fechaRegistro <= fin;
  });
};

///actualizar fechas
const aplicarFiltroPorFechas = () => {
  if (!paciente?.historialSignos) return;

  const desde = fechaInicio ? new Date(fechaInicio) : null;
  const hasta = fechaFin ? new Date(fechaFin) : null;

  const filtrados = paciente.historialSignos.filter(registro => {
    if (!registro?.fecha) return false;

    const fechaTexto = registro.fecha.split(',')[0].trim(); 
    const [dia, mes, año] = fechaTexto.split('/');
    const fechaRegistro = new Date(`${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`);

    return (!desde || fechaRegistro >= desde) && (!hasta || fechaRegistro <= hasta);
  });

  setRegistrosFiltrados(filtrados);
  setPaginaActual(1);
};


  const obtenerRecomendaciones = async () => {
  const datos = {
    age: parseFloat(paciente.edad),
    avg_glucose_level: parseFloat(paciente.signos?.glucosa),
    bmi: parseFloat(paciente.signos?.bmi || 22)
  };

  const resultado = await clasificarRiesgo(datos);
  setGrupoRiesgo(resultado.grupo);
  setRecomendaciones(resultado.recomendaciones);
};

const generarCodigoHistoria = () => {
  const timestamp = Date.now();
  return `HC-${timestamp.toString().slice(-6)}`;
};


const registrarPaciente = () => {
  const camposObligatorios = [
    nuevoPaciente.nombre,
    nuevoPaciente.edad,
    nuevoPaciente.sexo,
    nuevoPaciente.documento,
    nuevoPaciente.motivoConsulta,
    nuevoPaciente.clave
  ];

  if (camposObligatorios.every(Boolean)) {
    const historiaGenerada = generarCodigoHistoria();

    const pacienteFinal = {
      ...nuevoPaciente,
      historia: historiaGenerada,
      diagnostico: 'Sin diagnóstico asignado',
      historialSignos: [],
      alertas: [],
      ultimaVisita: 'Sin registros aún'
    };

    agregarPaciente(pacienteFinal);
    setPacientes(getPacientes());

    alert(`Paciente registrado con éxito. Código generado: ${historiaGenerada}`);
    setNuevoPaciente({
      nombre: '',
      edad: '',
      sexo: '',
      documento: '',
      motivoConsulta: '',
      antecedentes: '',
      tipoIngreso: '',
      clave: ''
    });
    setVista('inicio');
  } else {
    alert('Por favor completa todos los campos obligatorios');
  }
};


const borrarRegistro = (index) => {
  const historia = paciente.historia;
  const actualizado = [...paciente.historialSignos];
  actualizado.splice(index, 1);

  // Actualiza el paciente en el sistema
  pacientes[historia].historialSignos = actualizado;
  setPacientes({ ...pacientes });
  setPaciente(pacientes[historia]);

  // Guarda los cambios en localStorage para que no se pierdan al recargar
  guardarPacientes(pacientes);
};

const confirmarEliminacion = (index) => {
  setIndiceAEliminar(index);
};

 const guardarSignos = async () => {
  if (paciente && paciente.historia) {
    // 1. Guardar signos vitales
    agregarSignos(paciente.historia, signos);

    // 2. Evaluar alertas clínicas
    evaluarAlertas(paciente.historia);

    // 3. Ejecutar modelo predictivo
    const datosParaPrediccion = {
      age: parseFloat(paciente.edad),
      avg_glucose_level: parseFloat(signos.glucosa),
      bmi: parseFloat(signos.bmi || 22),
      hypertension: signos.hipertension_cronica || '0',
      heart_disease: signos.heart_disease || '0'
    };

   const bruto = await predecirACV(datosParaPrediccion);
console.log("Resultado bruto recibido desde API:", bruto);

// Transformar si es necesario
const resultado = {
  probabilidad: bruto.probabilidad ?? bruto.probabilidades?.[1] ?? null,
  riesgo: bruto.riesgo ?? bruto.respuesta?.[1] ?? "Error"
};


console.log("Resultado transformado para tarjeta:", resultado);

    // 4. Guardar resultado en el paciente
    pacientes[paciente.historia].evaluacionACV = resultado;
    guardarPacientes(pacientes);

    // 5. Actualizar estados
    setPacientes(getPacientes());

setResultadoACV(resultado);

setPaciente(prev => ({
  ...prev,
  evaluacionACV: resultado
}));

setVista('alertas');



    // 6. Resetear formulario
    alert('Signos vitales registrados');
    setSignos({
      presion: '',
      glucosa: '',
      temperatura: '',
      saturacion: '',
    });
  }
};

return (
  <div
    className="panel-profesional"
    style={{ display: 'flex', minHeight: '100vh', flexWrap: 'wrap' }}
  >
    {/* Botón hamburguesa visible solo en móviles */}
    <div className="boton-hamburguesa">
      <button onClick={() => setMenuAbierto(!menuAbierto)}>☰ Menú</button>
    </div>

   {/* Menú lateral adaptativo */}
<div
  className="menu-lateral"
  style={{
    display: menuAbierto || window.innerWidth >= 768 ? 'block' : 'none'
  }}
>
  <h2>RomSalud</h2>
  <button onClick={() => setVista('inicio')}>🏠 Inicio</button><br /><br />
  <button onClick={() => setVista('buscar')}>🔍 Buscar paciente</button><br /><br />
  <button onClick={() => setVista('registrar')}>➕ Registrar paciente</button><br /><br />

  {/* Secciones clínicas activas solo si hay paciente cargado */}
  {paciente && (
    <>
      <button onClick={() => setVista('historial')}>📋 Historial de signos</button><br /><br />
      <button onClick={() => setVista('alertas')}>🚨 Alertas clínicas</button><br /><br />
      <button onClick={() => setVista('signos')}>🩺 Registrar signos</button><br /><br />
      <button onClick={() => setVista('acciones')}>🧭 Acciones sugeridas</button><br /><br />
    </>
  )}

  <button onClick={() => window.location.href = '/'}>🔙 Volver al menú</button>
</div>


      {/* Área principal */}
      <div style={{ flex: 1, padding: '40px' }} className="area-principal">

  {paciente && vista !== 'buscar' && vista !== 'registrar' && (
  <div style={{
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '30px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  }}>
    <h3 style={{ marginBottom: '10px' }}>🧑‍⚕️ Paciente activo</h3>
    <p><strong>Nombre:</strong> {paciente.nombre}</p>
    <p><strong>Historia Clínica:</strong> {paciente.historia}</p>
    <p><strong>Diagnóstico:</strong> {paciente.diagnostico}</p>
    <p><strong>Última visita:</strong> {paciente.ultimaVisita}</p>
  </div>
)}


        {vista === 'inicio' && (
          <div>
            <h2>Bienvenido al módulo clínico</h2>
            <p>Seleccione una opción en el menú lateral para comenzar.</p>
          </div>
        )}

     {vista === 'buscar' && (
  <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '12px' }}>
    <h3 style={{ marginBottom: '15px' }}>🔍 Buscar paciente</h3>

    <label style={{ fontWeight: 'bold' }}>Buscar por historia clínica:</label>
    <input
      placeholder="Ej. HC-00123"
      value={codigoHistoria}
      onChange={e => setCodigoHistoria(e.target.value)}
      style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
    />
    <button onClick={() => buscarPaciente(codigoHistoria)} style={{ marginBottom: '20px' }}>
      Consultar por historia
    </button>

    <hr style={{ margin: '20px 0' }} />

    <label style={{ fontWeight: 'bold' }}>Buscar por cédula o documento:</label>
    <input
      placeholder="Ej. V-12345678"
      value={codigoCedula}
      onChange={e => setCodigoCedula(e.target.value)}
      style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
    />
    <button onClick={() => buscarPacientePorCedula(codigoCedula)}>
      Consultar por documento
    </button>
  </div>
)}

        {vista === 'ficha' && paciente && (
          <div style={{ marginTop: '20px' }}>
            <h3>Ficha del paciente</h3>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }} className="ficha-paciente">
              <p><strong>Edad:</strong> {paciente.edad}</p>
              <p><strong>Sexo:</strong> {paciente.sexo}</p>
              
              <h4>Signos vitales (último registro)</h4>
{paciente.historialSignos && paciente.historialSignos.length > 0 ? (
  <ul>
    <li>Presión arterial: {paciente.historialSignos.at(-1).presion}</li>
    <li>Glucosa: {paciente.historialSignos.at(-1).glucosa}</li>
    <li>Temperatura: {paciente.historialSignos.at(-1).temperatura}</li>
    <li>Saturación de oxígeno: {paciente.historialSignos.at(-1).saturacion}</li>
  </ul>
) : (
  <p>No hay signos vitales registrados aún.</p>
)}
 
           {/* Acciones sugeridas */}
<div style={{ marginTop: '30px' }}>
  <h4>Acciones sugeridas</h4>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }} className="acciones-sugeridas">
    <button onClick={() => alert('Consulta iniciada con el paciente.')}>🩺 Iniciar consulta</button>
    <button onClick={() => alert('Tratamiento sugerido: Enalapril 10mg cada 12h.')}>💊 Sugerir tratamiento</button>
    <button onClick={() => alert('Seguimiento programado para dentro de 48h.')}>📅 Programar seguimiento</button>
    <button onClick={() => alert('Protocolo: Guía rápida para hipertensión disponible.')}>📚 Ver protocolo</button>
    <button onClick={() => alert('Paciente derivado al centro especializado.')}>📤 Derivar paciente</button>
    <button onClick={() => alert('Nota clínica registrada.')}>📝 Añadir nota clínica</button>
  </div>
</div>
</div> 
</div>
)}

{vista === 'escuela' && <EscuelaRomSalud />}
{vista === 'consulta' && <AccedeConsulta />}

{vista === 'signos' && paciente && (
  <div>
    
    <RegistroSignos codigo={paciente.historia} />
  </div>
)}
{vista === 'historial' && paciente?.historialSignos && Array.isArray(paciente.historialSignos) && (
  <div>
    <h4>📋 Historial de signos vitales</h4>

    {/* Filtros por fecha */}
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }} className="contenedor-filtros">
      <div>
        <label>Desde:</label><br />
        <input type="date" value={fechaInicio} onChange={e => setFechaInicio(e.target.value)} />
      </div>
      <div>
        <label>Hasta:</label><br />
        <input type="date" value={fechaFin} onChange={e => setFechaFin(e.target.value)} />
      </div>
      <button onClick={aplicarFiltroPorFechas} style={{ marginTop: '20px' }}>
        Aplicar filtro
      </button>
    </div>

    {/* Lógica de filtrado y paginación */}
    {(() => {
      const registros = (fechaInicio || fechaFin) ? registrosFiltrados : paciente.historialSignos;

      if (!Array.isArray(registros) || registros.length === 0) {
        return <p>No hay registros clínicos en el rango seleccionado.</p>;
      }

      const inicio = (paginaActual - 1) * registrosPorPagina;
      const fin = inicio + registrosPorPagina;
      const registrosPaginados = registros.slice(inicio, fin);
      const totalPaginas = Math.ceil(registros.length / registrosPorPagina);

      return (
        <>
          <ul>
            {registrosPaginados.map((registro, index) => (
              <li key={index}>
                📅 {registro.fecha} — 
                Presión: {registro.presion} mmHg, 
                Glucosa: {registro.glucosa} mg/dL, 
                Temp: {registro.temperatura} °C, 
                Saturación: {registro.saturacion} %
                <button
                  onClick={() => confirmarEliminacion(inicio + index)}
                  style={{
                    marginLeft: '10px',
                    background: 'none',
                    border: 'none',
                    color: '#d9534f',
                    cursor: 'pointer',
                    fontSize: '0.85em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Eliminar</span> <span role="img" aria-label="borrar">🗑️</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Navegación de páginas */}
          {totalPaginas > 1 && (
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}   className="contenedor-paginacion">
              <button
                disabled={paginaActual === 1}
                onClick={() => setPaginaActual(paginaActual - 1)}
              >
                ◀️ Anterior
              </button>
              <span>Página {paginaActual} de {totalPaginas}</span>
              <button
                disabled={paginaActual === totalPaginas}
                onClick={() => setPaginaActual(paginaActual + 1)}
              >
                Siguiente ▶️
              </button>
            </div>
          )}
        </>
      );
    })()}
  </div>
)}

{vista === 'alertas' && paciente && (
  <div>
              <h4>Alertas clínicas</h4>
              {paciente.alertas.length > 0 ? (
                paciente.alertas.map((alerta, index) => (
                  <div key={index} style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
                    <p><strong>Tipo:</strong> {alerta.tipo}</p>
                    <p><strong>Nivel:</strong> {alerta.nivel}</p>
                    <p><strong>Mensaje:</strong> {alerta.mensaje}</p>
                  </div>
                ))
              ) : (
                <p>No hay alertas clínicas registradas.</p>
              )}
               {/* Evaluación predictiva */}
    <div style={{ marginTop: '30px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px' }}>
      <h4>🧠 Evaluación predictiva de riesgo ACV</h4>
      <EvaluacionACV key={claveEvaluacion} resultado={resultadoACV} />

    </div>
              </div>
)}


{vista === 'acciones' && paciente && (
  <div style={{ padding: '20px' }}>
    <h3>🧭 Acciones sugeridas</h3>

    {grupoRiesgo ? (
      <>
        <p>Grupo de riesgo poblacional: <strong>{grupoRiesgo}</strong></p>
        <ul>
          {recomendaciones.map((r, i) => (
            <li key={i}>✅ {r}</li>
          ))}
        </ul>
      </>
    ) : (
      <p>No se han generado recomendaciones aún.</p>
    )}

    <button onClick={obtenerRecomendaciones} style={{ marginTop: '20px' }}>
      🔍 Generar recomendaciones por agrupamiento
    </button>
  </div>
)}
        {vista === 'registrar' && (
  <div className="registro-paciente tarjeta-registro">
    <h2 className="titulo-registro">Registro de nuevo paciente</h2>
    <p className="subtitulo-registro">Completa los datos para iniciar el seguimiento clínico</p>

    <input
      placeholder="Nombre completo"
      value={nuevoPaciente.nombre}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, nombre: e.target.value })}
    />

    <input
      placeholder="Edad"
      value={nuevoPaciente.edad}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, edad: e.target.value })}
    />

    <input
      placeholder="Sexo (M/F)"
      value={nuevoPaciente.sexo}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, sexo: e.target.value })}
    />

    <input
      placeholder="Documento de identidad (Cédula o Pasaporte)"
      value={nuevoPaciente.documento}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, documento: e.target.value })}
    />

    <input
      placeholder="Motivo de consulta"
      value={nuevoPaciente.motivoConsulta}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, motivoConsulta: e.target.value })}
    />

    <textarea
      placeholder="Antecedentes relevantes (Ej. hipertensión, diabetes)"
      value={nuevoPaciente.antecedentes}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, antecedentes: e.target.value })}
      rows={3}
    />

    <select
      value={nuevoPaciente.tipoIngreso}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, tipoIngreso: e.target.value })}
    >
      <option value="">Tipo de ingreso</option>
      <option value="consulta">Consulta</option>
      <option value="emergencia">Emergencia</option>
      <option value="derivacion">Derivación</option>
    </select>

    <input
      placeholder="Contraseña para el paciente"
      value={nuevoPaciente.clave}
      onChange={e => setNuevoPaciente({ ...nuevoPaciente, clave: e.target.value })}
    />

    <button onClick={registrarPaciente} className="boton-registrar">
      Guardar paciente
    </button>
  </div>
)}

      </div>
      {indiceAEliminar !== null && (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    border: '1px solid #ccc',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    zIndex: 1000,
    textAlign: 'center'
  }}>
    <h4 style={{ marginBottom: '15px' }}>¿Eliminar este registro clínico?</h4>
    <p style={{ fontSize: '0.95em', color: '#555' }}>Esta acción no se puede deshacer.</p>
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
      <button
        onClick={() => {
          borrarRegistro(indiceAEliminar);
          setIndiceAEliminar(null);
        }}
        style={{
          backgroundColor: '#d9534f',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Sí, eliminar
      </button>
      <button
        onClick={() => setIndiceAEliminar(null)}
        style={{
          backgroundColor: '#ccc',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Cancelar
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default ProfesionalSalud;