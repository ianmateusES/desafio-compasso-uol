import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { CreateCustomerController } from '@modules/customers/useCases/createCustomer/CreateCustomerController';
import { DeleteCustomerController } from '@modules/customers/useCases/deleteCustomer/DeleteCustomerController';
import { ListCustomersController } from '@modules/customers/useCases/listCustomers/ListCustomersController';
import { UpdateCustomerController } from '@modules/customers/useCases/updateCustomer/UpdateCustomerController';

const costumersRoutes = Router();
const createCustomerController = new CreateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const updateCustomerController = new UpdateCustomerController();
const listCustomerController = new ListCustomersController();

costumersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      sex: Joi.string().required(),
      birthday: Joi.date().required(),
      city_id: Joi.string().uuid().required(),
    },
  }),
  createCustomerController.handle,
);

costumersRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      city_id: Joi.string().uuid().required(),
    },
  }),
  updateCustomerController.handle,
);

costumersRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteCustomerController.handle,
);

costumersRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
    },
  }),
  listCustomerController.handle,
);

export { costumersRoutes };
