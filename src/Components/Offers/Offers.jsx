import React from 'react';
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="py-20 w-full dark:bg-gray-700">
      <div className="max-w-7xl px-4 rounded-md bg-gradient-to-t from-purple-100 to-pink-200 mx-auto md:px-0 font-poppins">
        <div className="flex flex-wrap mx-auto items-center px-4">
          <div className="w-full px-8 mb-16 md:w-1/2 md:mb-0">
            <h2 className="flex gap-7 mb-6 text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-3xl lg:text-6xl">
              Exclusive
            </h2>
            <p className="flex gap-7 mb-6 text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-3xl lg:text-6xl">
              Offer For You
            </p>
            <span className="mb-4 text-xl font-bold leading-none text-black capitalize dark:text-red-200">
              Only One Best Seller Offer
            </span>
            <br />
            <a href="#" className="inline-flex gap-4 items-center justify-center my-3 px-20 py-3 text-gray-100 bg-red-600 rounded-full shadow hover:text-gray-100 hover:bg-red-500">
              Check Now
            </a>
          </div>
          <div className="w-full px-4 md:w-1/2 flex justify-center">
            <div className="relative mx-auto max-w-max">
              <div className="relative overflow-hidden rounded-7xl">
                <img src={exclusive_image} alt="" className="relative z-10 object-cover w-96 h-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
