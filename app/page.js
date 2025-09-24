"use client";

import ClassesDetails from "./components/ClassesDetails";
import Header from "./components/Header";

import courseData from "@/data/cards.json";
import VideoSlider from "./components/VideoSlider";
import CountsDetails from "./components/CountsDetails";
import Mentors from "./components/Mentors";
import CardEffect from "./components/CardEffect";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      
      <Header />
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Explore our top courses curated just for you.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  p-10 bg-gray-100 min-h-screen">
      {courseData.map((cards, index) => (
        <CardEffect
          key={index}
          title={cards.title}
          description={cards.description}
          image={cards.image}
          price={cards.price}
          buttonText={cards.buttonText}
        />
      ))}
    </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-100 min-h-screen">
      {courseData.map((cards, index) => (
        <ClassesDetails
          key={index}
          title={cards.title}
          description={cards.description}
          image={cards.image}
          price={cards.price}
          buttonText={cards.buttonText}
        />
      ))}
    </div> */}
    <VideoSlider />
    <CountsDetails />
    <Mentors />
    
    </main>
  );
}
