import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Persona {
  @PrimaryColumn()
  cedula: string;
  @Column({ length: 50 })
  nombre: String;
  @Column()
  apellido: String;
  @Column()
  apellido2: String;
  @Column()
  fechaNac: Date;
}
