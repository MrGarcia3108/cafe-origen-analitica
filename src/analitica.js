const ventas = require("./datos");

const valorVenta = (venta) => venta.cantidad * venta.precio;

function totalVendido(ventas) {
  let total = 0;
  for (const v of ventas) total += valorVenta(v);
  return total;
}

function unidadesVendidas(ventas) {
  let unidades = 0;
  for (const v of ventas) unidades += v.cantidad;
  return unidades;
}

function ventaMayor(ventas) {
  if (ventas.length === 0) return null;
  let mayor = ventas[0];
  for (const v of ventas) if (valorVenta(v) > valorVenta(mayor)) mayor = v;
  return mayor;
}

function ticketPromedio(ventas) {
  let total = 0;
  let validas = 0;
  for (const v of ventas) {
    if (v.cantidad > 0) {
      total += valorVenta(v);
      validas++;
    }
  }
  return validas === 0 ? 0 : total / validas;
}

function ventasPorCiudad(ventas, ciudad) {
  const buscada = ciudad.trim().toLowerCase();
  let total = 0;
  for (const v of ventas) if (v.ciudad.trim().toLowerCase() === buscada) total += valorVenta(v);
  return total;
}


function totalVendidoM(ventas) {
  return ventas
    .map((v) => valorVenta(v))
    .reduce((acumulado, valor) => acumulado + valor, 0);
}

function unidadesVendidasM(ventas) {
  return ventas
    .map((v) => v.cantidad)
    .reduce((acumulado, cantidad) => acumulado + cantidad, 0);
}

function ventasPorCiudadM(ventas, ciudad) {
  const buscada = ciudad.trim().toLowerCase();
  return ventas
    .filter((v) => v.ciudad.trim().toLowerCase() === buscada)
    .map((v) => valorVenta(v))
    .reduce((acumulado, valor) => acumulado + valor, 0);
}

function totalPorCiudad(ventas) {
  const totales = {};
  for (const v of ventas) {
    const ciudad = v.ciudad.trim().toLowerCase();
    if (totales[ciudad] === undefined) totales[ciudad] = 0;
    totales[ciudad] += valorVenta(v);
  }
  return totales;
}

function unidadesPorProducto(ventas) {
  const unidades = {};
  for (const v of ventas) {
    if (unidades[v.producto] === undefined) unidades[v.producto] = 0;
    unidades[v.producto] += v.cantidad;
  }
  return unidades;
}

function topProductosPorValor(ventas, k) {
  const valores = {};
  for (const v of ventas) {
    if (valores[v.producto] === undefined) valores[v.producto] = 0;
    valores[v.producto] += valorVenta(v);
  }
  const lista = [...Object.entries(valores)];
  lista.sort((a, b) => b[1] - a[1]);
  return lista.slice(0, k);
}

console.log(totalVendido(ventas), unidadesVendidas(ventas), ventaMayor(ventas).id);
console.log(Math.round(ticketPromedio(ventas)), ventasPorCiudad(ventas, "medellín"));

module.exports = {
  valorVenta,
  totalVendido,
  unidadesVendidas,
  ventaMayor,
  ticketPromedio,
  ventasPorCiudad,
  totalVendidoM,
  unidadesVendidasM,
  ventasPorCiudadM,
  totalPorCiudad,
  unidadesPorProducto,
  topProductosPorValor,
};