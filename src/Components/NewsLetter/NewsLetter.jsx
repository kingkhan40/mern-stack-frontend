import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <div className="py-20 w-full dark:bg-gray-700">
                <div className="max-w-7xl px-4 py-10 rounded-md bg-gradient-to-t from-purple-100 to-pink-200 mx-auto md:px-0 font-poppins">
                    <div class="max-w-5xl mx-auto text-center">
                        <h1
                            class="max-w-4xl mx-auto mt-1 mb-6 text-3xl font-semibold dark:text-gray-300 sm:text-4xl lg:text-5xl ">
                            Get Exclusive Offer On Your Email.</h1>
                        <p class="mb-12 text-lg font-medium leading-8 text-gray-500 dark:text-gray-400">
                           Subscribe To Our Newsletter And Stay Updated
                        </p>
                        <label
                            className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                            for="search-bar">
                            <input id="search-bar" placeholder="your keyword here"
                                className="px-6 py-2 w-full rounded-xl flex-1 outline-none bg-white" />
                            <button
                                className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all disabled:opacity-70">

                                <div className="relative">

                                    <div
                                        className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                        <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                    </div>

                                    <div className="flex items-center transition-all opacity-1 valid:"><span
                                        className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        Search
                                    </span>
                                    </div>

                                </div>

                            </button>
                        </label>
                       
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsLetter
