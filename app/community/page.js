"use client";

import Link from "next/link";

export default function Purpose() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900">
        <h1 className="text-2xl font-bold">
          Learning Buddy 🚀
        </h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/purpose" className="text-blue-400">
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
      <main className="flex flex-col items-center justify-center px-4 md:px-6 text-center py-16">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
          Why I Created Learning Buddy 🚀
        </h1>

        <section className="max-w-3xl">
          <h2 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">
            The Inspiration
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-6">
            Throughout my school life, I had realized that{" "}
            <span className="text-blue-400 font-semibold">collaborative learning</span>{" "}
            was the key to truly enjoying and understanding difficult subjects. Back in high school, the reason I loved learning was because my peers and I made studying an interactive and engaging experience.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">
            The Problem
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-6">
            The opportunities to connect with like-minded learners is currently limited. That’s why I built Learning Buddy — to bring back the{" "}
            <span className="text-blue-400 font-semibold">power of teamwork</span>{" "}
            in education.
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">
            The Solution
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-6">
            This platform will help students find study partners, share knowledge, and{" "}
            <span className="text-blue-400 font-semibold">grow together</span>. 
            Learning is more effective and enjoyable when we do it together! 
          </p>
        </section>

        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="mt-6 md:mt-10 px-4 md:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 text-sm md:text-base flex items-center gap-2"
        >
          <span>←</span> Back to Home
        </Link>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400">
        <p>Learning Buddy. Built By Radi Najeeb.</p>
      </footer>
    </div>
  );
}
