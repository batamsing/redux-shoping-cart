import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/slice/cart';
export default function ProductTile({ item }) {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);

    function handleAddCart() {
        dispatch(addToCart(item))
    }

    function handleRemoveCart() {
        dispatch(removeFromCart(item.id))
    }

    return (
        <div className='relative flex flex-col items-center w-[200px] h-[300px] rounded-md shadow-lg p-3'>
            <div className='w-20 rounded-sm overflow-hidden'>
                <img src={item?.image} alt={item?.category} />
            </div>
            <h3 className="text-gray-700 text-sm mt-2" >{item.title}</h3>
            <div className='absolute flex flex-col items-center bottom-2 font-medium'>
                <p className='font text-red-600 font-bold my-2'>${item.price}.00</p>
                {
                    cart.some(product => product.id === item.id) ? 
                    <button className='rounded-full bg-orange-400 text-white font-semibold w-36 py-1'
                        onClick={handleRemoveCart}
                    >
                        Remove from Cart
                    </button> :
                    <button className='rounded-full bg-orange-400 text-white font-semibold w-36 py-1'
                        onClick={handleAddCart}
                    >
                        Add to Cart
                    </button>
                }
                
            
            </div>

        </div>
    )
}
