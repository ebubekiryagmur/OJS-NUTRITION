
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex sm:hidden">
        <button onClick={toggleDrawer} className="p-4">
          <GiHamburgerMenu size="25" />
        </button>
      </div>

 
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleDrawer}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-20 md:hidden`}
      >
        
        <div className="p-4">
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              PROTEİN <IoIosArrowForward />
            </li>
            <li className="flex justify-between items-center">
              SPOR GIDALARI <IoIosArrowForward />
            </li>
            <li className="flex justify-between items-center">
              SAĞLIK <IoIosArrowForward />
            </li>
            <li className="flex justify-between items-center">
              GIDA <IoIosArrowForward />
            </li>
            <li className="flex justify-between items-center">
              VİTAMİN <IoIosArrowForward />
            </li>
            <li>TÜM ÜRÜNLER</li>
          </ul>
        </div>
        <div className="bg-gray-200 p-4">
          <ul className="space-y-4">
            <li>HESABIM</li>
            <li>MÜŞTERİ YORUMLARI</li>
            <li>İLETİŞİM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
