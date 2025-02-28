"use client"
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center justify-center p-6 md:p-10 mt-10 md:mt-10 gap-6 md:gap-10 bg-white'>
            {/* Image Section */}
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image
                    src='/muzammil.jpg'
                    alt='About Us'
                    width={570}
                    height={570}
                    className='rounded-2xl shadow-lg object-cover max-w-full h-auto'
                />
            </div>

            {/* Text Section */}
            <div id='about' className='w-full lg:w-1/2 space-y-6 md:space-y-10 mb-10 lg:mb-7 lg:max-w-[44rem] lg:-ml-6 font-urbanist font-semibold'>
                <h2 className='font-urbanist text-3xl md:text-6xl font-bold text-gray-800'>About Us</h2>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                    Welcome to Bahi Cloth House, where fashion meets tradition and quality speaks for itself. Established with a vision to redefine the clothing industry, we are a dedicated team passionate about bringing you the finest in men’s and women’s apparel. At Bahi Cloth House, we believe that clothing is not just about fabric and threads; it’s about expressing individuality, embracing comfort, and celebrating style.
                </p>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                    Our journey began with a simple idea: to create a space where fashion is accessible, affordable, and always in vogue. Over the years, we have evolved into a trusted name, offering a wide range of clothing that blends classic elegance with contemporary trends. From everyday essentials to statement pieces, our collection is thoughtfully designed to cater to diverse tastes and occasions.
                </p>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                    Our journey began with a simple idea: to create a space where fashion is accessible, affordable, and always in vogue.
                </p>
                <p className='text-gray-600 text-base md:text-lg leading-relaxed'>
                    Customer satisfaction is at the core of everything we do. We focus on providing exceptional service, from easy online browsing to fast and reliable delivery. Thank you for being a part of our journey!
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
