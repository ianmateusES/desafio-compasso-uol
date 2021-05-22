import { omitBy, isNil } from 'lodash';
import { Raw } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/ban-types
const objectAttributeFilter = (obj: Object): Object => {
  const where = {};
  Object.keys(omitBy(obj, isNil)).forEach(item => {
    where[item] = Raw(
      dateField => `lower(${dateField}) = lower('${obj[item]}')`,
    );
  });
  return { where };
};

export { objectAttributeFilter };
