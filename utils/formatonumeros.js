const moneda = (numero) => {
  return new Intl.NumberFormat('ES-MX', { style: 'currency', currency: 'MXN' }).format(numero)
}

export {
  moneda
}
