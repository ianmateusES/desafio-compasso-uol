import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

class DeleteCustomerController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCustomerUseCase = container.resolve(DeleteCustomerUseCase);

    await deleteCustomerUseCase.execute(id);

    return res.status(201).send();
  }
}

export { DeleteCustomerController };
