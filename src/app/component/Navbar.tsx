import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='h-20'>
            {/* Border Line */}
            <div className='border-b'></div>

            {/* Hero Navbar */}
            <div className='flex justify-around items-center p-3'>
                <Image
                    src="/kazim.ico"
                    alt='logo'
                    height={50}
                    width={50}
                />

                {/* Navbar Pages Name */}
                <div className='flex items-center justify-between gap-x-10 font-urbanist'>
                    <Link
                        href="/"
                        className='flex items-center gap-x-1'>
                        Home
                    </Link>
                    <Link
                        href="/"
                        className='flex items-center gap-x-1'>
                        Pages
                    </Link>
                    <Link
                        href="/component/shop"
                        className='flex items-center gap-x-1'>
                        Shop
                    </Link>
                    <Link
                        href="/"
                        className='flex items-center gap-x-1'>
                        Elements
                    </Link>
                    <Link
                        href="/component/blog"
                        className='flex items-center gap-x-1'>
                        Blog
                    </Link>
                    <Link
                        href="/component/contact"
                        className='flex items-center gap-x-1'>
                        Contact
                    </Link>
                </div>

                {/* Navbar Icons */}
                <div className='flex items-center gap-x-7'>
                    <IoSearch size={25} />
                    <FaRegHeart size={25} />
                    <CgProfile size={25} />
                    <IoCartOutline size={27} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
