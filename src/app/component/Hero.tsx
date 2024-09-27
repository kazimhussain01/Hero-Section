import React from 'react'
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
    return (
        <div className='bg-slate-300 flex justify-between items-center h-full w-full grid-cols-2'>
            {/* Hero Section Text */}
            <div className='leading-[3rem] ml-32'>
                <span className='text-6xl font-bold font-urbanist'>Up To</span>
                <h1 className='text-7xl max-w-[27rem] font-bold font-urbanist'>
                    <span className='text-red-600'>50%</span> Discount
                </h1>
                <h2 className='font-urbanist text-2xl font-semibold'>
                    Summer Lookbook - 2020
                </h2>
                <h3 className='mt-3 max-w-[23.7rem] leading-normal font-urbanist font-semibold'>
                    New Modern Stylish Fashinable Men's Wear Jeans Shirt
                </h3>
                {/* Button */}
                <button className='flex items-center font-urbanist  text-xl border border-black text-black px-5 py-4 rounded-sm font-bold mt-7'>
                    Explore Now
                    <GoArrowUpRight
                        size={23}
                        className='ml-3'
                    />
                </button>
            </div>
            <Image
                className='mr-16'
                src="/hero-img.png"
                alt='hero-image'
                height={950}
                width={850}
            />
        </div>
    )
}

export default Hero
