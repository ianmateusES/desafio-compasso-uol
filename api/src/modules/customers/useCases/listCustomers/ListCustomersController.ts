import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { isNil, omitBy } from 'lodash';
import { container } from 'tsyringe';

import { ListCustomersUseCase } from './ListCustomersUseCase';

class ListCustomersController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.query;

    const listCustomersUseCase = container.resolve(ListCustomersUseCase);

    const filter = omitBy({ name }, isNil);

    const customer = await listCustomersUseCase.execute(filter);

    return res.json(classToClass(customer));
  }
}

export { ListCustomersController };
