import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const hadnleLogOut = () =>{
    logOut()
    .then(() => swal("Log out Successfull", "Thank you for visiting our site", "success"))
    .catch(error => console.error(error))
  }

  return (
    <div className="navbar">
      <nav className="flex flex-col lg:flex-row gap-4 lg:gap-40 mx-auto justify-evenly items-center py-10 px-10">
        {/* Logo */}

        <div className="navbar-start">
          <img
            className="w-[90px] h-[60px] rounded"
            src="https://i.ibb.co/LYmmn86/logo.png"
            alt="Logo"
          />
        </div>

        {/* Text content */}

        <div className="navbar-center">
          <ul className=" flex flex-col md:flex-row gap-3 md:gap-12 mt-6 md:mt-0">
            <li className="text-lg font-normal">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-yellow-500 underline font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" text-lg font-normal">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-yellow-500 underline font-bold"
                    : ""
                }
              >
                About
              </NavLink>
            </li>
            <li className=" text-lg font-normal">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-yellow-500 underline font-bold"
                    : ""
                }
              >
                Contact
              </NavLink>
            </li>
            <li className=" text-lg font-normal">
              <NavLink
                to="/gallery"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-yellow-500 underline font-bold"
                    : ""
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className=" text-lg font-normal">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-yellow-500 underline font-bold"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li className=" text-lg font-normal">
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " text-yellow-500 underline font-bold"
                    : ""
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>

        {/* User logo and logout button will be here somewhere */}

        <div className="navbar-end flex flex-row-reverse gap-3">
          {user && (
            <button className="px-3 py-2 bg-blue-300 rounded-lg font-semibold" onClick={hadnleLogOut}>
              Logout
            </button>
          )}
          <div className="w-10">
            <img src="https://i.ibb.co/HG1zZkj/Screenshot-2023-10-09-160806.png" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
