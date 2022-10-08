import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h1 className={`text-2xl font-bold my-5 p-4 ${cart.length === 2 ? 'bg-red-500' : 'bg-yellow-500'}`}>Order Summary</h1>
            <h2>Order Quantity :{cart.length}</h2>
            <div className='mt-5'>
                {
                    cart.map(tshirt => <p className='mb-3' 
                        key={tshirt._id}
                    >
                            {tshirt.name}
                            <button onClick={() => handleRemoveItem(tshirt)} className='text-red-500 ml-5 font-bold'>X</button>
                    </p>)
                }
            </div>
            {
                cart.length === 0 && <p className='text-blue-500'>Buy something</p> 
            }
        </div>
    );
};

export default Cart;