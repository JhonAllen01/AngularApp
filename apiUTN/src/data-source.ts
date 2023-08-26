import "reflect-metadata";
import { DataSource } from "typeorm";
import { Producto } from "./entity/Producto";
import { Cliente } from "./entity/Cliente";
import { Usuario } from "./entity/Usuario";
import { Proveedor } from "./entity/Proveedor";
import { Factura } from "./entity/Factura";
import { Vendedor } from "./entity/Vendedor";
import { DetalleFactura } from "./entity/DetalleFactura";
import { Persona } from "./entity/Persona";
import { Costumer } from "./entity/Costumer";
import { TipoCliente } from "./entity/TipoCliente";
import { Bill } from "./entity/Bill";
import { BillDetail } from "./entity/BillDetail";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "pruebautn",
  synchronize: true,
  logging: false,
  entities: [
    Producto,
    Cliente,
    Usuario,
    Proveedor,
    Factura,
    Vendedor,
    DetalleFactura,
    Persona,
    Costumer,
    TipoCliente,
    Bill,
    BillDetail,
  ],
  migrations: [],
  subscribers: [],
});
