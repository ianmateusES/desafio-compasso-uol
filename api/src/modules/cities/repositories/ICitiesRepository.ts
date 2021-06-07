import { ICityDTO } from '../dtos/ICityDTO';
import { City } from '../infra/typeorm/entities/City';

interface ICitiesRepository {
  findAll(data: Partial<ICityDTO>, page: number): Promise<City[]>;
  findById(id: string): Promise<City>;
  findByCityState(data: ICityDTO): Promise<City>;
  findByName(name: string): Promise<City[]>;
  findByUf(uf: string): Promise<City[]>;
  create(data: ICityDTO): Promise<City>;
  save(city: City): Promise<City>;
}

export { ICitiesRepository };
