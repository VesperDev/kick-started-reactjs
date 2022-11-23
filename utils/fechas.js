const fechaPorPais = (fecha = null, local = 'en-MX', timezone = 'America/Mexico_City') => {
  let getFecha = null
  if (fecha === null) {
    getFecha = new Date()
  } else {
    getFecha = new Date(fecha)
  }

  const fechaCorrecta = getFecha.toLocaleString(local, { timeZone: timezone })
  return fechaCorrecta
}

export {
  fechaPorPais
}
