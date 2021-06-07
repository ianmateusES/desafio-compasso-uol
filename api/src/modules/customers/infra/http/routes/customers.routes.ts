import { Router } from 'express';

import { CreateCustomerController } from '@modules/customers/useCases/createCustomer/CreateCustomerController';
import { DeleteCustomerController } from '@modules/customers/useCases/deleteCustomer/DeleteCustomerController';
import { ListCustomersController } from '@modules/customers/useCases/listCustomers/ListCustomersController';
import { UpdateCustomerController } from '@modules/customers/useCases/updateCustomer/UpdateCustomerController';

import {
  postCustomerValidation,
  putCustomerValidation,
  deleteCustomerValidation,
  getCustomerValidation,
} from '../validations/validationsRoutes';

const costumersRoutes = Router();
const createCustomerController = new CreateCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const updateCustomerController = new UpdateCustomerController();
const listCustomerController = new ListCustomersController();

costumersRoutes.post(
  '/',
  postCustomerValidation,
  createCustomerController.handle,
);

costumersRoutes.put(
  '/:id',
  putCustomerValidation,
  updateCustomerController.handle,
);

costumersRoutes.delete(
  '/:id',
  deleteCustomerValidation,
  deleteCustomerController.handle,
);

costumersRoutes.get('/', getCustomerValidation, listCustomerController.handle);

export { costumersRoutes };
