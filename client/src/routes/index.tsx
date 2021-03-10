import React from 'react';
import { BrowserRouter as Router, Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';
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
  const { isAuthenticated } = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
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
