import { inject, injectable } from 'tsyringe';

import { Customer } from '@modules/customers/infra/typeorm/entities/Customer';
import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';

interface IRequest {
  name?: string;
}

@injectable()
class ListCustomersUseCase {
  constructor(
    @inject('CustomersRepository')
    private custumersRepository: ICustomersRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Customer[]> {
    const custumers = await this.custumersRepository.findAll({
      name,
    });

    return custumers;
  }
}

export { ListCustomersUseCase };
