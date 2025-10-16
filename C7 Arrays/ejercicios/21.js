function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const newArray = array.filter(
    (mes) => mes === "Enero" || mes === "Marzo" || mes === "Noviembre"
  );
  return newArray.length === 3
    ? newArray
    : "No se encontraron los meses pedidos"; 
}

module.exports = mesesDelAño;
