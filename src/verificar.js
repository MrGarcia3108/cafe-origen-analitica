const ventas = require("./datos");
const a = require("./analitica");

function comparar(nombre, conCiclo, conMetodos) {
  console.log(nombre, conCiclo === conMetodos ? "OK" : "DIFERENTE");
}

comparar("totalVendido:", a.totalVendido(ventas), a.totalVendidoM(ventas));
comparar("unidadesVendidas:", a.unidadesVendidas(ventas), a.unidadesVendidasM(ventas));
comparar("ventasPorCiudad:", a.ventasPorCiudad(ventas, "Medellín"), a.ventasPorCiudadM(ventas, "Medellín"));