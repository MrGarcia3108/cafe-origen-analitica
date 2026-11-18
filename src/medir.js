const datos = require("./datos");
const { generarVentas } = require("./generador");
const { totalVendidoC, ventaMayorC, totalPorCiudadC, primeraVenta } = require("./instrumentadas");
const { clientesRecurrentes } = require("./recurrentes");

function medir(funcion, ventas) {
  const contador = { operaciones: 0 };
  funcion(ventas, contador);
  return contador.operaciones;
}

const tamanos = [100, 1000, 10000, 100000];
const tabla = [];

for (const n of tamanos) {
  const ventas = generarVentas(n);
  tabla.push({
    n: n,
    totalVendido: medir(totalVendidoC, ventas),
    ventaMayor: medir(ventaMayorC, ventas),
    totalPorCiudad: medir(totalPorCiudadC, ventas),
    primeraVenta: medir(primeraVenta, ventas),
  });
}

console.table(tabla);

console.log(clientesRecurrentes(datos));

const tamanosTiempo = [1000, 2000, 4000, 8000, 16000, 100000];

for (const n of tamanosTiempo) {
  const ventas = generarVentas(n);
  console.time("n = " + n);
  clientesRecurrentes(ventas);
  console.timeEnd("n = " + n);
}