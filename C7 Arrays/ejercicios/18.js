function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const suma = resultadosTest.reduce((a, v) => a + v, 0);
  return resultadosTest.length === 0 ? 0 : suma / resultadosTest.length;
}

module.exports = promedioResultadosTest;
