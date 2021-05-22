import { getRepository, Repository } from 'typeorm';

import { ICreateCityDTO } from '@modules/cities/dtos/ICreateCityDTO';
import { IFilterCityDTO } from '@modules/cities/dtos/IFilterCityDTO';
import { IFindCityStateDTO } from '@modules/cities/dtos/IFindCityStateDTO';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { objectAttributeFilter } from '@shared/infra/typeorm/utils/objectAttributeFilter';

import { City } from '../entities/City';

class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async findAll(data: IFilterCityDTO): Promise<City[]> {
    const cities = await this.ormRepository.find(objectAttributeFilter(data));

    return cities;
  }

  public async findById(id: string): Promise<City> {
    const city = await this.ormRepository.findOne(id);

    return city;
  }

  public async findByCityState({ name, uf }: IFindCityStateDTO): Promise<City> {
    const city = await this.ormRepository.findOne({ name, uf });

    return city;
  }

  public async findByName(name: string): Promise<City[]> {
    const cities = await this.ormRepository.find({ name });

    return cities;
  }

  public async findByUf(uf: string): Promise<City[]> {
    const cities = await this.ormRepository.find({ uf });

    return cities;
  }

  public async create({ name, uf }: ICreateCityDTO): Promise<City> {
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
