import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';
import { IFilterCustomerDTO } from '../dtos/IFilterCustomerDTO';
import { Customer } from '../infra/typeorm/entities/Customer';

interface ICustomersRepository {
  findAll(data: IFilterCustomerDTO): Promise<Customer[]>;
  findById(id: string): Promise<Customer | undefined>;
  findByName(name: string): Promise<Customer[]>;
  create(data: ICreateCustomerDTO): Promise<Customer>;
  save(customer: Customer): Promise<Customer>;
  delete(id: string): Promise<void>;
}

export { ICustomersRepository };
