import { CitiesRepositoryInMemory } from '@modules/cities/repositories/in-memory/CitiesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCityUseCase } from './CreateCityUseCase';

let citiesRepositoryInMemory: CitiesRepositoryInMemory;
let createCityUseCase: CreateCityUseCase;

describe('Create City', () => {
  beforeEach(() => {
    citiesRepositoryInMemory = new CitiesRepositoryInMemory();
    createCityUseCase = new CreateCityUseCase(citiesRepositoryInMemory);
  });

  it('should be able to create city', async () => {
    const city = await createCityUseCase.execute({
      name: 'fortaleza',
      uf: 'CE',
    });

    expect(city).toHaveProperty('id');
  });

  it('should not be able to create a new city with same name and state from another', async () => {
    await createCityUseCase.execute({
      name: 'fortaleza',
      uf: 'CE',
    });

    await expect(
      createCityUseCase.execute({
        name: 'fortaleza',
        uf: 'CE',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
