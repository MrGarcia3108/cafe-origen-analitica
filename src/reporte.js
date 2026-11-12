const ventas = require("./datos");
const a = require("./analitica");

const pesos = (n) => "$ " + n.toLocaleString("es-CO");

function linea(etiqueta, valor) {
  return etiqueta.padEnd(26) + valor.padStart(14);
}

console.log("REPORTE DE VENTAS");

console.log("\nResumen");
const mayor = a.ventaMayor(ventas);
console.log(linea("Registros:", String(ventas.length)));
console.log(linea("Unidades vendidas:", String(a.unidadesVendidas(ventas))));
console.log(linea("Total vendido:", pesos(a.totalVendido(ventas))));
console.log(linea("Ticket promedio:", pesos(Math.round(a.ticketPromedio(ventas)))));
console.log(linea("Venta mayor (id " + mayor.id + "):", pesos(a.valorVenta(mayor))));

console.log("\nVentas por ciudad ");
const porCiudad = a.totalPorCiudad(ventas);
for (const [ciudad, total] of Object.entries(porCiudad)) {
  console.log(linea(ciudad, pesos(total)));
}

console.log("\nUnidades");
const porProducto = a.unidadesPorProducto(ventas);
for (const [producto, unidades] of Object.entries(porProducto)) {
  console.log(linea(producto, unidades + " und"));
}

console.log("\nTop 3");
const top = a.topProductosPorValor(ventas, 3);
for (let i = 0; i < top.length; i++) {
  console.log(linea((i + 1) + ". " + top[i][0], pesos(top[i][1])));
}

console.log("\ndia");
function formatearDia(d) {
  return {
    fecha: d.fecha,
    registros: d.registros,
    total: pesos(d.total),
    ticket: pesos(Math.round(d.ticket)),
  };
}
console.table([
  formatearDia(a.ventasDelDia(ventas, "2026-09-01")),
  formatearDia(a.ventasDelDia(ventas, "2026-09-10")),
]);