import { useDispatch, useSelector } from 'react-redux';
import { register } from 'components/redux/auth/operations';
import {
  selectError,
  selectLoading,
} from 'components/redux/contacts/selectors';
import { Loading } from 'components/loading';

const Register = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.password.value = '';
  };

  return (
    <>
      {isLoading && <Loading />}
      {error && 'something went wrong'}
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
