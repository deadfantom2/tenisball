import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterCompleteScreen from './screens/RegisterCompleteScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import PostDetails from './screens/PostDetails';
import EditPostScreen from './screens/EditPostScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import PrivateRoutes from './routes/privateRoutes';
import AdminRoutes from './routes/adminRoutes';
import AuthRoutes from './routes/authRoutes';
import PublicRoutes from './routes/publicRoutes';

import Header from './layout/Header';
import Footer from './layout/Footer';
import FavoriteScreen from './screens/FavoriteScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          {/* Public routes */}
          <PublicRoutes exact path="/" component={HomeScreen} title="Coins" />
          {/* Auth routes */}
          <AuthRoutes
            exact
            path="/register"
            component={RegisterScreen}
            title="Register"
          />
          <AuthRoutes
            exact
            path="/login"
            component={LoginScreen}
            title="Login"
          />
          <AuthRoutes
            exact
            path="/register/complete"
            component={RegisterCompleteScreen}
            title="Complete"
          />

          {/* Private routes */}
          <PrivateRoutes
            exact
            path="/post/:id"
            component={PostDetails}
            title="Coin"
          />
          <PrivateRoutes
            exact
            path="/profile"
            component={ProfileScreen}
            title="Profile"
          />
          <PrivateRoutes
            exact
            path="/favorites"
            component={FavoriteScreen}
            title="Favorites"
          />

          {/* Admin routes */}
          <AdminRoutes
            exact
            path="/post/edit/:id"
            component={EditPostScreen}
            title="Edit"
          />
          <AdminRoutes
            exact
            path="/admin/create/post"
            component={CreatePostScreen}
            title="Create"
          />
          <Route path="*">
            <div className="error-message">
              <img src="/error.svg" alt="Error img" />
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
