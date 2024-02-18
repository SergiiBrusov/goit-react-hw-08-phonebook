import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'components/redux/auth/operations';
import {
  selectError,
  selectLoading,
} from 'components/redux/contacts/selectors';
import { Loading } from 'components/loading';

const Login = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    e.target.elements.email.value = '';
    e.target.elements.password.value = '';
  };

  return (
    <>
      {isLoading && <Loading />}
      {error && 'something went wrong'}
      <form className="container mt-5" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
