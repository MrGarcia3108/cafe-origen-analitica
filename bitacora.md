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
