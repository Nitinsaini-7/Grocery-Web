import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className=' relative mt-24'>
        <img src={assets.bottom_banner_image} alt="" className='w-full hidden md:block' />
        <img src={assets.bottom_banner_image_sm} alt="" className='w-full md:hidden' />

        <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
            <div>
                <h1 className='text-3xl md:text-5xl font-bold'>Why we are the best</h1>
            {
                features.map((item,index)=>(
                    <div key={index} className=' flex items-center gap-4 mt-2'>
                        <img src={item.icon} className='w-8 md:w-10' alt="" />
                        <h3 className=' text-lg md:text-xl font-semibold'>{item.title}</h3>
                        <p className=' text-sm'>{item.description}</p>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default BottomBanner