import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink to="/register" className="nav-link">
          SignUp
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          LogIn
        </NavLink>
      </li>
    </ul>
  );
};
