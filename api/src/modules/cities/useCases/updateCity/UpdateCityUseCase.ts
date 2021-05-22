import { inject, injectable } from 'tsyringe';

import { City } from '@modules/cities/infra/typeorm/entities/City';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { AppError } from '@shared/errors/AppError';
import { capitalize } from '@shared/utils/capitalize';

interface IRequest {
  id: string;
  name: string;
  uf: string;
}

interface IVerificationCity {
  name: string;
  uf: string;
}

@injectable()
class UpdateCityUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  public async execute({ id, name, uf }: IRequest): Promise<City> {
    const nameCapitalize = capitalize(name);
    const ufUpperCase = uf.toUpperCase();

    const city = await this.citiesRepository.findById(id);
    if (!city) {
      throw new AppError('City not found', 404);
    }

    const verificationCity = {} as IVerificationCity;
    if (nameCapitalize !== city.name) {
      Object.assign(verificationCity, { name: nameCapitalize });
    } else {
      Object.assign(verificationCity, { name: city.name });
    }
    if (ufUpperCase !== city.uf) {
      Object.assign(verificationCity, { uf: ufUpperCase });
    } else {
      Object.assign(verificationCity, { uf: city.uf });
    }

    const cityAlreadyExists = await this.citiesRepository.findByCityState(
      verificationCity,
    );
    if (cityAlreadyExists) {
      throw new AppError('City already exists', 401);
    }

    Object.assign(city, verificationCity);

    const updateCity = await this.citiesRepository.save(city);

    return updateCity;
  }
}

export { UpdateCityUseCase };
