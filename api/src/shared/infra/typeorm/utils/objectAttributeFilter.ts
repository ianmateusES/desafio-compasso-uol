/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { omitBy, isNil } from 'lodash';
import { Raw } from 'typeorm';

const objectAttributeFilter = (obj: Object): Object => {
  const where = {};
  Object.keys(omitBy(obj, isNil)).forEach((item: any) => {
    [where as any][item] = Raw(
      dateField => `lower(${dateField}) = lower('${[obj as any][item]}')`,
    );
  });
  return { where };
};

export { objectAttributeFilter };
