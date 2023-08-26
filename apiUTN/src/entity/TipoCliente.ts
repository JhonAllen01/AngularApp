import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Costumer } from "./Costumer";

@Entity()
export class TipoCliente {
  @PrimaryColumn()
  id: String;
  @Column()
  nombre: String;
  @Column()
  estado: Boolean;

  @OneToMany(() => Costumer, (costumer) => costumer.tipoCliente)
  clientes: Costumer[];
}
