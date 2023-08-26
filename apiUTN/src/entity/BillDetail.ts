import {
  Code,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Bill } from "./Bill";
import { Producto } from "./Producto";

@Entity()
export class BillDetail {
  @Column({ primary: true })
  idFactura: number;
  @Column({ primary: true })
  idProducto: number;
  @Column()
  cant: number;

  @ManyToOne(() => Bill, (bill) => bill.detallesFactura)
  @JoinColumn({ name: "idFactura" })
  factura: Bill;

  @ManyToOne(() => Producto, (producto) => producto.detallesFactura)
  @JoinColumn({ name: "idProducto" })
  producto: Producto;
}
