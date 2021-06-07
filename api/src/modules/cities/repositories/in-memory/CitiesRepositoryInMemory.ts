import { omitBy, isNil } from 'lodash';

import { ICityDTO } from '@modules/cities/dtos/ICityDTO';
import { City } from '@modules/cities/infra/typeorm/entities/City';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';

class CitiesRepositoryInMemory implements ICitiesRepository {
  private cities: City[];

  constructor() {
    this.cities = [];
  }

  public async findAll(data: Partial<ICityDTO>, page = 1): Promise<City[]> {
    let filterCities = this.cities;
    Object.keys(omitBy(data, isNil)).forEach((item: string) => {
      filterCities = filterCities.filter(
        city => city[item as keyof ICityDTO] === data[item as keyof ICityDTO],
      );
    });
    return filterCities.slice((page - 1) * 10, 10 * page);
  }

  public async findById(id: string): Promise<City> {
    return this.cities.find(city => city.id === id) as City;
  }

  public async findByCityState({ name, uf }: ICityDTO): Promise<City> {
    return this.cities.find(
      city => city.name === name && city.uf === uf,
    ) as City;
  }

  public async findByName(name: string): Promise<City[]> {
    return this.cities.filter(city => city.name === name);
  }

  public async findByUf(uf: string): Promise<City[]> {
    return this.cities.filter(city => city.uf === uf);
  }

  public async create({ name, uf }: ICityDTO): Promise<City> {
    const city = new City();
    Object.assign(city, {
      name,
      uf,
      create_at: new Date(),
      update_at: new Date(),
    });
    this.cities.push(city);

    return city;
  }

  public async save(city: City): Promise<City> {
    const findIndex = this.cities.findIndex(
      findCity => findCity.id === city.id,
    );

    this.cities[findIndex] = city;

    return city;
  }
}

export { CitiesRepositoryInMemory };
