import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCityUseCase } from './UpdateCityUseCase';

class UpdateCityController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, uf } = req.body;

    const updateCityUseCase = container.resolve(UpdateCityUseCase);

    const city = await updateCityUseCase.execute({ id, name, uf });

    return res.json(city);
  }
}

export { UpdateCityController };
