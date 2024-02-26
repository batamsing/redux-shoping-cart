import React, { useEffect, useState } from 'react'
import CardTile from '../../components/cartTile';
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../../store/slice/cart';
import { Link } from "react-router-dom";

export default function Cart() {
    const [totalCart, setTotalCart] = useState(0);
    const { cart } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curVal) => acc + curVal.price, 0));
    }, [cart])

    function handleBuy() {
        dispatch(resetCart())
        alert('Successfully Placed your Order!')
    }
    return (
        <div className='w-full p-5 lg:w-3/4 mx-auto'>
            {
                cart.length ?
                    <div className='flex gap-4 h-screen'>
                        <div className='flex-1 overflow-y-auto border-2 border-yellow-300 rounded-md'>
                            <div className='flex justify-between items-end py-6 bg-yellow-100 px-3'>
                                <h1 className='text-3xl font-semibold text-slate-700'>My Shopping Cart</h1>
                                <span>Price</span>
                            </div>
                            
                            {
                                cart.map(item => {
                                    return <CardTile item={item} key={item.id} />;
                                })
                            }
                        </div>

                        <div className='sticky flex flex-col items-center bottom-0 w-60 text-center'>
                            <h2 className='font-semibold text-2xltext-red-600'>
                                Total Amount: <br/>                            
                            </h2>
                            <span className='font-bold'>{`$ ${totalCart}`}</span>
                            <button className='w-48 bg-orange-600 text-white rounded-full font-semibold py-1' onClick={handleBuy}>Proceed to Buy</button>
                        </div>

                    </div> :
                    <div className='mt-10'>
                        <p className='my-10'>Your shopping cart is empty! Please add some items to your cart before proceeding with checkout.</p>
                            <Link to='/'><span className='bg-orange-500 text-white text-2xl rounded-full px-5 text-center py-2'>Continue Shopping</span></Link>
                    </div>
            }
        </div>
    )
}
