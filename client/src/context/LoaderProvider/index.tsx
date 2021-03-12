import React from 'react';
import Loader from '../../components/Loader';

type LoaderProps = {
  children: React.ReactNode;
  showLoader: () => void;
  hideLoader: () => void;
};

const LoaderContext = React.createContext<Partial<LoaderProps>>({});

export const useLoaderContext = () => React.useContext(LoaderContext);

const LoaderProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
