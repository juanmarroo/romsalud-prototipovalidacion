export async function predecirACV(datos) {
  try {
    const response = await fetch('http://127.0.0.1:8000/predecir_acv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    const resultado = await response.json();
    return resultado;
  } catch (error) {
    console.error("Error al conectar con el modelo:", error);
    return { probabilidad: null, riesgo: "Error" };
  }
}

export async function clasificarRiesgo(datos) {
  const response = await fetch('http://127.0.0.1:8000/clasificar_riesgo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return await response.json();
}