
"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Nishant Kumar",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "Earlier I was weak in maths but now after getting tuitions from Guru classes I have improved a lot. Teachers are loving in nature.",
    image: "/Mentors/prince.jpg",
    bgColor: "bg-gray-800 text-white",
  },
  {
    id: 2,
    name: "Abhijit Jayarajan",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "One of the teachers I have ever met. He is very soft spoken and makes me understand the topics well.",
    image: "/Mentors/2.jpg",
    bgColor: "bg-orange-500 text-white",
  },
];

export default function StudentSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4200,
    speed: 600,
    pauseOnHover: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 1, centerMode: true, centerPadding: "56px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "32px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: true, centerPadding: "12px" } },
    ],
  };

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            What Students & Guardians Say <span className="text-orange-500">About Us.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Our students & guardians' feedback motivate us to grow and improve.
          </p>
        </div>

        <Slider {...settings} className="px-2 sm:px-4">
          {testimonials.map((t) => (
            <div key={t.id} className="flex justify-center px-2 sm:px-4">
              <div className={`${t.bgColor} w-full max-w-lg rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col items-center`}>
                <div className="relative -mt-12 mb-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>

                <div className="w-full px-2 sm:px-6">
                  <p className="italic mb-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-justify md:text-center break-words">
                    “{t.feedback}”
                  </p>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center">{t.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-100/90 text-center mt-1">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
