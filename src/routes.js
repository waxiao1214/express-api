import { ClientsController } from "./controllers/clients"

export const Routes = (app) => {
  app.get('/clients', ClientsController.getAll);
}