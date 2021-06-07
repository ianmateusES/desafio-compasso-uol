import { celebrate, Joi, Segments } from 'celebrate';

const idValidation = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
};

const postCustomerValidation = celebrate({
  [Segments.BODY]: {
    name: Joi.string().trim().required(),
    sex: Joi.string().trim().required(),
    birthday: Joi.date().required(),
    city_id: Joi.string().uuid().required(),
  },
});

const putCustomerValidation = celebrate({
  ...idValidation,
  [Segments.BODY]: {
    name: Joi.string().trim().required(),
    city_id: Joi.string().uuid().required(),
  },
});

const deleteCustomerValidation = celebrate({
  ...idValidation,
});

const getCustomerValidation = celebrate({
  [Segments.QUERY]: {
    name: Joi.string().trim(),
  },
});

export {
  postCustomerValidation,
  putCustomerValidation,
  deleteCustomerValidation,
  getCustomerValidation,
};
