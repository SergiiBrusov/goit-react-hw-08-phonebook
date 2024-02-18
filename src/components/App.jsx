import { Layout } from 'pages/Layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'components/redux/auth/operations';
import { selectIsRefreshing } from 'components/redux/auth/selectors';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Loading } from './loading';

const Welcome = lazy(() => import('pages/Welcome/Welcome'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Error = lazy(() => import('pages/Error404/Error'));

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index path="/" element={<Welcome />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
