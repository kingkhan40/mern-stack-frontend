import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <>
      <div className="flex justify-center text-center w-full mb-14 relative">
        <div className="max-w-7xl my-5 mx-auto text-center">

          <img src={props.banner} alt="" />
        </div>
      </div>
      <div className=" w-full bg-slate-100">
        <div className="flex flex-col items-center bg-gray-100 p-4 md:flex-row md:justify-around">
          <div className="text-gray-700 text-center px-4 py-2 mb-2 md:mb-0">
            <span>Showing 1-12 of 36</span> Products
          </div>
          <div className="text-gray-700 flex text-center px-4 py-2 mb-2 md:mb-0">
            <div className="relative">
              <select
                name="cars"
                id="cars"
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-8 leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="volvo">12</option>
                <option value="saab">24</option>
                <option value="mercedes">36</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div></div>


      <section className="flex items-center bg-gray-100 dark:bg-gray-800 lg:h-auto">
        <div className="p-4 mx-auto max-w-screen-2xl">

          <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-1 lg:grid-cols-4">

            {all_product.map((item, i) => {
              if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else {
                return null
              }
            })}

          </div>
          <a
            href=""
            className="relative z-30 flex items-center mx-auto justify-center w-48 px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-full cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white"
          >
            <span className="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"></span>
            <span className="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"></span>
            Explore Now
          </a>
        </div>
      </section>
    </>
  )
}

export default ShopCategory
