import React from 'react';
import { useParams } from 'react-router-dom';
import { getPacientes } from './pacientesData';

function HistorialSignos() {
  const { codigo } = useParams();
  const paciente = getPacientes()[codigo];

  const [fechaInicio, setFechaInicio] = React.useState('');
  const [fechaFin, setFechaFin] = React.useState('');
  const [paginaActual, setPaginaActual] = React.useState(1);
  const registrosPorPagina = 10;
  const [registrosFiltrados, setRegistrosFiltrados] = React.useState([]);

  const aplicarFiltroPorFechas = () => {
    if (!paciente?.historialSignos) return;

    const desde = fechaInicio ? new Date(fechaInicio) : null;
    const hasta = fechaFin ? new Date(fechaFin) : null;

    const filtrados = paciente.historialSignos.filter(registro => {
      if (!registro?.fecha) return false;

      const fechaTexto = registro.fecha.split(',')[0].trim(); // Ej: "2/10/2025"
      const [dia, mes, año] = fechaTexto.split('/');
      const fechaRegistro = new Date(`${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`);

      return (!desde || fechaRegistro >= desde) && (!hasta || fechaRegistro <= hasta);
    });

    setRegistrosFiltrados(filtrados);
    setPaginaActual(1);
  };

  if (!paciente) return <p>Paciente no encontrado</p>;

  return (
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <div style={cardStyle()}>
        <h3>📊 Historial de signos vitales</h3>

        {/* Filtros por fecha */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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

        {/* Renderizado paginado */}
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
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid #ccc' }}>Fecha</th>
                    <th style={{ borderBottom: '1px solid #ccc' }}>Presión</th>
                    <th style={{ borderBottom: '1px solid #ccc' }}>Glucosa</th>
                    <th style={{ borderBottom: '1px solid #ccc' }}>Temperatura</th>
                    <th style={{ borderBottom: '1px solid #ccc' }}>Saturación</th>
                  </tr>
                </thead>
                <tbody>
                  {registrosPaginados.map((registro, index) => (
                    <tr key={index}>
                      <td>{registro.fecha}</td>
                      <td>{registro.presion}</td>
                      <td>{registro.glucosa}</td>
                      <td>{registro.temperatura}</td>
                      <td>{registro.saturacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Navegación de páginas */}
              {totalPaginas > 1 && (
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
    </div>
  );
}

// Estilo reutilizable
const cardStyle = (bg = '#fff') => ({
  backgroundColor: bg,
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  padding: '20px',
  marginBottom: '20px'
});

export default HistorialSignos;