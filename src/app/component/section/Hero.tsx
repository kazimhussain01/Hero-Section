"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = [
    { src: '/image1.webp', text: 'Expert AC Technician Services' },
    { src: '/image2.webp', text: 'Bright Solutions, Anytime!' },
    { src: '/image3.webp', text: 'Transforming Spaces with Color!' },
    { src: '/image4.webp', text: 'Expert Plumbing, Anytime, Anywhere' },
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <div id='home' className='relative w-full h-[90vh] mt-20 overflow-hidden'>
            <div className='relative w-full h-full'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            fill
                            className='object-cover'
                        />
                        {index === currentIndex && (
                            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10'>
                                <h1 className='text-white text-6xl font-bold drop-shadow-lg transition-opacity duration-1000 opacity-90 font-urbanist'>
                                    {image.text}
                                </h1>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className='absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md flex items-center justify-center z-20'
            >
                <FaArrowLeft size={20} />
            </button>
            <button
                onClick={handleNext}
                className='absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md flex items-center justify-center z-20'
            >
                <FaArrowRight size={20} />
            </button>
        </div>
    );
};

export default HeroSection;
