import React from 'react'

const DescriptionBox = () => {

    return (
        <>
            <section className="flex items-center py-4 bg-gray-100 lg:py-2 font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto text-left lg:py-10 ">

                    <div className="p-4 mb-6 rounded-md bg-gray-50 dark:bg-gray-900">
                        <div className="flex items-center justify-between">
                            <a href="#"
                                className="inline-block mb-2 text-xl font-bold text-blue-500 hover:text-blue-600 dark:text-gray-400">
                                Description
                            </a>
                            <span className="mb-2 text-xs mt-4 text-gray-500 dark:text-gray-400">122</span>
                        </div>
                        <h2 className="mb-4 text-xl font-semibold text-gray-600 dark:text-gray-300">
                            Review </h2>
                        <div className="flex flex-wrap items-center mb-4 ">
                            <a href="#"
                                className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-4 h-4 mr-1 bi bi-folder" viewBox="0 0 16 16">
                                    <path
                                        d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                </svg>$10,000 /year
                            </a>
                            <a href="#"
                                className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-4 h-4 mr-1 bi bi-calendar" viewBox="0 0 16 16">
                                    <path
                                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>Part time
                            </a>
                            <a href="#"
                                className="flex items-center mb-2 mr-4 text-sm text-gray-500 md:mb-0 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-4 h-4 mr-1 bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>Kathmandu
                            </a>
                        </div>
                        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                            Explore a world of endless possibilities with our vibrant and diverse e-commerce platform. Our online marketplace offers a curated selection of high-quality products that cater to your every need. From cutting-edge electronics to trendy fashion, we bring together a variety of brands and sellers to ensure you find the perfect items that complement your lifestyle.

                            Discover the convenience of hassle-free shopping with our user-friendly interface and secure payment options. Whether you're on the lookout for the latest tech gadgets, fashionable apparel, or home essentials, our e-commerce destination has something for everyone. Dive into a seamless shopping experience where you can browse, compare, and make informed decisions from the comfort of your home.

                            Our commitment to customer satisfaction is evident in our swift delivery services and dedicated customer support. Join our thriving community of savvy shoppers and elevate your online shopping experience. With an extensive range of products and competitive prices, we strive to make your e-commerce journey enjoyable, reliable, and fulfilling. Welcome to a digital marketplace where your desires meet convenience – shop with us and transform the way you explore and acquire the things you love.
                        </p>
                        <div className="flex flex-wrap items-center ">
                            <a href="#"
                                className="flex items-center px-4 py-2 mb-2 mr-4 text-sm text-gray-100 bg-blue-500 rounded-md md:mb-0 hover:bg-blue-600 dark:text-gray-100 dark:hover:bg-blue-500 dark:bg-blue-400">
                                Suggest
                            </a>
                            <span className="flex items-center text-sm text-gray-400 md:ml-auto dark:text-gray-400 ">
                                Suggest reward: <span className="ml-2"> 500 USD</span>
                            </span>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default DescriptionBox
