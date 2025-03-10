"use client"; // Enable client-side rendering

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    subject: "",
    subcategory: "",
    studyTime: "",
    studyMode: "",
    skillLevel: "",
    studyLocation: "",
    studyType: "",
    groupSize: "",
    studyStyle: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Form submitted successfully! 🎉");
        setFormData({
          name: "",
          email: "",
          university: "",
          subject: "",
          subcategory: "",
          studyTime: "",
          studyMode: "",
          skillLevel: "",
          studyLocation: "",
          studyType: "",
          groupSize: "",
          studyStyle: "",
        });
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl md:text-2xl font-bold text-white">Learning Buddy 🚀</h1>

          <div className="md:hidden">
            <button
              onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>

          <div className="hidden md:flex gap-6 ml-auto">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/purpose" className="text-gray-300 hover:text-white">Purpose</Link>
            <Link href="/topics" className="text-gray-300 hover:text-white">Topics</Link>
            <Link href="/community" className="text-gray-300 hover:text-white">Community</Link>
          </div>
        </div>

        <div id="mobile-menu" className="hidden flex flex-col bg-gray-800 text-white p-4 md:hidden">
          <Link href="/" className="py-2 border-b border-gray-700">Home</Link>
          <Link href="/purpose" className="py-2 border-b border-gray-700">Purpose</Link>
          <Link href="/topics" className="py-2 border-b border-gray-700">Topics</Link>
          <Link href="/community" className="py-2">Community</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Welcome to Learning Buddy 🚀
        </h2>
        <p className="text-sm md:text-lg text-gray-300 mt-4 max-w-full md:max-w-2xl">
  &ldquo;A way to connect with like-minded learners and grow together.&rdquo; 🌍📚
</p>

      </div>

      {/* Survey Section */}
      <section id="survey-form" className="bg-gray-800 py-10 px-4 md:py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Find Your Perfect Study Match! 🎯
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Fill out this survey to help us match you with the right study partners!
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg">
            {/* Name */}
            <label className="block text-left mb-2">Your Name:</label>
            <input type="text" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />

            {/* Email */}
            <label className="block text-left mb-2">Email:</label>
            <input type="email" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

            {/* University */}
            <label className="block text-left mb-2">University:</label>
            <input type="text" className="w-full p-2 mb-4 bg-gray-700 text-white rounded" placeholder="Enter your university" value={formData.university} onChange={(e) => setFormData({ ...formData, university: e.target.value })} required />

            {/* Preferred Study Location */}
            <label className="block text-left mb-2">Preferred Study Location:</label>
            <select className="w-full p-2 mb-4 bg-gray-700 text-white rounded" value={formData.studyLocation} onChange={(e) => setFormData({ ...formData, studyLocation: e.target.value })} required>
              <option value="">Select a location</option>
              <option>Library</option>
              <option>Coffee Shop</option>
              <option>Study Lounge</option>
              <option>Outdoor Park</option>
              <option>Home</option>
            </select>

            {/* Preferred Mode of Studying */}
            <label className="block text-left mb-2">Preferred Study Mode:</label>
            <select className="w-full p-2 mb-4 bg-gray-700 text-white rounded" value={formData.studyType} onChange={(e) => setFormData({ ...formData, studyType: e.target.value })} required>
              <option value="">Select study mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>

            {/* Preferred Group Size */}
            <label className="block text-left mb-2">Preferred Study Group Size:</label>
            <select className="w-full p-2 mb-4 bg-gray-700 text-white rounded" value={formData.groupSize} onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })} required>
              <option value="">Select group size</option>
              <option>Solo</option>
              <option>Small Group (2-4 people)</option>
              <option>Large Group (5+ people)</option>
            </select>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-500 text-white text-sm md:text-base py-3 rounded hover:bg-blue-600">
              {loading ? "Submitting..." : "Submit 🚀"}
            </button>
          </form>

          {/* Display Submission Message */}
          {message && <p className="mt-4 text-white">{message}</p>}
        </div>
      </section>
    </div>
  );
}
