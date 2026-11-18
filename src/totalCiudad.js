const { generarVentas } = require("./generador");

function totalCiudadCadena(ventas, ciudad) {
  const buscada = ciudad.trim().toLowerCase();
  return ventas
    .map((v) => ({ ...v, ciudad: v.ciudad.trim().toLowerCase() }))
    .filter((v) => v.ciudad === buscada)
    .map((v) => v.cantidad * v.precio)
    .reduce((acumulado, valor) => acumulado + valor, 0);
}

function totalCiudadUnaPasada(ventas, ciudad) {
  const buscada = ciudad.trim().toLowerCase();
  let total = 0;
  for (const v of ventas) {
    if (v.ciudad.trim().toLowerCase() === buscada) total += v.cantidad * v.precio;
  }
  return total;
}

module.exports = {
  totalCiudadCadena,
  totalCiudadUnaPasada,
};

// Comprobacion con 10.000 ventas
const ventas = generarVentas(10000);
const a = totalCiudadCadena(ventas, "Medellín");
const b = totalCiudadUnaPasada(ventas, "Medellín");
console.log("Cadena:", a);
console.log("Una pasada:", b);
console.log(a === b ? "OK" : "DIFERENTE");