import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { FaTrash } from "react-icons/fa";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  
  return (
    <>
     <section class="py-24 bg-gray-100 font-poppins dark:bg-gray-700">
        <div class="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div>
            <h2 class="mb-8 text-4xl font-bold dark:text-gray-400">Your Cart</h2>
            <div class="p-6 mb-8 border bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
              <div class="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                <div class="w-full px-4 mb-6 md:w-4/6 lg:w-4/12 md:mb-0">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">Product name</h2>
                </div>
                <div class="hidden px-4 lg:block lg:w-2/12">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">Price</h2>
                </div>
                <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">Quantity</h2>
                </div>

                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400"> Total</h2>
                </div>
                <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">Remove</h2>
                </div>
              </div>

              {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                  return (
                    <div class="py-4 mb-8 border-t border-b border-gray-200 dark:border-gray-700">
                      <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                        <div class="w-full px-4 mb-6 md:w-4/6 lg:w-4/12 md:mb-0">
                          <div class="flex flex-wrap items-center -mx-4">
                            <div class="w-full px-4 mb-3 md:w-1/3">
                              <div class="w-full h-96 md:h-24 md:w-24">
                                <img src={e.image} alt=""
                                  class="object-cover w-full h-full" />
                              </div>
                            </div>
                            <div class="w-2/3 px-4">
                              <h2 class="mb-2 text-xl font-bold dark:text-gray-400">
                                {e.name}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div class="hidden px-4 lg:block lg:w-2/12">
                          <p class="text-lg font-bold text-blue-500 dark:text-gray-400">${e.new_price}</p>
                          <span class="text-xs text-gray-500 line-through dark:text-gray-400">
                            {e.old_price}
                          </span>
                        </div>
                        <div class="w-auto px-4 md:w-1/6 lg:w-2/12 ">
                          <div
                            class="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md dark:border-gray-700 ">
                            <button className='px-4 py-3'>
                              {cartItems[e.id]}
                            </button>

                          </div>
                        </div>
                        <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                          <p class="text-lg font-bold text-blue-500 dark:text-gray-400">
                            {e.new_price * cartItems[e.id]}
                          </p>
                        </div>
                        <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                          <p class="text-lg cursor-pointer font-bold text-red-500 dark:text-gray-400">
                            <FaTrash onClick={() => { removeFromCart(e.id) }}  className='mx-auto mr-4'/>
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div class="flex flex-wrap justify-between">
              <div class="w-full px-4 mb-4 lg:w-1/2 ">
                <div class="flex flex-wrap items-center gap-4">
                  <span class="text-gray-700 dark:text-gray-400">Apply Coupon</span>
                  <input type="text"
                    class="w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1 dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-400 dark:bg-gray-800"
                    placeholder="x304k45" required />
                  <button
                    class="inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-blue-500 rounded-md lg:w-32 hover:bg-blue-600">Apply</button>
                </div>
              </div>
              <div class="w-full px-4 mb-4 lg:w-1/2 ">
                <div class="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-gray-50 md:p-8">
                  <h2 class="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-400">Order Summary</h2>
                  <div
                    class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300 dark:border-gray-700 ">
                    <span class="text-gray-700 dark:text-gray-400">Subtotal</span>
                    <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">${getTotalCartAmount()}</span>
                  </div>
                  <div class="flex items-center justify-between pb-4 mb-4 ">
                    <span class="text-gray-700 dark:text-gray-400 ">Shipping</span>
                    <span class="text-xl font-bold text-gray-700 dark:text-gray-400 ">Free</span>
                  </div>
                  <div class="flex items-center justify-between pb-4 mb-4 ">
                    <span class="text-gray-700 dark:text-gray-400">Order Total</span>
                    <span class="text-xl font-bold text-gray-700 dark:text-gray-400">${getTotalCartAmount()}</span>
                  </div>
                  <h2 class="text-lg text-gray-500 dark:text-gray-400">We offer:</h2>
                  <div class="flex items-center gap-2 mb-4 ">
                    <a href="#">
                      <img src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png" alt=""
                        class="object-cover h-16 w-26" />
                    </a>
                    <a href="#">
                      <img src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png" alt=""
                        class="object-cover h-16 w-26" />
                    </a>
                    <a href="#">
                      <img src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png" alt=""
                        class="object-cover h-16 w-26" />
                    </a>
                  </div>
                  <div class="flex items-center justify-between ">
                    <button
                      class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default CartItems
