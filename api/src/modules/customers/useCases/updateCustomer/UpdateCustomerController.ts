import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

class UpdateCustomerController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, city_id } = req.body;

    const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);

    const customer = await updateCustomerUseCase.execute({
      id,
      name,
      city_id,
    });

    return res.json(classToClass(customer));
  }
}

export { UpdateCustomerController };
