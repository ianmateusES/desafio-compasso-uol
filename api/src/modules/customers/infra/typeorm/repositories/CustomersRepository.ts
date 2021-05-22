import { getRepository, Raw, Repository, Like } from 'typeorm';

import { ICreateCustomerDTO } from '@modules/customers/dtos/ICreateCustomerDTO';
import { IFilterCustomerDTO } from '@modules/customers/dtos/IFilterCustomerDTO';
import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';

import { Customer } from '../entities/Customer';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async findAll({ name }: IFilterCustomerDTO): Promise<Customer[]> {
    const filter = name ? { name: Like(`%${name}%`) } : {};

    const custumers = await this.ormRepository.find({ where: filter });

    return custumers;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const custumer = await this.ormRepository.findOne(id);

    return custumer;
  }

  public async findByName(name: string): Promise<Customer[]> {
    const custumers = await this.ormRepository.find({
      where: {
        name: Raw(
          nameField => `lower(${nameField}) = '${name.toLocaleLowerCase()}'`,
        ),
      },
    });

    return custumers;
  }

  public async create({
    name,
    sex,
    birthday,
    city_id,
  }: ICreateCustomerDTO): Promise<Customer> {
    const custumer = this.ormRepository.create({
      name,
      sex,
      birthday,
      city_id,
    });

    await this.ormRepository.save(custumer);

    return custumer;
  }

  public async save(customer: Customer): Promise<Customer> {
    const newCustumer = await this.ormRepository.save(customer);

    return newCustumer;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export { CustomersRepository };
