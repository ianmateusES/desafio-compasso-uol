import { inject, injectable } from 'tsyringe';

import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';

@injectable()
class DeleteCustomerUseCase {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.customersRepository.delete(id);
  }
}

export { DeleteCustomerUseCase };
