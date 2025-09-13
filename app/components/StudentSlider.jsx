"use client";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Nishant Kumar",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "Earlier I was weak in maths but now after getting tuitions from Guru classes have improved a lot. Teachers are loving in nature. Guru classes is the best to those students who want to improve and build interest in their particular subjects.",
    image: "/Mentors/prince.jpg",
    bgColor: "bg-gray-800 text-white",
  },
  {
    id: 2,
    name: "Abhijit Jayarajan",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "One of the teacher I have ever met. He is very soft spoken and makes me understand the questions and the topics well. Will love to continue with him!",
    image: "/Mentors/2.jpg",
    bgColor: "bg-orange-500 text-white",
  },
  {
    id: 3,
    name: "Abhijit Jayarajan",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "One of the teacher I have ever met. He is very soft spoken and makes me understand the questions and the topics well. Will love to continue with him!",
    image: "/Mentors/3.jpg",
    bgColor: "bg-orange-500 text-white",
  },
  {
    id: 4,
    name: "Abhijit Jayarajan",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "One of the teacher I have ever met. He is very soft spoken and makes me understand the questions and the topics well. Will love to continue with him!",
    image: "/Mentors/4.jpg",
    bgColor: "bg-orange-500 text-white",
  },
  {
    id: 5,
    name: "Abhijit Jayarajan",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "One of the teacher I have ever met. He is very soft spoken and makes me understand the questions and the topics well. Will love to continue with him!",
    image: "/Mentors/5.jpg",
    bgColor: "bg-orange-500 text-white",
  },
  {
    id: 6,
    name: "Abhijit Jayarajan",
    school: "Shalom Hills International School, Sector-43",
    feedback:
      "One of the teacher I have ever met. He is very soft spoken and makes me understand the questions and the topics well. Will love to continue with him!",
    image: "/Mentors/6.jpg",
    bgColor: "bg-orange-500 text-white",
  }
];

export default function StudentSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-2">
          What Student & Guardian's Say{" "}
          <span className="text-orange-500">About Us.</span>
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Our students & Guardian's feedback motivate us to grow more and more...
        </p>

        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-2 sm:px-4">
              <div
                className={`${t.bgColor} max-w-lg w-full mx-auto p-4 sm:p-6 rounded-2xl shadow-lg text-center flex flex-col items-center`}
              >
                
                <Image
                  src={t.image}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-white shadow-md mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24 object-cover"
                />

                
                <p className="italic mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                  “{t.feedback}”
                </p>

                
                <h3 className="text-base sm:text-lg md:text-xl font-bold">{t.name}</h3>
                <p className="text-xs sm:text-sm md:text-base">{t.school}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}





