"use client";
import React from 'react';
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import { FiCheck } from 'react-icons/fi';

const ReadyToTrySection = () => {
    return (
        <div className='py-7 flex flex-col gap-10'>
            <div className='text-6xl font-bold text-center font-urbanist'>Ready to Our Service</div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-stretch'>
                {/* How It Works Section */}
                <div className='flex flex-col p-10 md:p-14 lg:p-20 gap-4 h-full bg-gray-100 rounded-xl'>
                    <h2 className='text-3xl lg:text-4xl font-bold font-urbanist'>How It Works</h2>
                    <ul className='mt-5 text-gray-600 flex-grow space-y-4 text-sm md:text-md font-urbanist font-medium'>
                        {['Call or Book Online', 'We Schedule the Visit', 'Online Service Hub Arrives & Completes the Job', 'Pay When the Job is Done', 'Follow up Feedback Call to Ensure Satisfaction'].map((text, index) => (
                            <li key={index} className='flex items-center gap-4'>
                                <div className='w-6 h-6 flex items-center justify-center border-2 border-yellow-500 rounded-full'>
                                    <FiCheck className='text-yellow-500' />
                                </div>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Center Image Section */}
                <div className='flex h-full justify-center items-center'>
                    <Image src='/repaire.webp' alt='How It Works' width={500} height={500} className='rounded-xl max-w-full h-auto' />
                </div>

                {/* Want to Talk Section */}
                <div className='flex flex-col gap-3 h-full bg-[#FFA500] pt-16 md:pt-20 lg:pt-28 pl-8 md:pl-10 lg:pl-14 rounded-xl'>
                    <h2 className='text-3xl lg:text-4xl font-medium font-urbanist text-white'>Want to Talk?</h2>
                    <div className='flex items-center gap-3 text-white'>
                        <span className='text-xl md:text-2xl lg:text-3xl font-extrabold'>Call us on +123 456 7890</span>
                    </div>
                    <h3 className='text-sm md:text-base lg:text-lg font-urbanist flex-grow max-w-sm text-white lg:pt-8'>We are happy to answer any queries you may have. You may also contact us from the link below:</h3>
                    <button className='mb-10 md:mb-12 lg:mb-14 bg-white text-black px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 rounded-full font-medium hover:bg-[#FFA500] hover:border-white hover:text-white font-urbanist border-2 transition self-start'>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadyToTrySection;
