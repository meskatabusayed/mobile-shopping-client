import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navber = () => {

    const {user , logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => console.log('user Logged Out'))
        .catch(error => {
            console.log(error);
        })
    }






  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
          }
        >
          Home
        </NavLink>
        
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
          }
        >
          AddProduct
        </NavLink>
        
      </li>
      <li>
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
          }
        >
          MyCart
        </NavLink>
        
      </li>
      <li>
        <NavLink
          to="/signup"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
          }
        >
          SignUp
        </NavLink>
        
      </li>
      <li>
        <NavLink
          to="/signin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
          }
        >
          SignIn
        </NavLink>
        
      </li>
      
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-white bg-red-900 normal-case text-xl">MYBAZER</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {
            user ? <>
            <div className="avatar mr-2">
              <div className="w-24 rounded">
                <img src={user.photoURL} />
              </div>
            </div>
            <span>{user.displayName}</span>
            <a onClick={handleLogOut} className="btn btn-sm ml-2">Sign Out</a>
            </>
            :
            <Link to='/signin'>
                 <button  className="btn btn-sm ">Sign In</button>
            </Link>
        }
        
      </div>
    </div>
  );
};

export default Navber;
