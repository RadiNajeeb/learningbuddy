"use client";

import Link from "next/link";
import { useState } from "react";

export default function Topics() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl md:text-2xl font-bold">Learning Buddy 🚀</h1>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation Links (Hidden on Mobile) */}
          <div className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"} absolute md:relative bg-gray-800 w-full md:w-auto top-12 left-0 md:top-0 p-4 md:p-0`}>
            <Link href="/" className="block md:inline-block py-2 md:py-0 text-gray-300 hover:text-white">Home</Link>
            <Link href="/purpose" className="block md:inline-block py-2 md:py-0 text-gray-300 hover:text-white">Purpose</Link>
            <Link href="/topics" className="block md:inline-block py-2 md:py-0 text-gray-300 hover:text-white">Topics</Link>
            <Link href="/community" className="block md:inline-block py-2 md:py-0 text-gray-300 hover:text-white">Community</Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col items-center justify-center h-60 bg-gradient-to-r from-blue-700 to-purple-800 text-center px-4 pt-24 md:pt-20">
        <h2 className="text-xl md:text-4xl font-bold text-white">
          🏛️ Current University Profiles with Subjects
        </h2>
        <p className="text-sm md:text-lg text-gray-300 mt-4 max-w-full md:max-w-2xl">
          Explore available universities and the subjects students can find partners or groups to learn with.
          Further options to add a prominent course that is university-specific will be included!
        </p>
      </div>

      {/* Top 25 Universities Section */}
      <section className="container mx-auto py-10 px-4 md:py-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          Current Available Universities To Network
        </h3>
        <p className="text-sm md:text-base text-center text-gray-400 mb-8">
          📌 More universities will be added in the future!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "University of Wisconsin-Madison", "Harvard University", "Boston University", "Stanford University", "MIT", "Caltech",
            "Princeton University", "Columbia University", "Yale University", 
            "University of Chicago", "Johns Hopkins University", "University of Pennsylvania",
            "Northwestern University", "Duke University", "UC Berkeley",
            "University of Michigan", "Carnegie Mellon University",
            "Cornell University", "Brown University", "New York University (NYU)", 
            "University of California, San Diego", "University of Southern California",
            "University of Texas at Austin", "University of Washington",
            "Rice University", "University of Illinois Urbana-Champaign",
          ].map((university, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <h4 className="text-lg md:text-xl font-bold text-blue-300">{university}</h4>
              <p className="text-gray-400 text-sm md:text-base mt-2">Main Subjects:</p>
              <ul className="text-gray-300 text-sm md:text-base">
                <li>- Computer Science</li>
                <li>- Mathematics</li>
                <li>- Physics</li>
                <li>- Business & Economics</li>
                <li>- Engineering</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center p-4 mt-10 text-sm md:text-base">
        © 2025 Learning Buddy. Built with <span className="font-bold text-white">Radi Najeeb</span>.
      </footer>
    </div>
  );
}
