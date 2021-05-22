import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCityUseCase } from './CreateCityUseCase';

class CreateCityController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { name, uf } = req.body;

    const createCityUseCase = container.resolve(CreateCityUseCase);

    const city = await createCityUseCase.execute({ name, uf });

    return res.status(201).json(city);
  }
}

export { CreateCityController };
