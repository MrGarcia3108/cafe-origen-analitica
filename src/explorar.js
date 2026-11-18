const ventas = require("./datos");
const a = require("./analitica");

console.log("registros:", ventas.length);
console.log("Primero:", ventas[0]);
console.log("ultimo:", ventas[ventas.length - 1]);
console.log("producto registrado posicion 4:", ventas[4].producto);
console.log(ventas.map(v => `[${v.ciudad}]`).join(", "));
console.table(ventas);


/* const uno = [ventas[0]];
const vacio = [];

const entradas = { completo: ventas, uno: uno, vacio: vacio };

for (const nombre in entradas) {
  const v = entradas[nombre];
  console.log("totalVendido:", a.totalVendido(v));
  console.log("unidadesVendidas:", a.unidadesVendidas(v));
  console.log("ventaMayor:", a.ventaMayor(v));
  console.log("ticketPromedio:", a.ticketPromedio(v));
  console.log("ventasPorCiudad Medellín:", a.ventasPorCiudad(v, "  Medellín "));
} */