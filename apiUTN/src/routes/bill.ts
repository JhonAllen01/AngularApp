import { Router } from "express";
import BillController from "../controller/BillController";

const routes = Router();

routes.get("", BillController.getAll);

export default routes;
