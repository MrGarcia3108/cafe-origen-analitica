const { generarVentas } = require("./generador");

function totalVendidoC(ventas, contador) {
  let total = 0;
  for (const v of ventas) {
    contador.operaciones++;
    total += v.cantidad * v.precio;
  }
  return total;
}

function ventaMayorC(ventas, contador) {
  if (ventas.length === 0) return null;
  let mayor = ventas[0];
  for (const v of ventas) {
    contador.operaciones++;
    contador.operaciones++;
    if (v.cantidad * v.precio > mayor.cantidad * mayor.precio) mayor = v;
  }
  return mayor;
}

function totalPorCiudadC(ventas, contador) {
  const totales = {};
  for (const v of ventas) {
    contador.operaciones++;
    const ciudad = v.ciudad.trim().toLowerCase();
    contador.operaciones++;
    if (totales[ciudad] === undefined) totales[ciudad] = 0;
    totales[ciudad] += v.cantidad * v.precio;
  }
  return totales;
}

function primeraVenta(ventas, contador) {
  contador.operaciones++;
  return ventas[0];
}

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