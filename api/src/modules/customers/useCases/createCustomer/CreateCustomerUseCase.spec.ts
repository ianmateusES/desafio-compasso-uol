import { CustomersRepositoryInMemory } from '@modules/customers/repositories/in-memory/CustomersRepositoryInMemory';

import { CreateCustomerUseCase } from './CreateCustomerUseCase';

let customersRepositoryInMemory: CustomersRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;

describe('Create Custumer', () => {
  beforeEach(() => {
    customersRepositoryInMemory = new CustomersRepositoryInMemory();
    createCustomerUseCase = new CreateCustomerUseCase(
      customersRepositoryInMemory,
    );
  });

  it('should be able to create custumer', async () => {
    const custumer = await createCustomerUseCase.execute({
      name: 'Jonh Doe',
      sex: 'masculino',
      birthday: '1998-12-11',
      city_id: '1323456',
    });

    expect(custumer).toHaveProperty('id');
  });
});
