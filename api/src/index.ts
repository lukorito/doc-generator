import 'module-alias/register';
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import createDatabaseConnection from 'database/createConnection';
import seedCompanies from 'database/createCompanyAccounts';
import seedEmployees from 'database/createEmployeesAccounts';

import { addRespondToResponse } from 'middleware/response';
import { verifyToken } from './middleware/authentication';
import { attachPrivateRoutes, attachPublicRoutes } from './routes';

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
    console.log('Database Connected');
  } catch (e) {
    console.log(e);
  }
};

const instantiateExpress = (): void => {
  const app = express();
  const port = process.env.PORT || 3001;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(addRespondToResponse);

  attachPublicRoutes(app);

  app.use(verifyToken);

  attachPrivateRoutes(app);

  app.get('/', (req, res) => {
    console.log(req);
    res.send('GET request to homepage');
  });

  app.listen(port, () => {
    console.log(`Server instance is running on ${port}`);
  });
};

const initializeApp = async (): Promise<void> => {
  try {
    await establishDatabaseConnection();
    await seedCompanies();
    await seedEmployees();
    instantiateExpress();
  } catch (e) {
    console.warn(e, 'error');
  }
};

initializeApp();
