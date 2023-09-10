import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1> Sorry, the page you visited does not exist.</h1>

      <button type="button" onClick={() => navigate('/')}>
        Back Home
      </button>
    </div>
  );
};
export default Error;
