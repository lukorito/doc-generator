import { Company } from 'entities';
import { v4 as uuidv4 } from 'uuid';
import userInfo from '../user-info.json';
import { createEntity } from '../utils/typeorm';

interface ICompany {
  name: string;
  accountNumber: string;
  bank: string;
  branch: string;
  bankCode: string;
  swiftCode: string;
  branchCode: string;
}

const seedCompanies = (): Promise<Company[]> => {
  return Promise.all(
    userInfo.companies.map((companyData: ICompany) => {
      return createEntity(Company, {
        id: uuidv4(),
        ...companyData,
        accountNumber: Number(companyData.accountNumber),
      });
    }),
  );
};

export default seedCompanies;
