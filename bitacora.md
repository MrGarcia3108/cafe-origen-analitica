# Bitacora

## Reto 1: configuracion y exploracion

### Diccionario de datos

| Propiedad | Tipo | Significado |
|---|---|---|
| id | number | Numero unico de la venta |
| fecha | string | Fecha de la venta |
| cliente | string | Codigo del cliente |
| producto | string | Nombre del producto vendido |
| ciudad | string | Ciudad donde se hizo la venta |
| cantidad | number | Unidades vendidas |
| precio | number | Precio por unidad en pesos |

### Casos borde detectados

1. **Ciudad escrita distinto:** la venta 5 tiene "medellin" en minuscula y las demas "Medellin".
2. **Cantidad en 0:** la venta 8 tiene cantidad 0.
3. **Clientes repetidos:** C01 aparece 3 veces.

## Reto 2: indicadores con ciclos

### Pseudocodigo

**valorVenta:** devuelvo cantidad × precio de la venta.

**totalVendido:** inicio total en 0.

**unidadesVendidas:** inicio unidades en 0.

**ventaMayor:** si el arreglo esta vacio devuelvo null.

**ticketPromedio:** inicio total en 0 y validas en 0.

**ventasPorCiudad:** la ciudad buscada con trim y toLowerCase.

## Reto 3: ciclo vs metodos

### totalVendidoM
- Recorro: todas las ventas.
- Filtro: nada.
- Transformo: valor con map.
- Acumulo: iniciando en 0.
- Agrupo: no agrupo.

### unidadesVendidasM
- Recorro: todas las ventas.
- Filtro: nada.
- Transformo: cada venta en su cantidad con map.
- Acumulo: iniciando en 0.
- Agrupo: no agrupo.

### ventasPorCiudadM
- Recorro: todas las ventas.
- Filtro: las de la ciudad buscada.
- Transformo: venta valor con map.
- Acumulo: iniciando en 0.
- Agrupo: no agrupo.

### totalPorCiudad
- Recorro: todas las ventas.
- Filtro: nada.
- Transformo: con trim y toLowerCase, "Bogota" y "Bogota ".
- Acumulo: el valor de cada venta.
- Agrupo: la clave es la ciudad.

### unidadesPorProducto
- Recorro: todas las ventas.
- Filtro: nada.
- Transformo: nada.
- Acumulo: la cantidad de cada venta en las unidades de su producto.
- Agrupo: con un objeto donde la clave es el producto.

### topProductosPorValor
- Recorro: todas las ventas.
- Filtro: con slice.
- Transformo: nada.
- Acumulo: el valor de cada venta.
- Agrupo: con un objeto por producto.

## Reto 4: depuracion de errores reportados

### Error 1: Bogota aparece dos veces

- **Error:** Bogota salia como dos grupos distintos.
- **Entrada:** ventas con ciudad "Bogota" y "Bogota ".
- **Correccion:** en totalPorCiudad uso trim() y toLowerCase() antes de usar la ciudad como clave.

### Error 2: NaN en un dia sin ventas

- **Error:** al filtrar un dia sin ventas daba NaN.
- **Entrada:** un arreglo vacio, por ejemplo las ventas del 2026-09-10.
- **Correccion:** en ticketPromedio, si validas es 0 devuelvo 0.

## Reto 5: generador de datos

### Prediccion

Si n se multiplica por 10:
- totalVendido: las operaciones se multiplican por 10.
- ventaMayor: se multiplican por 10.
- totalPorCiudad: se multiplican por 10.
- primeraVenta: no cambia.

### Resultados

| n | totalVendido | ventaMayor | totalPorCiudad | primeraVenta |
|---|---|---|---|---|
| 100 | 100 | 200 | 200 | 1 |
| 1000 | 1000 | 2000 | 2000 | 1 |
| 10000 | 10000 | 20000 | 20000 | 1 |
| 100000 | 100000 | 200000 | 200000 | 1 |

### Comparacion

Mi prediccion se cumplio. Cuando n crece 10 veces, las tres funciones lineales hacen 10 veces mas operaciones. primeraVenta siempre hace 1.

### Clasificacion Big O

- **totalVendido: O(n).** Tiene un solo ciclo que recorre todas las ventas.
- **ventaMayor: O(n).** Tiene un solo ciclo.
- **totalPorCiudad: O(n).** Tiene un solo ciclo y en cada vuelta hace siempre lo mismo.
- **primeraVenta: O(1).** Solo mira la posicion 0.

## Reto 6: ciclos anidados

### Tiempos medidos

| n | Tiempo (ms) |
|---|---|
| 1.000 | 5.435 ms |
| 2.000 | 14.056 ms |
| 4.000 | 49.17 ms |
| 8.000 | 253.287 ms |
| 16.000 | 924.78 ms |

### Estimacion

Cuando n se duplica, el tiempo se multiplica.

Con el tiempo de n = 16.000 (924.78 ms):

Utilizamos los ms de 16000 y dividimos 100000/16000 y el resultado los elevamos a la dos: 39.06

100.000 = 924.78 ms x 39.06 = 36.121 ms = 36.1 seg
1.000.000 = 924.78 ms x 3906.25 = 3.612.421,87 = 60,2 min 

Medicion real con 100.000: 48.968s ms.

### Costo oculto

Revisa los elementos de recurrentes uno por uno hasta encontrar el cliente.

En el peor caso, recurrentes crece mucho y cada includes tiene que recorrer una lista larga.

### Conclusion

El reporte se vuelve lento porque, para saber que clientes repiten compra, el programa compara cada venta con todas las demas.

## Reto 7: Espacial

### Recorridos

| Version | Recorridos completos | Arreglos nuevos |
|---|---|---|---|---|
| totalCiudadCadena | 4 (map, filter, map, reduce) | 3 (los de map, filter y map) |
| totalCiudadUnaPasada | 1 (un for...of) | 0 |

### Por que ambas son O(n) en tiempo

La cadena recorre el arreglo cuatro veces. Una pasada hace unas n operaciones. En las reglas de simplificacion se eliminan las constantes. En las dos versiones, si n se duplica, el tiempo se duplica.

### Complejidad espacial de las funciones del motor

**O(1): memoria adicional constante**
- valorVenta, totalVendido, unidadesVendidas, ventaMayor, ticketPromedio, ventasPorCiudad, totalCiudadUnaPasada. Solo usan variables sueltas, sin crear arreglos ni objetos.

**O(n): memoria proporcional a los datos**
- totalVendidoM, unidadesVendidasM, ventasPorCiudadM, totalCiudadCadena: map y filter crean arreglos nuevos del tamano de los datos.
- ventasDelDia, clientesRecurrentes: el arreglo donde guardan resultados puede llegar a tener n elementos.

### Decision: que version dejo en el motor

Dejo totalCiudadUnaPasada: Recorre las ventas una sola vez y no crea arreglos nuevos. La version de una pasada tiene solo un ciclo y un if.
