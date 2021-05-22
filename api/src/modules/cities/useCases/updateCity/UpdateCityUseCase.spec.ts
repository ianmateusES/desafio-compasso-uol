import { CitiesRepositoryInMemory } from '@modules/cities/repositories/in-memory/CitiesRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCityUseCase } from '../createCity/CreateCityUseCase';
import { UpdateCityUseCase } from './UpdateCityUseCase';

let citiesRepositoryInMemory: CitiesRepositoryInMemory;
let updateCityUseCase: UpdateCityUseCase;
let createCityUseCase: CreateCityUseCase;

describe('Update City', () => {
  beforeEach(() => {
    citiesRepositoryInMemory = new CitiesRepositoryInMemory();
    createCityUseCase = new CreateCityUseCase(citiesRepositoryInMemory);
    updateCityUseCase = new UpdateCityUseCase(citiesRepositoryInMemory);
  });

  it('should be able to update name city', async () => {
    const city = await createCityUseCase.execute({
      name: 'fortaleza',
      uf: 'CE',
    });

    const newCity = await updateCityUseCase.execute({
      id: city.id,
      name: 'Terresina',
      uf: city.uf,
    });

    expect(newCity.name).toBe('Terresina');
    expect(newCity.uf).toBe(city.uf);
  });

  it('should be able to update uf city', async () => {
    const city = await createCityUseCase.execute({
      name: 'fortaleza',
      uf: 'CE',
    });

    const newCity = await updateCityUseCase.execute({
      id: city.id,
      name: city.name,
      uf: 'PI',
    });

    expect(newCity.name).toBe(city.name);
    expect(newCity.uf).toBe('PI');
  });

  it('should be able to update name and uf city', async () => {
    const city = await createCityUseCase.execute({
      name: 'fortaleza',
      uf: 'CE',
    });

    const newCity = await updateCityUseCase.execute({
      id: city.id,
      name: 'Terresina',
      uf: 'PI',
    });

    expect(newCity.name).toBe('Terresina');
    expect(newCity.uf).toBe('PI');
  });

  it('should not be able to update non-existent city', async () => {
    await expect(
      updateCityUseCase.execute({
        id: 'non-existent',
        name: 'Terresina',
        uf: 'PI',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a city with same name and state from another', async () => {
    await createCityUseCase.execute({
      name: 'fortaleza',
      uf: 'CE',
    });

    await createCityUseCase.execute({
      name: 'Quixada',
      uf: 'PI',
    });

    await createCityUseCase.execute({
      name: 'são paulo',
      uf: 'SP',
    });

    const city = await createCityUseCase.execute({
      name: 'Quixada',
      uf: 'CE',
    });

    await expect(
      updateCityUseCase.execute({
        id: city.id,
        name: 'fortaleza',
        uf: city.uf,
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      updateCityUseCase.execute({
        id: city.id,
        name: city.name,
        uf: 'PI',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      updateCityUseCase.execute({
        id: city.id,
        name: 'são paulo',
        uf: 'SP',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
