"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoSearch, IoMenu } from "react-icons/io5";
import { FaUserCircle, FaHome, FaTags } from "react-icons/fa";
import { BsPatchQuestionFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center py-4 px-6 bg-white border-b border-gray-300">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DevQuery
        </Link>
        <div className="flex items-center flex-grow mx-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Search..."
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2">
            Search
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center text-gray-700 hover:text-blue-600">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link href="/questions" className="flex items-center text-gray-700 hover:text-blue-600">
            <BsPatchQuestionFill className="mr-1" /> Questions
          </Link>
          <Link href="/tags" className="flex items-center text-gray-700 hover:text-blue-600">
            <FaTags className="mr-1" /> Tags
          </Link>
          <Link href="/login" className="flex items-center text-gray-700 hover:text-blue-600">
            <FaUserCircle className="mr-1" /> Login
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center py-4 px-6 bg-white border-b border-gray-300">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DevQuery
        </Link>
        <button onClick={toggleDrawer} className="bg-transparent text-black">
          <IoMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white shadow-lg z-50">
          <div className="flex justify-between items-center py-4 px-6 border-b border-gray-300">
            <span className="text-2xl font-bold">DevQuery</span>
            <button onClick={toggleDrawer} className="text-black">
              Close
            </button>
          </div>
          <div className="px-6 py-4">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500 mb-4"
              placeholder="Search..."
            />
            <Link href="/" className="block text-gray-700 hover:text-blue-600 py-2">
              <FaHome className="mr-1 inline" /> Home
            </Link>
            <Link href="/questions" className="block text-gray-700 hover:text-blue-600 py-2">
              <BsPatchQuestionFill className="mr-1 inline" /> Questions
            </Link>
            <Link href="/tags" className="block text-gray-700 hover:text-blue-600 py-2">
              <FaTags className="mr-1 inline" /> Tags
            </Link>
            <Link href="/login" className="block text-gray-700 hover:text-blue-600 py-2">
              <FaUserCircle className="mr-1 inline" /> Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;