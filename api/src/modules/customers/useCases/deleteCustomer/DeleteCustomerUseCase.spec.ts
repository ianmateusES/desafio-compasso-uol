import { CustomersRepositoryInMemory } from '@modules/customers/repositories/in-memory/CustomersRepositoryInMemory';

import { CreateCustomerUseCase } from '../createCustomer/CreateCustomerUseCase';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

let customersRepositoryInMemory: CustomersRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;
let deleteCustomerUseCase: DeleteCustomerUseCase;

describe('Delete Customer', () => {
  beforeEach(() => {
    customersRepositoryInMemory = new CustomersRepositoryInMemory();
    createCustomerUseCase = new CreateCustomerUseCase(
      customersRepositoryInMemory,
    );
    deleteCustomerUseCase = new DeleteCustomerUseCase(
      customersRepositoryInMemory,
    );
  });

  it('should be able to delete customer', async () => {
    const customer = await createCustomerUseCase.execute({
      name: 'Jonh Doe',
      sex: 'masculino',
      birthday: '1998-12-11',
      city_id: '1323456',
    });

    expect(customer).toHaveProperty('id');

    await deleteCustomerUseCase.execute(customer.id);

    expect(await customersRepositoryInMemory.findAll()).toStrictEqual([]);
  });
});
