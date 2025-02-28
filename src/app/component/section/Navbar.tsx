"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="lg:h-20 -mt-14 lg:mt-0 fixed w-full z-50 top-16 left-0 bg-white shadow-md">
            <div className="flex items-center justify-between px-5 md:px-10 lg:px-20 h-full">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/online-service-hub1.png"
                        alt="logo"
                        height={85}
                        width={85}
                    />
                </div>

                {/* Navbar Links */}
                <div className="hidden lg:flex items-center gap-x-10 font-urbanist text-lg font-bold">
                    <a href="#home" className="hover:text-blue-600 transition">
                        Home
                    </a>
                    <a href="#about" className="hover:text-blue-600 transition">
                        About Us
                    </a>
                    <a href="#services" className="hover:text-blue-600 transition">
                        Service
                    </a>
                    <a href="#choose" className="hover:text-blue-600 transition">
                        Choose Us
                    </a>
                    <a href="#contact" className="hover:text-blue-600 transition">
                        Contact
                    </a>
                </div>

                {/* Icons */}
                <div className="hidden lg:flex items-center gap-x-7">
                    <IoSearch size={25} className="cursor-pointer" />
                    <FaRegHeart size={25} className="cursor-pointer" />
                    <CgProfile size={25} className="cursor-pointer" />
                    <IoCartOutline size={27} className="cursor-pointer" />
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
                    <div className="bg-white w-3/4 h-3/4 p-10 flex flex-col items-center justify-center gap-5 text-lg font-bold rounded-lg shadow-lg">
                        <a href="#home" onClick={toggleMenu} className="hover:text-blue-600 transition">
                            Home
                        </a>
                        <a href="#about" onClick={toggleMenu} className="hover:text-blue-600 transition">
                            About Us
                        </a>
                        <a href="#services" onClick={toggleMenu} className="hover:text-blue-600 transition">
                            Services
                        </a>
                        <a href="#choose" onClick={toggleMenu} className="hover:text-blue-600 transition">
                            Choose Us
                        </a>
                        <a href="#contact" onClick={toggleMenu} className="hover:text-blue-600 transition">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
