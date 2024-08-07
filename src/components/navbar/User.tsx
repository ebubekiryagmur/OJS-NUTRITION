
import { useState } from 'react';
import { PiShoppingCartThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function User() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end w-full h-12 ps-4 gap-3">
      <div className="relative">
        <div
          className="hidden sm:flex justify-center items-center  border-2 gap-3 h-full px-2 border-themeColor rounded-md cursor-pointer"
          onClick={toggleDropdown}
        >
          <img className="pe-4" src="/src/assets/images/user.png" alt="User" />
          <span>HESAP</span>
          <img src="/src/assets/images/Rectangle.png" alt="Dropdown Icon" />
        </div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <Link
              to="/logins"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Giriş Yap
            </Link>
          </div>
        )}
      </div>
      <button className="hidden sm:flex justify-center items-center gap-2 border-2 px-12 text-white bg-gray-400 rounded-md">
        <img src="/src/assets/images/sepet.png" alt="Sepet" />
        SEPET
      </button>
      
    </div>
  );
}

export default User;
