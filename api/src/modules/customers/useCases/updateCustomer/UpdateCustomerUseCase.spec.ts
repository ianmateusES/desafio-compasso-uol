import { CustomersRepositoryInMemory } from '@modules/customers/repositories/in-memory/CustomersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCustomerUseCase } from '../createCustomer/CreateCustomerUseCase';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

let customersRepositoryInMemory: CustomersRepositoryInMemory;
let createCustomerUseCase: CreateCustomerUseCase;
let updateCustomerUseCase: UpdateCustomerUseCase;

describe('Update Customer', () => {
  beforeEach(() => {
    customersRepositoryInMemory = new CustomersRepositoryInMemory();
    createCustomerUseCase = new CreateCustomerUseCase(
      customersRepositoryInMemory,
    );
    updateCustomerUseCase = new UpdateCustomerUseCase(
      customersRepositoryInMemory,
    );
  });

  it('should be able to update customer', async () => {
    const customer = await createCustomerUseCase.execute({
      name: 'Jonh Doe',
      sex: 'masculino',
      birthday: '1998-12-11',
      city_id: 'f3009163-4eed-4f16-903e-0800a84d583e',
    });

    const updateCustomer = await updateCustomerUseCase.execute({
      id: customer.id,
      name: 'Jonh Frango',
      city_id: '25e70af5-a803-4b1a-8f78-011400cbd698',
    });

    expect(updateCustomer.name).toBe('Jonh Frango');
    expect(updateCustomer.city_id).toBe('25e70af5-a803-4b1a-8f78-011400cbd698');
  });

  it('should be able to update customer', async () => {
    await expect(
      updateCustomerUseCase.execute({
        id: 'non-existent',
        name: 'Jonh Frango',
        city_id: '25e70af5-a803-4b1a-8f78-011400cbd698',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
