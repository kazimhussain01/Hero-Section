"use client"
import React from 'react';
import Image from 'next/image';

const WhyChooseUsSection = () => {
    const points = [
        { title: 'Quality Services', description: 'We provide top-notch services that meet industry standards.' },
        { title: 'Affordable Prices', description: 'Get the best value for your money with competitive pricing.' },
        { title: 'Experienced Team', description: 'Our team consists of skilled professionals with years of experience.' },
        { title: 'Timely Delivery', description: 'We ensure projects are completed within the agreed timelines.' },
        { title: 'Customer Satisfaction', description: 'Our priority is to exceed customer expectations every time.' },
        { title: '24/7 Support', description: 'We are available round the clock to assist you with any queries.' }
    ];

    return (
        <div id='choose' className='py-10 px-5 lg:px-36 flex flex-col lg:flex-row items-center gap-10'>
            {/* Left Side Image */}
            <div className='flex-1'>
                <Image src='/labor.webp' alt='Why Choose Us' width={800} height={700} className='rounded-xl' />
            </div>

            {/* Right Side Content */}
            <div className='flex-1'>
                <h2 className='text-5xl font-bold mb-5 font-urbanist'>Why Choose Us</h2>
                <h3 className='text-2xl font-semibold mb-8 text-gray-600 font-urbanist'>Delivering Excellence in Every Project</h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {points.map((point, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <div className='flex items-center gap-4'>
                                <div className='w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-500 bg-white text-yellow-500 font-bold text-lg'>
                                    {index + 1}
                                </div>
                                <p className='text-lg font-bold font-urbanist'>{point.title}</p>
                            </div>
                            <p className='text-sm text-gray-500 font-urbanist pl-14 font-medium'>{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSection;
