import StudentSlider from "../components/StudentSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-40 px-6">

      
      <section className="max-w-4xl text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          ABOUT <span className="text-orange-600">RATHORE CLASSES</span>
        </h2>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Rathore Classes</span>, a premier home tuition
          service provider for CBSE, ICSE, IGCSE, and IB curriculum. We believe
          that every student has the potential to succeed, regardless of their
          background, learning style or availability. So we also offer online
          tuition & small group tuition along with home tuition services to meet
          the needs of all learners.
        </p>
        <p className="text-gray-700">
          Our tutors are highly qualified and experienced. They use a variety of
          teaching methods and techniques to create a personalized learning
          experience for each student. We provide experts for a wide range of
          subjects.
        </p>
      </section>

      
      <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            SUBJECTS <span className="text-orange-600">WE COVER:</span>
          </h3>
          <p className="text-gray-700 mb-4">
            We offer home tuition services for a wide range of subjects:
          </p>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>Mathematics</li>
            <li>Science (Physics, Chemistry, Biology)</li>
            <li>English</li>
            <li>Languages (Hindi, French, Spanish, etc.)</li>
            <li>Computer Science</li>
            <li>Economics</li>
            <li>Accountancy</li>
            <li>Business Studies</li>
          </ul>
            <li>Social Studies</li>
        </div>

        
        <div className="flex justify-center">
          <img
            src="/logo.png" 
            alt="Tutoring illustration"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
    <StudentSlider />
    </main>
  );
}
