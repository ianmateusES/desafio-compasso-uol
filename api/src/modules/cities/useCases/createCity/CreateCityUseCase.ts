import { inject, injectable } from 'tsyringe';

import { City } from '@modules/cities/infra/typeorm/entities/City';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { AppError } from '@shared/errors/AppError';
import { capitalize } from '@shared/utils/capitalize';

interface IRequest {
  name: string;
  uf: string;
}

@injectable()
class CreateCityUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ name, uf }: IRequest): Promise<City> {
    const nameCapitalize = capitalize(name);
    const ufUpperCase = uf.toUpperCase();

    const cityAlreadyExists = await this.citiesRepository.findByCityState({
      name: nameCapitalize,
      uf: ufUpperCase,
    });
    if (cityAlreadyExists) {
      throw new AppError('City already exists', 401);
    }

    const city = await this.citiesRepository.create({
      name: nameCapitalize,
      uf: ufUpperCase,
    });

    return city;
  }
}

export { CreateCityUseCase };
