import { ICreateCityDTO } from '../dtos/ICreateCityDTO';
import { IFilterCityDTO } from '../dtos/IFilterCityDTO';
import { IFindCityStateDTO } from '../dtos/IFindCityStateDTO';
import { City } from '../infra/typeorm/entities/City';

interface ICitiesRepository {
  findAll(data: IFilterCityDTO): Promise<City[]>;
  findById(id: string): Promise<City | undefined>;
  findByCityState(data: IFindCityStateDTO): Promise<City | undefined>;
  findByName(name: string): Promise<City[]>;
  findByUf(uf: string): Promise<City[]>;
  create(data: ICreateCityDTO): Promise<City>;
  save(city: City): Promise<City>;
}

export { ICitiesRepository };
