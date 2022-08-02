import { 
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
 } from '../services/clients';
 
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

  /**
   * @openapi
   * /clients/{id}:
   *   get:
   *      parameters:
   *      - name: id
   *        in: path
   *        schema:
   *          type: string
   *        required: true
   *      responses:
   *        200:
   *          description: Returns client by id.
   */
  static getOne = async (request, response) => {
    try {
      const clientId = request.params.id;
      const client = await getClientById(clientId);
      response.status(200).send(client);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @openapi
   * /client:
   *    post:
   *      consumes:
   *        - application/json
   *      parameters:
   *        - in: body
   *          name: client
   *          required: true
   *          schema:
   *            type: object
   *            properties:
   *              email:
   *                type: string
   *              name:
   *                type: string
   *              phone_number:
   *                type: string
   *              providers:
   *                type: array
   *                items:
   *                  type: string
   *      responses:
   *        201:
   *          description: Create a new client
   */
  static create = async (request, response) => {
    try {
      const data = request.body;
      const client = await createClient(data);
      response.status(201).send(client);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @openapi
   * /clients/{id}:
   *    put:
   *      parameters:
   *        - name: id
   *          in: path
   *          schema:
   *            type: string
   *          required: true
   *        - name: body
   *          description: update client data
   *          in: body
   *          required: true
   *          schema:
   *            type: object
   *      responses:
   *        200:
   *          description: Update a client.
   */
  static update = async (request, response) => {
    try {
      const id = request.params.id;
      const data = request.body;
      const client = await updateClient(id, data);
      response.status(200).send(client);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @openapi
   * /clients/{id}:
   *    delete:
   *      parameters:
   *        - name: id
   *          in: path
   *          schema:
   *            type: string
   *          required: true
   *      responses:
   *        204:
   *          description: Delete a client.
   */
  static delete = async (request, response) => {
    try {
      await deleteClient(id);
      response.status(200).send('client is successfully deleted!');
    } catch (error) {
      response.status(500).send(error);
    }
  }
}