import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Navbartop = () => {
    return (
        < div className='flex justify-around h-16'>
            {/* 1st Column */}
            {/* support example part */}
            <div className='flex justify-between items-center' >
                <div className='mr-5 flex justify-between items-center'>
                    <MdOutlineMail className='mr-2' />
                    <h1 className='font-urbanist'>support@example.com</h1>
                </div>
                {/* World example part */}
                <div className='mr-5 flex justify-between items-center'>
                    <TbWorld className='mr-2' />
                    <h1 className='font-urbanist'>Klenie Pierbard 8-6 2249 KV Vries</h1>
                </div>
            </div >

            {/* 2nd column */}
            <div className='flex items-center justify-between gap-x-5'>
                {/* Social Icons */}
                <div className='flex gap-x-5 border-e pr-5'>
                    <FaFacebookF size={24} />
                    <CiTwitter size={25} />
                    <CiInstagram size={25} />
                    <FaGooglePlusG size={25} />
                </div>
                {/* USA World Logo & Currency */}
                <div className='flex justify-between items-center gap-x-3'>
                    <img src="https://static.vecteezy.com/system/resources/previews/015/081/930/original/england-3d-rounded-flag-with-transparent-background-free-png.png"
                        alt="england logo"
                        height={22}
                        width={22}
                    />
                    <h1 className='font-urbanist'>English</h1>
                    <span>
                        <FaAngleDown />
                    </span>
                    {/* for Currency */}
                    <h1 className='font-urbanist'>USD</h1>
                    <span>
                        <FaAngleDown />
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Navbartop
