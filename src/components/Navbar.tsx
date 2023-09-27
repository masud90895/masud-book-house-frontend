import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IUser, RootState } from "../Interface/login";
import { userLoggedOut } from "../Redux/features/auth/authSlice";
import { useAppSelector } from "../Redux/hook";
import { useState } from "react";

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const user: IUser | null | undefined = useAppSelector(
    (state: RootState) => state.auth
  );

  const disptach = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    disptach(userLoggedOut());
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <header className="bg-gray-500 border-b border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <p className="text-white text-lg font-semibold">MRM Store</p>
            </a>
          </div>
          <button
            onClick={() => setIsNavbar(!isNavbar)}
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link
              to="/"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              to="/books"
              title=""
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              {" "}
              All Books{" "}
            </Link>
            {user?.accessToken && (
              <Link
                to="/addBook"
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
              >
                {" "}
                Add Book{" "}
              </Link>
            )}
            {user?.accessToken && (
              <Link
                to="/mybooks"
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
              >
                {" "}
                My Book{" "}
              </Link>
            )}
            {!user?.accessToken && (
              <Link
                to="/login"
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
              >
                {" "}
                Sign In{" "}
              </Link>
            )}
            {user?.accessToken && (
              <button
                onClick={logOut}
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
              >
                {" "}
                Logout{" "}
              </button>
            )}
            {!user?.accessToken && (
              <Link
                to="/Registration"
                title=""
                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
              >
                {" "}
                Sign Up{" "}
              </Link>
            )}
            <div>
              {user?.accessToken && (
                <p className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">
                  {user?.user?.name}
                </p>
              )}
            </div>
          </div>
        </nav>
        {/* xs to lg */}
        {isNavbar && (
          <nav className="min-h-screen px-4 py-10 text-center bg-black md:hidden">
            <button
              onClick={() => setIsNavbar(!isNavbar)}
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col items-center mt-10 space-y-2">
              <a
                href="#"
                title=""
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                Home{" "}
              </a>
              <Link
                to="/books"
                title=""
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                All Books{" "}
              </Link>
              <a
                href="#"
                title=""
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                About{" "}
              </a>
              <a
                href="#"
                title=""
                className="py-2 font-medium text-white transition-all duration-200 focus:text-opacity-70"
              >
                {" "}
                Sign In{" "}
              </a>
            </nav>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
