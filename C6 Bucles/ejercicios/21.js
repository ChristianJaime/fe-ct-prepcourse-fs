function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false; // Si no es divisible por 2, no es potencia de 2
    }
    numero /= 2; // Divide el número por 2
  }
  return numero === 1; // Si llegamos a 1, es potencia de 2
}

module.exports = esPotenciaDeDos;
