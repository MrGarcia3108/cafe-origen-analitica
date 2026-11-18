const productos = ["Origen Huila 500 g", "Origen Nariño 250 g", "Origen Sierra 500 g", "Prensa francesa", "Molino manual"];
const precios = [42000, 26000, 45000, 95000, 120000];
const ciudades = ["Medellín", "Bogotá", "Cali", "Pereira"];

function azar(maximo) {
  return Math.floor(Math.random() * maximo);
}

function generarVentas(n) {
  const ventas = [];
  const totalClientes = Math.max(1, Math.floor(n / 3));

  for (let i = 1; i <= n; i++) {
    const posicion = azar(productos.length);
    ventas.push({
      id: i,
      fecha: "2026-09-01",
      cliente: "C" + (azar(totalClientes) + 1),
      producto: productos[posicion],
      ciudad: ciudades[azar(ciudades.length)],
      cantidad: azar(5) + 1,
      precio: precios[posicion],
    });
  }
  return ventas;
}

module.exports = { generarVentas };