export default function page() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-40 bg-gray-100 min-h-screen">
      
      <div className="flex-1 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Fill The Form</h2>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 mt-1 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mt-1 border rounded-md bg-gray-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full p-2 mt-1 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full p-2 mt-1 border rounded-md bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Reach Us</h2>
        <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
        <p className="text-gray-500 mb-4">We&apos;ll Respond in couple of time</p>

        <div className="space-y-4 text-gray-700">
          <p className="flex items-start">
            <span className="text-orange-500 mr-2">🏠</span>
            Near mata chowk, Wazirabad, Sector 52, Gurugram, Haryana, India 122003
          </p>

          <p className="flex items-center">
            <span className="text-orange-500 mr-2">📞</span>
            (+91) 99999999999
          </p>

          <p className="flex items-center">
            <span className="text-orange-500 mr-2">📧</span>
            info@Rathoreclasses.co.in
          </p>

          <p className="flex items-center">
            <span className="text-orange-500 mr-2">📧</span>
            Rathoreclasses@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
