import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import RegisterAction from "../store/Actions/RegisterAction";

const Login = () => {
  const [credential, setCredentail] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const [notAuthorize, setNotAuthorize] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (e) => {
    let errorFound = false;
    let errorMessage = '';

    if (e.target.name === 'email') {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)) {
        errorFound = true;
        errorMessage = 'Invalid Email';
      }
    } else if (e.target.name === 'password') {
      if (e.target.value.length === 0) {
        errorFound = true;
        errorMessage = 'Password Required';
      }
    }

    if (!errorFound) {
      setCredentail({ ...credential, [e.target.name]: e.target.value });
      e.target.classList.remove('border-danger');
      delete error[e.target.name];
      setError({ ...error });
    } else {
      e.target.classList.add('border-danger');
      setError({ ...error, [e.target.name]: errorMessage });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let allUser = JSON.parse(localStorage.getItem('allUser'));

    if (allUser) {
      let user = allUser.find(
        (u) => u.email === credential.email && u.password === credential.password
      );

      if (user) {
        setNotAuthorize('');
        dispatch(RegisterAction(user));
        navigate('/');
      } else {
        setNotAuthorize('Invalid Credentials');
      }
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="mb-4 text-center text-uppercase">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="inputEmail3">Email</label>
                  <input
                    className="form-control"
                    id="inputEmail3"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleForm}
                  />
                  <span className="text-danger">{error.email}</span>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="inputPassword3">Password</label>
                  <input
                    className="form-control"
                    id="inputPassword3"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleForm}
                  />
                  <span className="text-danger">{error.password}</span>
                </div>

                <button
                  className="btn btn-dark w-100"
                  type="submit"
                  disabled={Object.keys(error).length > 0}
                >
                  Sign in
                </button>

                {notAuthorize && (
                  <p className="text-danger text-center mt-3">{notAuthorize}</p>
                )}
              </form>

              <p className="mt-3 text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-decoration-none">
                  Register now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;