import { Router } from 'express';

import { CreateCityController } from '@modules/cities/useCases/createCity/CreateCityController';
import { ListCitiesController } from '@modules/cities/useCases/listCities/ListCitiesController';
import { UpdateCityController } from '@modules/cities/useCases/updateCity/UpdateCityController';

import {
  postCityValidation,
  putCityValidation,
  getCityValidation,
} from '../validations/validationsRoutes';

const citiesRoutes = Router();
const createCityController = new CreateCityController();
const updateCityController = new UpdateCityController();
const listCitiesController = new ListCitiesController();

citiesRoutes.post('/', postCityValidation, createCityController.handle);

citiesRoutes.put('/:id', putCityValidation, updateCityController.handle);

citiesRoutes.get('/', getCityValidation, listCitiesController.handle);

export { citiesRoutes };
