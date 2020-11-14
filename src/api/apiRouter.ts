import express from 'express';

import eventsController from './controllers/events.controller';
import ordersController from './controllers/orders.controller';
import ticketsController from './controllers/tickets.controller';

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

apiRouter.get('/events', eventsController.get)
apiRouter.get('/events/categories/:category', eventsController.getCategory)
apiRouter.get('/events/:id', eventsController.getById)

apiRouter.post('/orders', ordersController.create)

export default apiRouter;
