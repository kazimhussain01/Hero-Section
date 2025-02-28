import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Navbartop = () => {
    return (
        <div className='hidden lg:flex fixed top-0 left-0 w-full z-50 bg-white justify-around h-16 border-b border-black/30'>
            {/* 1st Column */}
            <div className='flex justify-between items-center' >
                <div className='mr-5 flex justify-between items-center'>
                    <MdOutlineMail className='mr-2' />
                    <h1 className='font-urbanist'>onlineservicehubofficial@gmail.com</h1>
                </div>
                <div className='mr-5 flex justify-between items-center'>
                    <CiLocationOn className='mr-2' />
                    <h1 className='font-urbanist'>Civil Area, Okara Cantt, Pakistan</h1>
                </div>
            </div >

            {/* 2nd Column */}
            <div className='flex items-center justify-between gap-x-5'>
                <div className='flex gap-x-5 border-e pr-5'>
                    <FaFacebookF size={24} />
                    <CiTwitter size={25} />
                    <CiInstagram size={25} />
                    <FaGooglePlusG size={25} />
                </div>
                <div className='flex justify-between items-center gap-x-3'>
                    <img src="https://e7.pngegg.com/pngimages/422/640/png-clipart-pakistan-flag-grass-symbol-green-pakistan-flag-logo-thumbnail.png"
                        alt="Pakistan Flag"
                        height={22}
                        width={22}
                    />
                    <h1 className='font-urbanist'>Urdu</h1>
                    <span>
                        <FaAngleDown />
                    </span>
                    <h1 className='font-urbanist'>PKR</h1>
                    <span>
                        <FaAngleDown />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbartop