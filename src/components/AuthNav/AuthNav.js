import { NavLink } from 'react-router-dom';
import './AuthNav.css';

export const AuthNav = () => {
  return (
    <div className='authContainer'>
      <NavLink className="link" to="/register">
        Register
      </NavLink>
      <NavLink className="link" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
