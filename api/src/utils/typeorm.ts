import { Company, Employee } from 'entities';
import { validate } from 'class-validator';
import { getManager } from 'typeorm';

type EntityConstructor = typeof Company | typeof Employee;
type EntityInstance = Company | Employee;

export const handleValidation = async <T extends EntityInstance>(instance: T): Promise<T> => {
  const errors = await validate(instance);
  if (errors.length > 0) {
    errors.forEach((error) => {
      console.log(error, 'e');
    });
  }
  return getManager().save(instance);
};

export const createEntity = async <T extends EntityConstructor>(
  Constructor: T,
  data: Partial<InstanceType<T>>,
): Promise<InstanceType<T>> => {
  const instance = Constructor.create(data);
  return handleValidation(instance as InstanceType<T>);
};
