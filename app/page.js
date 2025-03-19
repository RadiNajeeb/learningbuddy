"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    location: "",
    studyMode: "",
    groupSize: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };

  // Sample universities for the Topics preview (top row from the Topics page)
  const topUniversities = [
    {
      name: "University of Wisconsin-Madison",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "Known for its strong programs in STEM and the vibrant campus life in Madison.",
    },
    {
      name: "Harvard University",
      subjects: ["Computer Science", "Mathematics", "Business & Economics", "Engineering"],
      description: "A prestigious Ivy League school with a rich history and global alumni network.",
    },
    {
      name: "Stanford University",
      subjects: ["Computer Science", "Mathematics", "Business & Economics", "Engineering"],
      description: "A hub for innovation in Silicon Valley, known for tech and entrepreneurship.",
    },
    {
      name: "MIT",
      subjects: ["Computer Science", "Mathematics", "Physics", "Engineering"],
      description: "A leader in science and technology, famous for its cutting-edge research.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900">
        <h1 className="text-2xl font-bold">
          Learning Buddy 🚀
        </h1>
        <nav className="space-x-4">
          <Link href="/" className="text-blue-400">
            Home
          </Link>
          <Link href="/purpose" className="hover:text-blue-400">
            Purpose
          </Link>
          <Link href="/topics" className="hover:text-blue-400">
            Topics
          </Link>
          <Link href="/community" className="hover:text-blue-400">
            Community
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Welcome Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Learning Buddy 🚀
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            A new platform to connect with like-minded learners and grow together! Be an early member of our growing community. 🎯
          </p>
          <Link 
            href="#survey" 
            className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 shadow-md"
          >
            Get Started
          </Link>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
            Why Join Learning Buddy? 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-gray-800 rounded-lg">
              <span className="text-4xl mb-4 block">🤝</span>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Find Study Partners</h3>
              <p className="text-sm md:text-base text-gray-300">
                Connect with students who share your academic interests and study goals.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <span className="text-4xl mb-4 block">🏫</span>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Explore Universities</h3>
              <p className="text-sm md:text-base text-gray-300">
                Discover universities and subjects to find the perfect study group.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <span className="text-4xl mb-4 block">🌐</span>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Join a Community</h3>
              <p className="text-sm md:text-base text-gray-300">
                Be part of a growing global network of learners helping each other succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Topics Preview Section */}
        <section className="py-16 px-4 md:px-6 bg-gray-800">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center">
            Explore Universities 🏫
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-8 text-center">
            Check out some of the universities you can connect with on Learning Buddy!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {topUniversities.map((uni, index) => (
              <Link 
                key={uni.name} 
                href={`/topics/${uni.name.toLowerCase().replace(/\s+/g, '-')}`} 
                className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 transition-all duration-200 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`Explore ${uni.name}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🏫</span>
                  <h3 className="text-lg font-semibold text-blue-300">{uni.name}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">{uni.description}</p>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold">Main Subjects:</span>
                </p>
                <ul className="text-sm text-gray-400 list-disc list-inside">
                  {uni.subjects.map(subject => (
                    <li key={subject}>{subject}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/topics" 
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 shadow-md"
            >
              Explore All Universities
            </Link>
          </div>
        </section>

        {/* Survey Form Section */}
        <section id="survey" className="py-16 px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
            Find Your Perfect Study Match! 🎯
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-8">
            Fill out this survey to help us match you with the right study partner!
          </p>

          {formSubmitted ? (
            <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">
                Thank You for Submitting! 🎉
              </h3>
              <p className="text-sm md:text-lg text-gray-300 mb-4">
                We’re excited to have you on board! Explore universities to find your study partner.
              </p>
              <Link 
                href="/topics" 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
              >
                Explore Universities
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
              {/* Name */}
              <div className="mb-4 text-left">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4 text-left">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* University */}
              <div className="mb-4 text-left">
                <label htmlFor="university" className="block text-sm font-medium mb-1">
                  University:
                </label>
                <input
                  type="text"
                  id="university"
                  placeholder="Enter your university"
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Preferred Study Location */}
              <div className="mb-4 text-left">
                <label htmlFor="location" className="block text-sm font-medium mb-1">
                  Preferred Study Location:
                </label>
                <select
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a location</option>
                  <option>Library</option>
                  <option>Cafe</option>
                  <option>Online</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Preferred Study Mode */}
              <div className="mb-4 text-left">
                <label htmlFor="studyMode" className="block text-sm font-medium mb-1">
                  Preferred Study Mode:
                </label>
                <select
                  id="studyMode"
                  value={formData.studyMode}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select study mode</option>
                  <option>In-Person</option>
                  <option>Online</option>
                  <option>Hybrid</option>
                </select>
              </div>

              {/* Preferred Study Group Size */}
              <div className="mb-6 text-left">
                <label htmlFor="groupSize" className="block text-sm font-medium mb-1">
                  Preferred Study Group Size:
                </label>
                <select
                  id="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select group size</option>
                  <option>1-2</option>
                  <option>3-5</option>
                  <option>6+</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors hover:scale-105 transform duration-200"
              >
                Submit 🚀
              </button>
            </form>
          )}
        </section>

        {/* Community Teaser Section */}
        <section className="py-16 px-4 md:px-6 text-center bg-gradient-to-r from-blue-500 to-purple-600">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
            Be the First to Join Our Community 🤝
          </h2>
          <p className="text-sm md:text-lg max-w-3xl mx-auto text-white mb-8">
            Learning Buddy is a new platform, and our community is just getting started! Be among the first to connect with students from around the world, share experiences, and grow together.
          </p>
          <Link 
            href="/community" 
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
          >
            Join the Community Now 🎉
          </Link>
        </section>

        {/* Learn More Section */}
        <section className="py-16 px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
            Why We Created Learning Buddy 📜
          </h2>
          <p className="text-sm md:text-lg max-w-3xl mx-auto text-gray-300 mb-8">
            Learning Buddy was created to bring back the power of collaborative learning. Discover the inspiration behind our platform and how we aim to help students grow together.
          </p>
          <Link 
            href="/purpose" 
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 shadow-md"
          >
            Learn More
          </Link>
        </section>

        {/* Footer CTA */}
        <section className="py-16 px-4 md:px-6 text-center bg-gray-800">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Ready to Start Learning Together?
          </h3>
          <Link 
            href="/community" 
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 shadow-md"
          >
            Join Now! 🚀
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400">
        <p>Learning Buddy. Built By Radi Najeeb.</p>
      </footer>
    </div>
  );
}
