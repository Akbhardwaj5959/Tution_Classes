
"use client"

import { useState } from "react";

export default function page() {

 const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setSuccess("Your message has been sent!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setSuccess("Failed to send. Try again.");
      }
    } catch {
      setSuccess("Failed to send. Try again.");
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 py-8 pt-40 sm:px-8 md:px-16 lg:px-32 bg-gray-100 min-h-screen">
      {/* Form */}
      <div className="w-full md:flex-1 bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Fill The Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                 type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 mt-1 border rounded-md bg-gray-100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
               type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 mt-1 border rounded-md bg-gray-100"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
             type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="w-full p-2 mt-1 border rounded-md bg-gray-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
             rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full p-2 mt-1 border rounded-md bg-gray-100"
              required
            />
          </div>

          
         <button
            type="submit"
            className="bg-blue-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md w-full sm:w-auto"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
          {success && <p className="mt-2 text-green-600">{success}</p>}
          
          
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Reach Us</h2>
        <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
        <p className="text-gray-500 mb-4">We&apos;ll Respond in couple of time</p>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base">
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
