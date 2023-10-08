import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center py-10 px-10">

        {/* Logo */}

        <img
        className="w-[90px] h-[60px] rounded"
        src="src/assets/logo.png"
        alt="Logo"
      />

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
      </nav>
    </div>
  );
};

export default Nav;
