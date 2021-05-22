import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateCityController } from '@modules/cities/useCases/createCity/CreateCityController';
import { ListCitiesController } from '@modules/cities/useCases/listCities/ListCitiesController';
import { UpdateCityController } from '@modules/cities/useCases/updateCity/UpdateCityController';

const citiesRoutes = Router();
const createCityController = new CreateCityController();
const updateCityController = new UpdateCityController();
const listCitiesController = new ListCitiesController();

citiesRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      uf: Joi.string().length(2).required(),
    },
  }),
  createCityController.handle,
);

citiesRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      uf: Joi.string().required(),
    },
  }),
  updateCityController.handle,
);

citiesRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      uf: Joi.string().length(2),
    },
  }),
  listCitiesController.handle,
);

export { citiesRoutes };
