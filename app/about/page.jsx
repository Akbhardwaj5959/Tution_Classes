
import StudentSlider from "../components/StudentSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <div className="max-w-6xl mx-auto px-4 pt-40 sm:px-6 lg:px-8 py-12">
        <section className="max-w-3xl mx-auto text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
            ABOUT <span className="text-orange-600">RATHORE Extra CLASSES</span>
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">Rathore Classes</span>, a premier home tuition service provider for
            CBSE, ICSE, IGCSE, and IB curriculum. We believe that every student has the potential to succeed,
            regardless of their background, learning style or availability. We also offer online tuition,
            small group tuition and home tuition to meet learner needs.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Our tutors are highly qualified and experienced. They use varied teaching methods to create a
            personalized learning experience and provide experts across a wide range of subjects.
          </p>
        </section>
      </div>

     
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8 py-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              SUBJECTS <span className="text-orange-600">WE COVER:</span>
            </h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              We offer home tuition services for a wide range of subjects:
            </p>

            <ul className="list-disc pl-6 text-gray-800 space-y-2 text-sm sm:text-base">
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>English</li>
              <li>Languages (Hindi, French, Spanish, etc.)</li>
              <li>Computer Science</li>
              <li>Economics</li>
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Social Studies</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Rathore Classes"
              className="rounded-lg shadow-lg w-40 sm:w-56 md:w-64 lg:w-72 object-contain"
            />
          </div>
        </div>
      </section>

      
      <StudentSlider />
    </main>
  );
}
