import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // NEW: dropdown open state

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setIsProfileOpen(false); // close dropdown on logout
  };

  const handleProfileClick = () => {
    if (!token) {
      navigate('/login');
    } else {
      setIsProfileOpen(!isProfileOpen);
    }
  };

  return (
    <div className='flex items-center justify-between py-4 px-4 md:px-8 lg:px-12 bg-white shadow-sm rounded-b-2xl font-medium relative z-20'>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} className='w-25 sm:w-40' alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden sm:flex gap-6 text-gray-700 text-sm'>
        {['/', '/collection', '/about', '/contact'].map((path, idx) => (
          <NavLink
            key={idx}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-2 pb-1 hover:text-black transition-colors ${
                isActive ? 'text-black font-semibold' : ''
              }`
            }
          >
            {({ isActive }) => (
              <>
                <p>{path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}</p>
                <hr
                  className={`w-2/4 border-none h-[2px] bg-gray-700 transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className='flex items-center gap-5'>
        <img
          onClick={() => { setShowSearch(true); navigate('/collection'); }}
          src={assets.search_icon}
          className='w-5 cursor-pointer hover:scale-110 transition-transform'
          alt="Search"
        />

        <div className='relative'>
          <img
            onClick={handleProfileClick}
            className='w-5 cursor-pointer hover:scale-110 transition-transform'
            src={assets.profile_icon}
            alt="Profile"
          />
          {/* Dropdown */}
          {token && isProfileOpen && (
            <div className='absolute right-0 mt-2 bg-white border rounded shadow-lg'>
              <div className='flex flex-col text-gray-600'>
                <p onClick={() => { navigate('/profile'); setIsProfileOpen(false); }} className='px-4 py-2 hover:bg-gray-50 cursor-pointer'>My Profile</p>
                <p onClick={() => { navigate('/orders'); setIsProfileOpen(false); }} className='px-4 py-2 hover:bg-gray-50 cursor-pointer'>Orders</p>
                <p onClick={logout} className='px-4 py-2 hover:bg-gray-50 cursor-pointer'>Logout</p>
              </div>
            </div>
          )}
        </div>

        <Link to='/cart' className='relative'>
          <img
            src={assets.cart_icon}
            className='w-5 cursor-pointer hover:scale-110 transition-transform'
            alt="Cart"
          />
          <p className='absolute -right-1 -bottom-1 w-4 text-[8px] text-white bg-black rounded-full text-center leading-4'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt="Menu"
        />
      </div>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-30 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-4 cursor-pointer border-b'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p className='text-gray-700'>Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, idx) => (
            <NavLink
              key={idx}
              onClick={() => setVisible(false)}
              to={path}
              className='py-3 px-6 text-gray-700 border-b hover:bg-gray-50'
            >
              {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
