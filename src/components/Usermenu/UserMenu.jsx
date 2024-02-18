import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'components/redux/auth/operations';
import { selectUser } from 'components/redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Welcome, {user && user.name}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button
          className="dropdown-item"
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
