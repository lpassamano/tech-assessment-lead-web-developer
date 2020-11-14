import express from 'express';
import ticketsController from './controllers/tickets.controller'

const apiRouter = express.Router();

/** TODO:
 * Implement routing the API calls to the appropriate handler for serving your requests
 *
 * You may structure and implement this anyway you'd like, both code-wise and in terms of
 * the structure of your directory.
 *
 */

apiRouter.get('/tickets', ticketsController.get)
apiRouter.get('/tickets/:id', ticketsController.getById)

export default apiRouter;
