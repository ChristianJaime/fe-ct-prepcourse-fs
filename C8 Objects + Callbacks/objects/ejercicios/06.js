const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  const cantidadPropiedades = Object.keys(objeto).length;
  return cantidadPropiedades;
};

module.exports = contarPropiedades;
