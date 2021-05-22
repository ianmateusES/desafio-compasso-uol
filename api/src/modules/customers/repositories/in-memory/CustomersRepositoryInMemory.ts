import { ICreateCustomerDTO } from '@modules/customers/dtos/ICreateCustomerDTO';
import { IFilterCustomerDTO } from '@modules/customers/dtos/IFilterCustomerDTO';
import { Customer } from '@modules/customers/infra/typeorm/entities/Customer';

import { ICustomersRepository } from '../ICustomersRepository';

class CustomersRepositoryInMemory implements ICustomersRepository {
  private customers: Customer[];

  constructor() {
    this.customers = [];
  }

  public async findAll({ name }: IFilterCustomerDTO): Promise<Customer[]> {
    const listCustomers = name
      ? this.customers.filter(customer => customer.name === name)
      : this.customers;

    return listCustomers;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    return this.customers.find(customer => customer.id === id);
  }

  public async findByName(name: string): Promise<Customer[]> {
    return this.customers.filter(customer => customer.name === name);
  }

  public async create({
    name,
    sex,
    birthday,
    city_id,
  }: ICreateCustomerDTO): Promise<Customer> {
    const custumer = new Customer();
    Object.assign(custumer, {
      name,
      sex,
      birthday: new Date(birthday),
      city_id,
      create_at: new Date(),
      update_at: new Date(),
    });
    this.customers.push(custumer);

    return custumer;
  }

  public async save(customer: Customer): Promise<Customer> {
    const findIndex = this.customers.findIndex(
      findCustumer => findCustumer.id === customer.id,
    );

    Object.assign(customer, { updated_at: new Date() });
    this.customers[findIndex] = customer;

    return customer;
  }

  public async delete(id: string): Promise<void> {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }
}

export { CustomersRepositoryInMemory };
