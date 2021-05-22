import { Router } from 'express';

import { citiesRoutes } from '@modules/cities/infra/http/routes/cities.routes';
import { costumersRoutes } from '@modules/customers/infra/http/routes/customers.routes';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ mensage: 'Air application' });
});

routes.use('/cities', citiesRoutes);
routes.use('/customers', costumersRoutes);

export { routes };
