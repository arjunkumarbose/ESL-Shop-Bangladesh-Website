import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

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
      {/* <li>
        <Link to={"/brandpage"}>Brands</Link>
      </li> */}
      <li>
        <Link to={"/mycart"}>My Cart</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black">
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
