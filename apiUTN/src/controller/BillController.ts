import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Factura } from "../entity/Factura";
import { Bill } from "../entity/Bill";

export class BillController {
  static getAll = async (req: Request, res: Response) => {
    try {
      const repoFact = AppDataSource.getRepository(Bill);
      let lista;
      try {
        lista = await repoFact.find({
          where: { estado: true },
          relations: {
            detallesFactura: { producto: true },
            cliente: { persona: true },
          },
        });
      } catch (error) {
        return res.status(404).json({ mensaje: "no se encontraron datos" });
      }
      if (lista.length == 0) {
        return res.status(404).json({ mensaje: "no se encontraron datos" });
      }
      return res.status(200).json(lista);
    } catch (error) {
      return res.status(400).json({ mensaje: "ERROR AL CARGAR DATOS" });
    }
  };

  static getById = async (req: Request, res: Response) => {};

  static add = async (req: Request, res: Response) => {};

  static update = async (req: Request, res: Response) => {};
}

export default BillController;
