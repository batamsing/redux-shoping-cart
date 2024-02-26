import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  
  return (
    <div className='p-3 flex items-end'>
        <h1 className=" text-rose-700 text-4xl font-bold">Shoping Cart with Redux</h1>
        <ul className='flex font-semibold gap-x-5 ml-auto'>
            <li><NavLink to={'/'}>HOME</NavLink></li>
            <li><NavLink to={'/cart'}>CART</NavLink></li>
        </ul>
    </div>
  )
}
