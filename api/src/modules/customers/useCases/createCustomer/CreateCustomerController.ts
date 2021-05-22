import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCustomerUseCase } from './CreateCustomerUseCase';

class CreateCustomerController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { name, sex, birthday, city_id } = req.body;

    const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

    const customer = await createCustomerUseCase.execute({
      name,
      sex,
      birthday,
      city_id,
    });

    return res.status(201).json(classToClass(customer));
  }
}

export { CreateCustomerController };
