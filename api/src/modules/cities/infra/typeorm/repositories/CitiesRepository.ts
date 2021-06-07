import { getRepository, Repository } from 'typeorm';

import { ICityDTO } from '@modules/cities/dtos/ICityDTO';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { objectAttributeFilter } from '@shared/infra/typeorm/utils/objectAttributeFilter';

import { City } from '../entities/City';

class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async findAll(data: Partial<ICityDTO>, page = 1): Promise<City[]> {
    const cities = await this.ormRepository.find({
      ...objectAttributeFilter(data),
      take: 10,
      skip: 10 * (page - 1),
    });

    return cities;
  }

  public async findById(id: string): Promise<City> {
    const city = await this.ormRepository.findOne(id);

    return city as City;
  }

  public async findByCityState({ name, uf }: ICityDTO): Promise<City> {
    const city = await this.ormRepository.findOne({ name, uf });

    return city as City;
  }

  public async findByName(name: string): Promise<City[]> {
    const cities = await this.ormRepository.find({ name });

    return cities;
  }

  public async findByUf(uf: string): Promise<City[]> {
    const cities = await this.ormRepository.find({ uf });

    return cities;
  }

  public async create({ name, uf }: ICityDTO): Promise<City> {
    const city = this.ormRepository.create({
      name,
      uf,
    });
    await this.ormRepository.save(city);

    return city;
  }

  public async save(city: City): Promise<City> {
    const newUser = await this.ormRepository.save(city);

    return newUser;
  }
}

export { CitiesRepository };
