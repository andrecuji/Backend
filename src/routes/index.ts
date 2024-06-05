import { ClienteRoutes } from './cliente';

import { VentaRoutes } from './venta';

import { TipoproductoRoutes } from './tipoproducto';

import { ProductoRoutes } from './producto';

import { Producto_ventaRoutes } from './producto_venta';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();

    public ventaRoutes: VentaRoutes = new VentaRoutes();

    public tipoproductoRoutes: TipoproductoRoutes = new TipoproductoRoutes();

    public productoRoutes: ProductoRoutes = new ProductoRoutes();

    public producto_ventaRoutes: Producto_ventaRoutes = new Producto_ventaRoutes();
}



