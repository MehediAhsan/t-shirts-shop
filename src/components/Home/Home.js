import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            alert("already added");
        }
        else{
            const newCart = [...cart,tshirt];
            setCart(newCart)
        }    
    }

    const handleRemoveItem = (tshirt) => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 p-8'>
                <h1 className='text-2xl font-bold my-20'>Total t-shits: {tshirts.length}</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
                    }
                </div>
            </div>
            <div className='my-20'>
                <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
            </div>
        </div>
    );
};

export default Home;