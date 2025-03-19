"use client";

import Link from "next/link";

export default function Community() {
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
          <Link href="/purpose" className="hover:text-blue-400">
            Purpose
          </Link>
          <Link href="/topics" className="hover:text-blue-400">
            Topics
          </Link>
          <Link href="/community" className="text-blue-400">
            Community
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 md:px-6 text-center py-16">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
          Join The Learning Buddy Community 🤝
        </h1>

        <p className="text-sm md:text-lg max-w-3xl text-gray-300 mb-8">
          Learning Buddy is a brand-new platform, and our community is just getting started! We’re excited to bring students from around the world together to connect, share experiences, and grow as learners. Be among the first to join and help shape a supportive community for collaborative learning.
        </p>

        {/* Vision Section */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">
            Our Vision
          </h2>
          <p className="text-sm md:text-lg text-gray-300">
            We aim to create a global network where students can find study partners, exchange knowledge, and support each other on their learning journeys. As our community grows, you’ll be able to connect with like-minded learners, join study groups, and share your academic experiences.
          </p>
        </div>

        {/* Call-to-Action */}
        <Link 
          href="/" 
          className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 shadow-md"
        >
          Join the Community Now 
        </Link>

        
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-400">
        <p>Learning Buddy. Built By Radi Najeeb.</p>
      </footer>
    </div>
  );
}
