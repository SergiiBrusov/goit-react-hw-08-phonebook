import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'components/redux/auth/operations';
import { selectUser } from 'components/redux/auth/selectors';
import { Button } from 'react-bootstrap';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="d-flex align-items-center gap-2">
      {' '}
      <p className="text-success fw-bold mb-0 ">
        Welcome, {user && user.name}
      </p>{' '}
      <Button variant="danger" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
