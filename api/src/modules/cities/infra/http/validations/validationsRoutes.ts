import { celebrate, Joi, Segments } from 'celebrate';

const idValidation = {
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
};

const postCityValidation = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    uf: Joi.string().length(2).required(),
  },
});

const putCityValidation = celebrate({
  ...idValidation,
  [Segments.BODY]: {
    name: Joi.string().required(),
    uf: Joi.string().required(),
  },
});

const getCityValidation = celebrate({
  [Segments.QUERY]: {
    name: Joi.string(),
    uf: Joi.string().length(2),
  },
});

export { postCityValidation, putCityValidation, getCityValidation };
