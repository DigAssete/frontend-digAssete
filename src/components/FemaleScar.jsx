// src/App.js
import React, { useState } from 'react';
import { FaShoppingCart, FaChevronLeft, FaHome, FaHeart, FaSearch, FaCog } from 'react-icons/fa';
import { CgDetailsMore } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import female_scar from '../assets/female_scar.jpg';
import Apple_Logo from '../assets/Apple_Logo.svg';

const FemaleScar = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className='flex justify-between items-center bg-red-600 text-white px-4 py-3'>
        <button className='flex items-center space-x-2'>
          <CgDetailsMore />
        </button>
        <div className='flex flex-col items-start flex-grow ml-10'>
          <p className='text-sm'>Delivery Address</p>
          <h1 className='text-lg font-bold'>Salatiga City, Central Java</h1>
        </div>
        <div className='flex flex-row space-x-3 items-end px-3'>
          <FaShoppingCart />
          <IoMdPerson />
        </div>
      </header>

      <div className='flex items-center px-4 py-3 text-black mt-4 relative'>
        <button className='flex items-center space-x-2'>
          <FaChevronLeft />
        </button>
        <span className='absolute left-10 transform text-lg font-bold text-center'>Details Product</span>
      </div>

      {/* Main Content Section */}
      <main className="container mx-auto my-12 px-8 lg:px-24 grid grid-cols-12 gap-8">
        {/* Product Image */}
        <div className="col-span-12 lg:col-span-6">
          <img
            src={female_scar}
            alt="Female Scar by ArtPal"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-3xl font-bold mt-4 lg:mt-0">Female Scar by ArtPal</h2>
          <p className="text-4xl font-semibold text-red-500 mt-2">$1999,99</p>
          <p className="text-sm text-gray-500">(219 people buy this)</p>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">Choose the Color:</h3>
            <div className="flex gap-3 mt-2">
              {['pink', 'gray', 'green', 'blue', 'black'].map((color) => (
                <button
                  key={color}
                  className={`w-12 h-12 rounded-full bg-${color}-300 relative`}
                  onClick={() => handleColorSelect(color)}
                >
                  {selectedColor === color && (
                    <span className="absolute inset-0 border-4 border-black rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Store Info */}
          <div className="flex items-center mt-6">
            <img
              src={Apple_Logo}
              alt="store"
              className="w-12 h-12"
            />
            <div className="ml-3">
              <p className="font-semibold text-lg">ArtPal Store</p>
              <p className="text-sm text-gray-500">online 12 mins ago</p>
            </div>
            <button className="ml-auto border border-gray-300 rounded-lg px-6 py-2 text-sm">
              Originality
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-8">
            <h3 className="text-xl font-bold">Description of product</h3>
            <p className="text-base text-gray-600 mt-2">
              This is an art developed by ArtPal. It symbolizes how women and females 
              pass through difficulties which may make them get through hard times.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex space-x-5 w-full justify-center'>
            <button className='flex-1 bg-red-600 text-white py-2 rounded-full'>Add Cart</button>
            <button className='flex-1 bg-gray-300 border-gray-300 text-gray-700 rounded-full'>Own Asset</button>
          </div>
        </div>
      </main>

      <footer className='flex justify-around items-center py-4 border-t border-gray-200 mt-10'>
        <button className='flex flex-col items-center text-red-600'>
          <FaHome className='text-lg' />
          <span className='text-xs'>Home</span>
        </button>
        <button className='flex flex-col items-center text-gray-600'>
          <FaHeart className='text-lg' />
          <span className='text-xs'>Wishlist</span>
        </button>
        <button className='flex flex-col items-center text-gray-600'>
          <FaShoppingCart className='text-lg' />
          <span className='text-xs'>Cart</span>
        </button>
        <button className='flex flex-col items-center text-gray-600'>
          <FaSearch className='text-lg' />
          <span className='text-xs'>Search</span>
        </button>
        <button className='flex flex-col items-center text-gray-600'>
          <FaCog className='text-lg' />
          <span className='text-xs'>Setting</span>
        </button>
      </footer>
    </div>
  );
}

export default FemaleScar;
