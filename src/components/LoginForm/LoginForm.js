import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import '../LoginForm/Login.css';
import PropTypes from 'prop-types';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <label className="label">
          Email
          <input
            className="input"
            type="email"
            name="email"
            required="true"
            autoComplete="off"
            placeholder="Please enter e-mail!"
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            type="password"
            name="password"
            required="true"
            placeholder="Please enter password!"
          />
        </label>
        <button className="button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};
LoginForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
