import Services from "../components/Services";
import Link from "next/link";
import subjects from"@/data/subjects.json"; 

export default function Subjects() {
  return (
    <div className="bg-white px-4 py-40 sm:px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {subjects.map((subject, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center border rounded-md py-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-3">{subject.icon}</div>
            <p className="text-gray-700 font-medium">{subject.name}</p>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center mt-8">
        <Link href="/contact">
        <button className="px-6 py-2 border border-purple-400 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition">
          Explore More Subjects
        </button>
        
        </Link>
      </div>

      <Services />
    </div>
  );
}
