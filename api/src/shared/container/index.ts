import { container } from 'tsyringe';

import { CitiesRepository } from '@modules/cities/infra/typeorm/repositories/CitiesRepository';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';
import { CustomersRepository } from '@modules/customers/infra/typeorm/repositories/CustomersRepository';
import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';

container.registerSingleton<ICitiesRepository>(
  'CitiesRepository',
  CitiesRepository,
);

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);
