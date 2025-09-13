"use client";
import Link from "next/link";
import React from "react";

const ClassesDetails = ({ title, description, image, price, buttonText }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col mx-auto">
      <div className="relative">
        <img
          className="w-full h-40 sm:h-48 md:h-56 object-cover"
          src={image}
          alt="Card Header"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
            Pre-exam
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">
            Live Classes
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full">
            Expert Teachers
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h2>
          <span className="text-gray-700 font-medium text-sm sm:text-base">{price}</span>
        </div>
        <a href="#" className="text-xs sm:text-sm text-blue-600 mb-2 block">
          Additional info
        </a>

        <p className="text-gray-600 text-xs sm:text-sm mb-4 flex-1">
          {description}
        </p>

        {/* Members */}
        <div className="flex items-center mb-4">
          <div className="flex -space-x-2">
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/prince.jpg"
              alt="user1"
            />
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/2.jpg"
              alt="user2"
            />
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/3.jpg"
              alt="user3"
            />
            <img
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
              src="/Mentors/4.jpg"
              alt="user4"
            />
          </div>
          <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-600">
            Join 578+ Members
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center mb-4">
          <div>
            <p className="text-xs sm:text-sm font-semibold">Easy</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Difficulty</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold">26</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Classes</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-semibold">6 Weeks</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Time</p>
          </div>
        </div>

        <Link href="/classes" className="mt-auto">
          <button className="w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
            {buttonText || "Read More"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassesDetails;