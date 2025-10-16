function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const multiplicarPorSeis = array.map((num) => num * 6)
  return multiplicarPorSeis;
}

module.exports = tablaDelSeis;
