import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item'


const RelatedProduct = () => {
    return (
        <>
            <div className="text-center mb-14 relative">
                <h1 className="mb-4 text-3xl font-bold dark:text-white">Related Product</h1>
                <section className="relative">
                    <div className="absolute bottom-0 left-0 right-0 mx-auto w-40 h-1 bg-gray-500 dark:bg-gray-300 z-20"></div>
                </section>
            </div>
            <section className="flex items-center bg-gray-100 dark:bg-gray-800 lg:h-auto">
                <div className="p-4 mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-1 lg:grid-cols-4">

                        {data_product.map((item, i) => {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        })}


                    </div>
                </div>
            </section>

        </>
    )
}

export default RelatedProduct
