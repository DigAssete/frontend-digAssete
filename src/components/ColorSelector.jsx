import React, { useState } from 'react';

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="mt-6 flex gap-3 text-center relative">
        <div className="relative">
          <button
            className="w-20 h-12 bg-pink-300 rounded-full"
            onClick={() => handleColorClick('pink')}
          ></button>
          {selectedColor === 'pink' && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="w-20 h-12 bg-gray-300 rounded-full"
            onClick={() => handleColorClick('gray')}
          ></button>
          {selectedColor === 'gray' && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="w-20 h-12 bg-green-300 rounded-full"
            onClick={() => handleColorClick('green')}
          ></button>
          {selectedColor === 'green' && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="w-20 h-12 bg-blue-300 rounded-full"
            onClick={() => handleColorClick('blue')}
          ></button>
          {selectedColor === 'blue' && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="w-20 h-12 bg-black rounded-full"
            onClick={() => handleColorClick('black')}
          ></button>
          {selectedColor === 'black' && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
