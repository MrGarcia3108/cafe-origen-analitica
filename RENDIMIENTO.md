# Rendimiento

| Funcion | Que hace | Tiempo | Espacio | Justificacion | Con 10.000 ventas |
|---|---|---|---|---|---|
| valorVenta | Multiplica cantidad por precio de una venta | O(1) | O(1) | Una sola multiplicacion| 1 operacion |
| totalVendido | Suma el valor de todas las ventas | O(n) | O(1) | solo usa la variable total | 10.000 operaciones |
| unidadesVendidas | Suma todas las ventas | O(n) | O(1) | solo usa la variable unidades | 10.000 operaciones |
| ventaMayor | Devuelve la venta de mayor valor | O(n) | O(1) | compara en cada vuelta | 20.000 operaciones |
| ticketPromedio | Valor ventas validas | O(n) | O(1) | solo usa dos variables | 10.000 operaciones |
| ventasPorCiudad | Total vendido en una ciudad | O(n) | O(1) | solo usa la variable total | 10.000 operaciones |
| totalVendidoM | Con map y reduce | O(n) | O(n) | map crea un arreglo y reduce lo recorre | 2 recorridos |
| unidadesVendidasM | Con map y reduce | O(n) | O(n) | map crea un arreglo y reduce lo recorre | 2 recorridos |
| ventasPorCiudadM | Con filter, map y reduce | O(n) | O(n) | filter recorre y crea un arreglo, map y reduce recorren el arreglo | 3 recorridos |
| totalPorCiudad | Por cada ciudad | O(n) | O(k) | el objeto tiene una clave por ciudad distinta | 20.000 operaciones |
| unidadesPorProducto | Por cada producto | O(n) | O(p) | el objeto tiene una clave por producto | 10.000 operaciones |
| topProductosPorValor | Los productos que mas dinero generan | O(n + p log p) | O(p) | para agrupar y un sort las listas de Object.entries, la copia ... y slice | 10.000 operaciones |
| ventasDelDia | Resumen de un dia | O(n) | O(n) | filtrar, y luego totalVendido y ticketPromedio | 3 recorridos |
| clientesRecurrentes | Clientes que compraron mas de una vez | O(n^2) | O(c) | Ciclos anidados que comparan cada venta, |  |
| totalCiudadCadena | Con map, filter, map y reduce | O(n) | O(n) | Hace recorridos y crea arreglos | 4 recorridos, 3 arreglos |
| totalCiudadUnaPasada | Total de una ciudad | O(n) | O(1) | y solo la variable total | 10.000 operaciones |

Tiempo medido de clientesRecurrentes: n = 16.000 tardo 624,78 ms en una nueva ejecucion.

## Proyeccion

- Estimacion para 100.000 de ventas: 100.000 = 924.78 ms x 39.06 = 36.121 ms = 36.1 seg

- Estimacion para 1.000.000 de ventas: 1.000.000 = 924.78 ms x 3906.25 = 3.612.421,87 = 60,2 min 

## Riesgos

1. **clientesRecurrentes:** es O(n^2). Si n se duplica, el tiempo se cuadruplica, y con 1.000.000 de ventas tardaria una hora..
2. **topProductosPorValor:** recorre las ventas y ademas ordena la lista.
3. **totalCiudadCadena, ventasPorCiudadM, totalVendidoM, unidadesVendidasM y ventasDelDia:** su tiempo es O(n), pero su memoria tambien es O(n).
4. **totalPorCiudad y unidadesPorProducto:** son O(n) en tiempo y su memoria depende de cuantas ciudades o productos hay.
5. **Funciones O(n) en tiempo y O(1)** (totalVendido, unidadesVendidas, ventaMayor, ticketPromedio, ventasPorCiudad, totalCiudadUnaPasada): crecen en linea recta.
6. **valorVenta:** O(1), sin riesgo.

## Plan de optimizacion

- Cada venta se compara con todas las ventas que vienen despues, aunque ya se sepa que ese cliente es recurrente.