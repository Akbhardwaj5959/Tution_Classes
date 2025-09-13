import { FaUserGraduate, FaMobileAlt, FaBook, FaUsers } from "react-icons/fa";

const counts = [
  {
    icon: <FaUserGraduate className="text-orange-500 text-3xl mb-2" />,
    count: "500+",
    label: "Students Enrolled",
  },
  {
    icon: <FaMobileAlt className="text-orange-500 text-3xl mb-2" />,
    count: "100+",
    label: "Online Available Courses",
  },
  {
    icon: <FaBook className="text-orange-500 text-3xl mb-2" />,
    count: "300+",
    label: "Quality Courses",
  },
  {
    icon: <FaUsers className="text-orange-500 text-3xl mb-2" />,
    count: "50+",
    label: "Teachers Registered",
  },
];

export default function CountsDetails() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-blue-400 text-2xl">•</span>
          <span className="tracking-[0.3em] text-gray-400 text-sm font-semibold">SMART LEARNING</span>
          <span className="text-orange-400 text-2xl">•</span>
        </div>
        <h2 className="text-4xl font-light">
          <span className="text-orange-500 font-bold">Rathore</span> Classes.
        </h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {counts.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center relative"
          >
            {item.icon}
            <span className="font-bold text-lg sm:text-xl md:text-2xl">{item.count}</span>
            <span className="text-gray-700 text-sm sm:text-base">{item.label}</span>
            {/* Divider */}
            {idx !== counts.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 border-r border-gray-300"></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}