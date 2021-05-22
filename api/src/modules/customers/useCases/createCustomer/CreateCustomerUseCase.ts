import { inject, injectable } from 'tsyringe';

import { Customer } from '@modules/customers/infra/typeorm/entities/Customer';
import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';

interface IRequest {
  name: string;
  sex: string;
  birthday: string;
  city_id: string;
}

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject('CustomersRepository')
    private custumersRepository: ICustomersRepository,
  ) {}

  public async execute({
    name,
    sex,
    birthday,
    city_id,
  }: IRequest): Promise<Customer> {
    const custumer = await this.custumersRepository.create({
      name,
      sex,
      birthday,
      city_id,
    });

    return custumer;
  }
}

export { CreateCustomerUseCase };
