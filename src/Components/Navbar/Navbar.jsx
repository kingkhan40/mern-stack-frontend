import React, { useContext, useState } from 'react';
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext)

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <section className="font-poppins bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl px-4 mx-auto" data-open={open}>
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex gap-4 text-3xl font-semibold leading-none dark:text-gray-400">
            <img src={logo} className='w-12' alt="" />
            <p className='mt-3 font-semibold'>SHOPPER</p>
          </Link>

          <div className="flex lg:hidden">
            <a
              href="#"
              className="inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-blue-600 border border-blue-400 rounded dark:hover:text-blue-300 dark:text-gray-400 dark:border-gray-400 hover:text-blue-700 hover:border-blue-300"
            >
              <div className="relative inline-block">
                <Link to='/cart'>
                  <img src={cart} alt="" className="w-5 h-5" />
                  <div className="absolute -top-2 left-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    <span>
                      {getTotalCartItems()}
                    </span>
                  </div>
                </Link>
              </div>
            </a>
            <button
              className="flex items-center px-3 py-2 text-blue-600 border border-blue-400 rounded dark:text-gray-400 hover:text-blue-800 hover:border-blue-300 dark:border-gray-400 lg:hidden"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:w-auto lg:space-x-14 lg:items-center lg:flex">
            <li className="group">
              <Link
                to="/"
                className="text-md font-medium text-gray-700 dark:text-gray-400 group-hover:text-red-700 dark:group-hover:text-blue-300 relative"
                activeClassName="text-red-700 dark:text-blue-300"
              >
                Shop
                <span className="hover-line" />
              </Link>
            </li>
            <li className="group">
              <Link
                to="/men"
                className="text-md font-medium text-gray-700 dark:text-gray-400 group-hover:text-red-700 dark:group-hover:text-blue-300 relative"
              >
                Men
                <span className="hover-line" />
              </Link>
            </li>
            <li className="group">
              <Link
                to="/women"
                className="text-md font-medium text-gray-700 dark:text-gray-400 group-hover:text-red-700 dark:group-hover:text-blue-300 relative"
              >
                Women
                <span className="hover-line" />
              </Link>
            </li>
            <li className="group">
              <Link
                to="/kids"
                className="text-md font-medium text-gray-700 dark:text-gray-400 group-hover:text-red-700 dark:group-hover:text-blue-300 relative"
              >
                Kids
                <span className="hover-line" />
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex gap-6">
            {localStorage.getItem('auth-token')? 
              <Link onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Logout</span>
            </Link>
            : <Link to="/login" className="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Login</span>
          </Link>
            }
           
            <div className="relative mt-2 inline-block">
              <Link to="/cart">
                <img src={cart} alt="" className="w-8 h-8" />
                <div className="absolute -top-2 left-6 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <span>
                    {getTotalCartItems()}
                  </span>
                </div>
              </Link>
            </div>


          </div>
        </nav>


        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 w-full bg-gray-800 opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
            }`}
        ></div>
        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
            }`}
        >
          <div className="flex justify-between px-5 py-2">
            <a className="text-2xl font-bold dark:text-gray-400" href="#">
              Logo
            </a>
            <button className="rounded-md hover:text-blue-300 lg:hidden dark:text-gray-400" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>

          <ul className="px-5 text-left mt-7">
            <li className="pb-3">
              <Link to="/" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-100">
                Shop
              </Link>
            </li>
            <li className="pb-3">
              <Link to="/men" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">
                Men
              </Link>
            </li>
            <li className="pb-3">
              <Link to="/women" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">
                Women
              </Link>
            </li>
            <li className="pb-3">
              <Link to="/kids" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">
                Kids
              </Link>
            </li>

          </ul>
          <div className="px-4 mt-7 lg:hidden">
            <Link
              to="/login"
              className="inline-block w-full py-3 mr-2 text-xs font-medium leading-none text-center text-gray-100 bg-blue-600 border border-blue-200 rounded px-7 dark:hover:border-blue-400 dark:hover:bg-blue-400 dark:border-blue-300 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Navbar;
