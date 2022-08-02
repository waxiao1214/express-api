import { ClientsController } from "./controllers/clients"
import { ProvidersController } from "./controllers/providers";

export const Routes = (app) => {
  app.get('/clients', ClientsController.getAll);
  app.get('/clients/:id', ClientsController.getOne);
  app.post('/client', ClientsController.create);
  app.put('/clients/:id', ClientsController.update);
  app.delete('/clients/:id', ClientsController.delete);
  app.get('/providers', ProvidersController.getAll);
  app.get('/providers/:id', ProvidersController.getOne);
  app.post('/provider', ProvidersController.create);
  app.put('/providers/:id', ProvidersController.update);
  app.delete('/providers/:id', ProvidersController.delete);
}