import React from 'react';
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from '../Assets/arrow.png'
import heroImage from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <>
            <div className="py-20 dark:bg-gray-700">
                <div className="max-w-7xl h-full px-4 mx-auto md:px-0 font-poppins">
                    <div className="flex flex-wrap items-center px-4">
                        <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
                            <span
                                className="inline-block mb-4 text-xl font-bold leading-none text-red-500 capitalize dark:text-red-200">
                                Meet Arrivels Only
                            </span>
                            <h2
                                className="flex gap-7 mb-6 text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-3xl lg:text-7xl">
                                New <img src={hand_icon} className='w-16' alt="" />
                            </h2>
                            <p className="flex gap-7 mb-6 text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-gray-300 md:text-3xl lg:text-7xl">
                                Collection
                                <br />
                                For Every One
                            </p>
                            <a href="#"
                                className="inline-flex gap-4 items-center justify-center px-8 py-3 text-gray-100 bg-red-600 rounded-full shadow hover:text-gray-100 hover:bg-red-500 ">
                                Latest Collection <img src={arrow_icon} alt="" /></a>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="relative mx-auto md:mr-0 max-w-max">

                                <div className="relative overflow-hidden rounded-7xl">
                                    <img src={heroImage} alt=""
                                        className="relative z-10 object-cover w-96 h-full rounded-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Hero
