import React from 'react';
// import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';

// Layouts
import Header from './layout/Header';
import Footer from './layout/Footer';

// Mode routes
import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';
import AdminRoutes from './routes/adminRoutes';
import AuthRoutes from './routes/authRoutes';

// Screens
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import PostDetails from './screens/PostDetails';
import EditPostScreen from './screens/EditPostScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import PostsScreen from './screens/PostsScreen';

// const HomeScreen = lazy(() => import('./screens/HomeScreen'));
// const RegisterScreen = lazy(() => import('./screens/RegisterScreen'));
// const RegisterCompleteScreen = lazy(() => import('./screens/RegisterCompleteScreen'));
// const LoginScreen = lazy(() => import('./screens/LoginScreen'));
// const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));
// const PostDetails = lazy(() => import('./screens/PostDetails'));
// const EditPostScreen = lazy(() => import('./screens/EditPostScreen'));
// const CreatePostScreen = lazy(() => import('./screens/EditPostScreen'));
// const FavoriteScreen = lazy(() => import('./screens/FavoriteScreen'));

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <ScrollToTop>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Switch>
            {/* Public routes */}
            <PublicRoutes
              exact
              path="/"
              component={HomeScreen}
              // component={HomeScreen}
              title="Coins"
            />
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
            {/* <AuthRoutes
                exact
                path="/register/complete"
                component={RegisterCompleteScreen}
                title="Complete"
              /> */}
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
            <AdminRoutes
              exact
              path="/admin/posts"
              component={PostsScreen}
              title="Posts"
            />

            <Route path="*">
              <div className="path-notfound-404">
                <img src="/error.svg" alt="Path not found" />
              </div>
            </Route>
          </Switch>
          {/* </Suspense> */}
        </ScrollToTop>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
