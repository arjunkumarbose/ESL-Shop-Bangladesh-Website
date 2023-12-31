import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  // Add theme state and toggle handler
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to={"/myproducts"}>My Products</Link>
          </li>
          <li>
            <Link to={"/allproducts"}>All Products</Link>
          </li>
        </>
      )}
      <li>
        <Link to={"/addproducts"}>Add Products</Link>
      </li>
      <li>
        <Link to={"/mycart"}>My Cart</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blogs</Link>
      </li>
    </>
  );

  return (
    <div className={`navbar bg-${theme}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img src="/esl-shop-logo-white_140x.png" alt="" />
        </Link>
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal text-cyan-400 font-bold px-1">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Add dark mode toggle button */}
        <div className="flex justify-center items-center">
          <label className="swap swap-rotate">
            <input
              onChange={toggleTheme}
              type="checkbox"
              checked={theme === "dark"}
              className=" pl-10"
            />
            {/* sun icon */}
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {user ? (
          <>
            <button
              onClick={() => logout()}
              className="btn btn-error font-bold py-0 w-20 text-xs px-2"
            >
              Log Out
            </button>
            <div
              className="avatar tooltip tooltip-left"
              data-tip={`${user?.displayName}`}
            >
              <div className="w-12 md:w-14 mx-2 rounded-full">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-success font-bold px-8 py-0">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
