import { ICreateCityDTO } from '@modules/cities/dtos/ICreateCityDTO';
import { IFindCityStateDTO } from '@modules/cities/dtos/IFindCityStateDTO';
import { City } from '@modules/cities/infra/typeorm/entities/City';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';

class CitiesRepositoryInMemory implements ICitiesRepository {
  private cities: City[];

  constructor() {
    this.cities = [];
  }

  public async findAll(): Promise<City[]> {
    return this.cities;
  }

  public async findById(id: string): Promise<City | undefined> {
    return this.cities.find(city => city.id === id);
  }

  public async findByCityState({
    name,
    uf,
  }: IFindCityStateDTO): Promise<City | undefined> {
    return this.cities.find(city => city.name === name && city.uf === uf);
  }

  public async findByName(name: string): Promise<City[]> {
    return this.cities.filter(city => city.name === name);
  }

  public async findByUf(uf: string): Promise<City[]> {
    return this.cities.filter(city => city.uf === uf);
  }

  public async create({ name, uf }: ICreateCityDTO): Promise<City> {
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
