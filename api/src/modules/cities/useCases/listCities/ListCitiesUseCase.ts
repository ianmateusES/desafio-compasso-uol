import { inject, injectable } from 'tsyringe';

import { City } from '@modules/cities/infra/typeorm/entities/City';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';

interface IRequest {
  name?: string;
  uf?: string;
}

@injectable()
class ListCitiesUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ name, uf }: IRequest): Promise<City[]> {
    const cities = await this.citiesRepository.findAll({ name, uf });

    return cities;
  }
}

export { ListCitiesUseCase };
