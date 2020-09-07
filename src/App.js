import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import LoadingScreen from './pages/LoadingScreen';
import { getTheme } from './utility/theme';
import useAuth from './hooks/useAuth';

function App() {
  useEffect(() => {
    getTheme();
  }, []);

  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen />;

  return (
    <BrowserRouter>
      <Switch>
        {!user ? (
          <Route path='/' component={Login} exact />
        ) : (
          <>
            <Navbar />
            <Route exact path='/' component={Home} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
