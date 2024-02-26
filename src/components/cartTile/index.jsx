import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slice/cart';

export default function CardTile({ item }) {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(removeFromCart(item.id))
    }

    return (
        <div className='flex flex-row gap-4 h-48 border-b-2 my-3 px-3'>
            <div className='w-28 overflow-hidden'>
                <img className='w-full' src={item?.image} alt='Product Image' />
            </div>
            <div>
                <p>{item?.title}</p>
                <span className='text-gray-700 text-sm'>In stock</span>
                <div className='flex flex-row mt-2 gap-5'>
                    <button className='bg-transparent border-x-2 px-2 border-slate-500 hover:text-red-600'
                        onClick={handleDelete}
                    >Delete</button>

                </div>
            </div>
            <div className='w-32 text-right font-bold flex-1'>
                <span>$ {item.price.toFixed(2)}</span>
            </div>
        </div>
    )
}
