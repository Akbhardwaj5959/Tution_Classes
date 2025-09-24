"use client";
import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const CardEffect = ({ title, description, image, price, buttonText }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  
        dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
        dark:bg-white dark:border-black/[0.2] border-black/[0.1] 
        max-w-sm w-full h-auto rounded-xl p-6 border mx-auto">
        
        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-black"
        >
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
          {description}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        {/* Members */}
        
       <div className="p-4 sm:p-5 flex flex-col flex-1">
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
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
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Price</h2>
          <span className="text-gray-700 font-medium text-sm sm:text-base">{price}</span>
        </div>
        </CardItem>
        

        

        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-sm mt-2 dark:text-black"
        >
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
        </CardItem>

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
        

        <CardItem
            translateZ={20}
            as="button"
            className="w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
          >
            Read More
          </CardItem>

        
      </div>

        {/* Buttons */}
        {/* <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
};

export default CardEffect;
