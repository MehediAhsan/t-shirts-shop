import React from 'react';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price} = tshirt;
    return (
        <div className=" bg-white rounded shadow-sm hover:shadow md:text-center">
          <div className="relative">
            <img
              className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
              src={picture}
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
          </div>
          <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              {name}
            </h5>
            <p className="mb-5 text-gray-700">
              Price: {price}
            </p>
            <button onClick={() => handleAddToCart(tshirt)}
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Buy Now
            </button>
          </div>
        </div>
    );
};

export default TShirt;