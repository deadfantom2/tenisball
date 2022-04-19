import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

// Mode routes
import PublicRoutes from './routes/publicRoutes';

// Screens
const HomeScreen = lazy(() => import('./pages/HomeScreen'));

const App = () => {
  const UnauthenticatedRoutes = () => (
    <Switch>
      <Route exact path="/">
        <PublicRoutes exact path="/" component={HomeScreen} />
      </Route>
      <Route path="*"></Route>
    </Switch>
  );

  return (
    <Router>
      <main>
        <Suspense fallback={''}>
          <Switch>
            <UnauthenticatedRoutes />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
