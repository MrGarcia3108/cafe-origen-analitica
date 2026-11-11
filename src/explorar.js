const ventas = require("./datos");

console.log("registros:", ventas.length);
console.log("Primero:", ventas[0]);
console.log("ultimo:", ventas[ventas.length - 1]);
console.log("producto registrado posicion 4:", ventas[4].producto);
console.log(ventas.map(v => `[${v.ciudad}]`).join(", "));
console.table(ventas);
