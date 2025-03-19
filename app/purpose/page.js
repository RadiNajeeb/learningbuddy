"use client";

import Link from "next/link";

export default function Purpose() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 md:px-6 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10">
        Why I Created Learning Buddy 🚀
      </h1>

      <p className="text-sm md:text-lg max-w-full md:max-w-3xl text-gray-300">
        Throughout my school life, I had realized that collaborative learning was the key to truly enjoying 
        and understanding difficult subjects. Back in high school, the reason I loved learning was 
        because my peers and I made studying an interactive and engaging experience.
      </p>

      <p className="text-sm md:text-lg max-w-full md:max-w-3xl text-gray-300 mt-4">
        I believe that the culture of collaborative learning is significantly lacking in universities currently. 
        Many students study by themselves — in isolation. Moreover, the opportunities to connect with like-minded learners 
        are limited. That&apos;s why I built Learning Buddy — to bring back the power of teamwork in education.
      </p>

      <p className="text-sm md:text-lg max-w-full md:max-w-3xl text-gray-300 mt-4">
        This platform will help students find study partners, share knowledge, and grow together. 
        Learning is more effective and enjoyable when we do it together! 🎯
      </p>

      {/* Back to Home Button */}
      <Link 
        href="/" 
        className="mt-6 md:mt-10 px-4 md:px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm md:text-base"
      >
        Back to Home
      </Link>
    </div>
  );
}
