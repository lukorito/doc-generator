import { v4 as uuidv4 } from 'uuid';
import { Employee } from '../entities';
import userInfo from '../user-info.json';
import { createEntity } from '../utils/typeorm';

interface IEmployees {
  name: string;
  phoneNumber: string;
  email: string;
}

const seedEmployees = (): Promise<Employee[]> => {
  return Promise.all(
    userInfo.employees.map((employeesData: IEmployees) => {
      return createEntity(Employee, {
        id: uuidv4(),
        ...employeesData,
      });
    }),
  );
};

export default seedEmployees;
