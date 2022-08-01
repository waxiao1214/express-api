import { getAllClients } from '../services/clients';
export class ClientsController {
  /**
   * @openapi
   * /clients:
   *   get:
   *     responses:
   *       200:
   *         description: Returns clients.
   */
  static getAll = async (request, response) => {
    try {
      const clients = await getAllClients();
      response.status(200).send(clients);
    } catch (err) {
      response.status(500).send(err);
    }
  };
}