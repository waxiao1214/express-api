import {
  getAllProviders,
  getProviderById,
  createProvider,
  updateProvider,
  deleteProvider
} from '../services/providers'

export class ProvidersController {

  /**
   * @openapi
   * /providers:
   *    get:
   *      response:
   *        200:
   *          description: Returns all providers.
   */
  static getAll = async (request, response) => {
    try {
      const providers = await getAllProviders();
      response.status(200).send(providers);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @openapi
   * /providers/{id}:
   *    get:
   *      parameters:
   *        - name: id
   *          in: path
   *          schema:
   *            type: string
   *          required: true
   *      responses:
   *        200:
   *          description: Returns one Provider with Id
   */

  static getOne = async (request, response) => {
    try {
      const id = request.params.id;
      const provider = await getProviderById(id);
      response.status(200).send(provider);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @openapi
   * /provider:
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
   *              name:
   *                type: string
   *      responses:
   *        201:
   *          description: Create a new client
   */
  static create = async (request, response) => {
    try {
      const data = request.body;
      const provider = await createProvider(data);
      response.status(200).send(provider);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @openapi
   * /providers/{id}:
   *    put:
   *      parameters:
   *        - name: id
   *          in: path
   *          schema:
   *            type: string
   *          required: true
   *        - name: body
   *          in: body
   *          required: true
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *      responses:
   *        200:
   *          description: Update a provider.
   */
  static update = async (request, response) => {
    try {
      const id = request.params.id;
      const data = request.body;
      const provider = await updateProvider(id, data);
      response.status(200).send(provider);
    } catch (error) {
      response.status(500).send(error);
    }
  }

  /**
   * @openapi
   * /provider/{id}:
   *    delete:
   *      parameters:
   *        - name: id
   *          in: pah
   *          schema:
   *            type: string
   *          required: true
   *      response:
   *        204:
   *        description: Delete a provider.
   */
  static delete = async (request, response) => {
    try {
      const id = request.params.id;
      await deleteProvider(id);
      response.status(200).send('client is successfully deleted!');
    } catch (error) {
      response.status(500).send(error);
    }
  }
}