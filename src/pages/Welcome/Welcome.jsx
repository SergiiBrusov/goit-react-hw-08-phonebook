import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import { Loading } from 'components/loading';
import {
  selectError,
  selectLoading,
} from 'components/redux/contacts/selectors';
import { NavLink } from 'react-router-dom';

const Welcome = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="container mt-5 text-center">
      {isLoading && <Loading />}
      {error && 'something went wrong'}
      <h1 className="mb-4">
        {isLoggedIn ? (
          `Welcome to your phonebook! \u2191`
        ) : (
          <>
            Please, <NavLink to="/register">SignUp</NavLink> or{' '}
            <NavLink to="/login">LogIn</NavLink>
          </>
        )}
      </h1>
    </div>
  );
};

export default Welcome;
