import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { logInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const hadnleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        swal("Login Successful", "Welcome back!", "success");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        swal("Login Successful", "Welcome back!", "success");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-yellow-50">
            <form className="card-body" onSubmit={hadnleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="w-3/4 px-3 py-2 rounded-lg bg-yellow-400 mx-auto font-bold">
                  Login
                </button>
              </div>
              <button
                onClick={handleGoogleSignIn}
                className="w-3/4 px-3 py-2 rounded-lg bg-blue-200 mx-auto font-bold"
              >
                Google
              </button>
            </form>

            {/* Registration and Login toggle */}

            <p className="text-center text-sm px-2 py-2 font-semibold">
              New to Eventador?
            </p>
            <p className="text-center text-sm px-2 mb-2 font-semibold">
              Consider
              <Link to="/signup">
                <button className="link link-accent">Signing Up!</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
