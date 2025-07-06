import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RegisterAction from "../store/Actions/RegisterAction";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [error, setError] = useState({
    userName: "",
    email: "",
    rePassword: "",
  });

  const [duplicate, setDuplicate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (e) => {
    let errorFound = false;
    let errorMessage = "";

    switch (e.target.name) {
      case "userName":
        if (e.target.value.length < 2) {
          errorFound = true;
          errorMessage = "Must be more than 2 characters";
        }
        break;
      case "email":
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)
        ) {
          errorFound = true;
          errorMessage = "Invalid Email";
        }
        break;
      case "rePassword":
        if (e.target.value !== newUser.password) {
          errorFound = true;
          errorMessage = "Passwords must match";
        }
        break;
      default:
        break;
    }

    if (!errorFound) {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
      });
      e.target.classList.remove("border-danger");
      delete error[e.target.name];
      setError({ ...error });
    } else {
      e.target.classList.add("border-danger");
      setError({
        ...error,
        [e.target.name]: errorMessage,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allUser = JSON.parse(localStorage.getItem("allUser"));

    if (!allUser) {
      const users = [newUser];
      localStorage.setItem("allUser", JSON.stringify(users));
      dispatch(RegisterAction(newUser));
      navigate("/");
    } else if (allUser.some((user) => user.email === newUser.email)) {
      setDuplicate("Email Already Exists");
    } else {
      localStorage.setItem(
        "allUser",
        JSON.stringify([...allUser, newUser])
      );
      dispatch(RegisterAction(newUser));
      navigate("/");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card col-md-8 mx-auto shadow-sm border-0">
        <div className="card-body p-4">
          <h2 className="mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input
                className="form-control"
                id="userName"
                type="text"
                name="userName"
                placeholder="Enter your name"
                onChange={handleForm}
              />
              {error.userName && (
                <span className="text-danger small">{error.userName}</span>
              )}
            </div>

            <div className="form-group mt-3">
              <label htmlFor="Email">Email</label>
              <input
                className="form-control"
                name="email"
                id="Email"
                type="email"
                placeholder="Enter your email"
                onChange={handleForm}
              />
              {error.email && (
                <span className="text-danger small">{error.email}</span>
              )}
            </div>

            <div className="form-group mt-3">
              <label htmlFor="Password">Password</label>
              <input
                className="form-control"
                id="Password"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="re-password">Confirm Password</label>
              <input
                className="form-control"
                id="re-password"
                type="password"
                name="rePassword"
                placeholder="Confirm password"
                onChange={handleForm}
              />
              {error.rePassword && (
                <span className="text-danger small">
                  {error.rePassword}
                </span>
              )}
            </div>

            {duplicate && (
              <div className="text-danger mt-3">{duplicate}</div>
            )}

            <div className="form-group mt-4 text-center">
              <button
                className="btn btn-dark w-100"
                type="submit"
                disabled={Object.keys(error).length > 0}
              >
                Sign Up
              </button>
            </div>

            <div className="text-center mt-3">
              <Link to="/login" className="small">
                Already have an account? Login now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;