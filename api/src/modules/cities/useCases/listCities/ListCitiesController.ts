import { Request, Response } from 'express';
import { omitBy, isNil } from 'lodash';
import { container } from 'tsyringe';

import { ListCitiesUseCase } from './ListCitiesUseCase';

class ListCitiesController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { name, uf } = req.query;

    const listCitiesUseCase = container.resolve(ListCitiesUseCase);

    const filter = omitBy({ name, uf }, isNil);

    const cities = await listCitiesUseCase.execute(filter);

    return res.json(cities);
  }
}

export { ListCitiesController };
