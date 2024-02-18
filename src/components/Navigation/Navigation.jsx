import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className="nav-item">
          <NavLink to="/contacts" className="nav-link">
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
