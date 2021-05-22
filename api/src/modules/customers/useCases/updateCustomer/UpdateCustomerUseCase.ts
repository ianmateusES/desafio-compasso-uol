import { inject, injectable } from 'tsyringe';

import { Customer } from '@modules/customers/infra/typeorm/entities/Customer';
import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  city_id: string;
}

@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ id, name, city_id }: IRequest): Promise<Customer> {
    const customer = await this.customersRepository.findById(id);
    if (!customer) {
      throw new AppError('Customer not fould', 401);
    }

    Object.assign(customer, { name, city_id });

    const updateCustomer = await this.customersRepository.save(customer);

    return updateCustomer;
  }
}

export { UpdateCustomerUseCase };
