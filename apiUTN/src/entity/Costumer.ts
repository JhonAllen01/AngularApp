import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Persona } from "./Persona";
import { TipoCliente } from "./TipoCliente";
import { Bill } from "./Bill";

@Entity()
export class Costumer {
  @PrimaryColumn()
  cedula: String;
  @ManyToOne(() => TipoCliente, (tipocliente) => tipocliente.clientes)
  tipoCliente: TipoCliente;
  @Column()
  fechaIngreso: Date;

  @OneToOne(() => Persona, { cascade: ["insert", "update"] })
  @JoinColumn({ name: "cedula" })
  persona: Persona;

  @OneToMany(() => Bill, (bill) => bill.cliente)
  facturas: Bill[];
}
