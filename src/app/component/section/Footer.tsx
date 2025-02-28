import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#343C3E] text-white dark:bg-gray-900 mt-10">
      <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
            <a href="/" className="flex items-center space-x-3">
              <Image
                src="/online-service-hub1.png"
                alt="online service hub logo"
                width={120}
                height={120}
              />
              <span className="text-2xl md:text-3xl font-bold whitespace-nowrap font-urbanist">
                Online Service Hub
              </span>
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            
            {/* Services Section */}
            <div>
              <h2 className="mb-4 text-lg md:text-xl font-medium uppercase font-urbanist">
                Our Services
              </h2>
              <ul className="text-sm space-y-2 font-urbanist">
                <li>Construction Service</li>
                <li>AirCon & HVAC Service</li>
                <li>Cleaning Service</li>
                <li>Electrical Service</li>
                <li>Painter Service</li>
                <li>Plumbing Service</li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h2 className="mb-4 text-lg md:text-xl font-medium uppercase font-urbanist">
                Support
              </h2>
              <ul className="text-sm space-y-2 font-urbanist">
                <li>Support Career</li>
                <li>24H Service</li>
                <li>Quick Chat</li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div>
              <h2 className="mb-4 text-lg md:text-xl font-medium uppercase font-urbanist">
                Contact Info
              </h2>
              <ul className="space-y-3 text-sm font-urbanist">
                <li className="flex items-center space-x-2">
                  <CiLocationOn className="text-white text-xl shrink-0" />
                  <span>Civil Area, Okara Cantt, Pakistan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MdOutlineMail className="text-white text-xl shrink-0" />
                  <span>kazimofficial347@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoMdTime className="text-white text-xl shrink-0" />
                  <span>Mon-Sat: 09:00 AM - 5:00 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-white text-xl shrink-0" />
                  <span>051-848-7800</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;