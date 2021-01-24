import React from 'react';
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom';
import routes from './routes';

interface RouteType extends RouteProps {
  component: any;
}

const PublicRoute = ({ component: Component, ...rest }: RouteType) => {
  return (
    <Route>
      <Component {...rest} />
    </Route>
  );
};

const PrivateRoute = ({ component: Component, ...rest }: RouteType) => {
  return (
    <Route>
      <Component {...rest} />
    </Route>
  );
};

const App = () => {
  const { PUBLIC_ROUTES, PRIVATE_ROUTES } = routes;
  return (
    <Router>
      {PUBLIC_ROUTES.map((route) => (
        <PublicRoute key={route.path} {...route} />
      ))}
      {PRIVATE_ROUTES.map((route) => (
        <PrivateRoute key={route.path} {...route} />
      ))}
    </Router>
  );
};

export default App;
