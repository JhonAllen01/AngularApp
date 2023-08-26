import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Costumer } from "./Costumer";
import { BillDetail } from "./BillDetail";

@Entity()
export class Bill {
  @PrimaryColumn()
  id: number;
  @Column()
  fecha: Date;
  @Column()
  idCliente: String;
  @ManyToOne(() => Costumer, (costumer) => costumer.facturas)
  @JoinColumn({ name: "idCliente" })
  cliente: Costumer;

  @OneToMany(() => BillDetail, (billdetail) => billdetail.factura, {
    cascade: ["insert", "update"],
  })
  detallesFactura: BillDetail[];

  @Column({ default: true })
  estado: boolean;
}
