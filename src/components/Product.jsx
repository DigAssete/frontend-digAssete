import React from 'react'
import { FaShoppingCart, FaChevronLeft, FaHome, FaHeart, FaSearch, FaCog } from 'react-icons/fa';
import { CgDetailsMore } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import qr from '../assets/qr.png';

const Product = () => {
  return (
    <>
    <div className="flex flex-col bg-white">
        <header className='flex justify-bewteen items-center bg-red-600 text-white px-4 py-3'>
            <button className='flex items-center space-x-2'>
                <CgDetailsMore/>
            </button>
            <div className='flex flex-col items-start flex-grow ml-10'>
            <p className='text-sm'>Delivery Address</p>
            <h1 className='text-lg font-bold'>Salatiga City, Central Java</h1>
            </div>
            <div className='flex flex-row space-x-3 items-end px-3'>
                <FaShoppingCart/>
                <IoMdPerson/>
            </div>
        </header>
        <div className='flex  items-center px-4 py-3 text-black mt-4 relative'>
            <button className='flex items-center space-x-2'>
                <FaChevronLeft/>
            </button>
            <span className='absolute left-1/2 transform  text-lg font-bold'>Female Scar</span>
            {/* <div className='flex justify-end px-4 py-3 ml-96'>
            <button className='relative '>
                <FaShoppingCart className='text-lg'/>
                <span className='absolute -top-4 -right-1 bg-red-500 rounded-full px-1 text-xs'>2</span>
            </button>
            </div> */}
        </div>

                <main className='flex-1 flex flex-col items-center justify-center px-6 py-8'>
                    <img src={qr} alt="QR Code" className='w-40 h-40 mb-4' />
                    <h2 className='text-xl font-semibold mb-2'>Female Scar by Artpal</h2>
                    <p className='text-gray-600 mb-6 text-center'>Scan QR Code to it's authenticity</p>
                     <div className='flex space-x-4 w-full justify-center'>
                        <button className='flex-1 bg-red-600 text-white py-2 rounded-full'>Add Cart</button>
                        <button className='flex-1 bg-gray-300 border-gray-300 text-gray-700 rounded-full'>Buy now</button>
                     </div>
                </main>

                <footer className='flex justify-around items-center py-4 border-t border-gray-200 mt-10'>
                    <button className='flex flex-col items-center text-red-600'>
                        <FaHome className='text-lg'/>
                        <span className='text-xs'>Home</span>
                    </button>
                    <button className='flex flex-col items-center text-gray-600'>
                        <FaHeart className='text-lg'/>
                        <span className='text-xs'>My assets</span>
                    </button>
                    <button className='flex flex-col items-center text-gray-600'>
                        <FaShoppingCart className='text-lg'/>
                        <span className='text-xs'>Cart</span>
                    </button>
                    <button className='flex flex-col items-center text-gray-600'>
                        <FaSearch className='text-lg'/>
                        <span className='text-xs'>Search</span>
                    </button>
                    <button className='flex flex-col items-center text-gray-600'>
                        <FaCog className='text-lg'/>
                        <span className='text-xs'>Setting</span>
                    </button>
                </footer>

    </div>
    </>
  )
}

export default Product