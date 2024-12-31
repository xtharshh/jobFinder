import { StrictMode, createContext, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Creating context with initial values
export const Context = createContext({
  isAuthorized: false,
  user: {},
});

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
