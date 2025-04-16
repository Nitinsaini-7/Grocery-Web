import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' relative -z-30'>
        <img src={assets.main_banner_bg} className=' w-full hidden md:block' alt="" />
        <img src={assets.main_banner_bg_sm} className=' w-full md:hidden' alt="" />

        <div className=' absolute inset-0 flex flex-col items-center justify-end md:items-start md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
            <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

        <div className=' flex items-center mt-6 font-medium'>
            <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded cursor-pointer'>
            Shop Now
                <img src={assets.white_arrow_icon} className='md:hidden transition group-focus:translate-x-1' alt="" />
            </Link>

            <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3  hover:bg-indigo-600 transition text-white rounded cursor-pointer'>
            Explor More
                <img src={assets.black_arrow_icon} className='md:hidden transition group-focus:translate-x-1' alt="" />
            </Link>

            
        </div>
        </div>
    </div>
  )
}

export default Header