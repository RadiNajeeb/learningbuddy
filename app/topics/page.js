"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Topics() {
  // State for search, filter, and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [sortBy, setSortBy] = useState("name"); // Default sort by name

  // State for added universities (client-side for demo purposes)
  const [addedUniversities, setAddedUniversities] = useState([]);

  // Load added universities from localStorage on mount
  useEffect(() => {
    const storedUniversities = JSON.parse(localStorage.getItem("addedUniversities") || "[]");
    setAddedUniversities(storedUniversities);
  }, []);

  // List of universities with more specific descriptions
  const allUniversities = [
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
    {
      name: "Boston University",
      subjects: ["Computer Science", "Mathematics", "Business & Economics", "Engineering"],
      description: "Located in the heart of Boston, BU offers a diverse academic community.",
    },
    {
      name: "Caltech",
      subjects: ["Computer Science", "Mathematics", "Physics", "Engineering"],
      description: "A small institution with a big impact, focused on science and engineering.",
    },
    {
      name: "Princeton University",
      subjects: ["Computer Science", "Mathematics", "Business & Economics", "Engineering"],
      description: "An Ivy League school with a beautiful campus and rigorous academics.",
    },
    {
      name: "Columbia University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Engineering"],
      description: "Located in NYC, Columbia is known for its diverse and urban academic environment.",
    },
    {
      name: "Yale University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A historic Ivy League school with a strong focus on liberal arts and sciences.",
    },
    {
      name: "University of Chicago",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "Known for its emphasis on critical thinking and the Chicago School of Economics.",
    },
    {
      name: "Johns Hopkins University",
      subjects: ["Computer Science", "Mathematics", "Business & Economics", "Engineering"],
      description: "A leader in medical research and engineering, located in Baltimore.",
    },
    {
      name: "University of Pennsylvania",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "Home to the Wharton School, Penn excels in business and technology.",
    },
    {
      name: "Northwestern University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "Located near Chicago, Northwestern is known for journalism and engineering.",
    },
    {
      name: "Duke University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A top university in North Carolina, known for its medical and tech programs.",
    },
    {
      name: "UC Berkeley",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A public university with a global reputation in tech and social sciences.",
    },
    {
      name: "University of Michigan",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A large public university in Ann Arbor, known for its research and athletics.",
    },
    {
      name: "Carnegie Mellon University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A leader in computer science and robotics, located in Pittsburgh.",
    },
    {
      name: "Cornell University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "An Ivy League school in Ithaca, known for engineering and agriculture.",
    },
    {
      name: "Brown University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "Known for its open curriculum and student-driven learning approach.",
    },
    {
      name: "New York University (NYU)",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "Located in NYC, NYU excels in business, arts, and technology.",
    },
    {
      name: "University of California, San Diego",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A public university with strong programs in tech and life sciences.",
    },
    {
      name: "University of Southern California",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "Known for its programs in tech, media, and film, located in Los Angeles.",
    },
    {
      name: "University of Texas at Austin",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A large public university with a focus on tech and business in Austin.",
    },
    {
      name: "University of Washington",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A tech hub in Seattle, known for its computer science programs.",
    },
    {
      name: "Rice University",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A small university in Houston with a strong focus on STEM.",
    },
    {
      name: "University of Illinois Urbana-Champaign",
      subjects: ["Computer Science", "Mathematics", "Physics", "Business & Economics", "Engineering"],
      description: "A public university known for its engineering and tech programs.",
    },
  ];

  // Combine initial universities with added universities
  const combinedUniversities = [...allUniversities, ...addedUniversities];

  // Define top row (including UW-Madison) and second row (including BU)
  const topRowUniversities = combinedUniversities.filter(uni =>
    ["University of Wisconsin-Madison", "Harvard University", "Stanford University", "MIT"].includes(uni.name)
  );
  const secondRowUniversities = combinedUniversities.filter(uni =>
    ["Boston University", "Caltech", "Princeton University", "Columbia University"].includes(uni.name)
  );

  // Remaining universities (excluding top and second rows)
  const remainingUniversities = combinedUniversities.filter(
    uni => !topRowUniversities.includes(uni) && !secondRowUniversities.includes(uni)
  );

  // List of all unique subjects for the filter dropdown
  const allSubjects = [...new Set(combinedUniversities.flatMap(uni => uni.subjects))];

  // Filter remaining universities based on search term and selected subject
  const filteredRemainingUniversities = remainingUniversities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject ? uni.subjects.includes(selectedSubject) : true;
    return matchesSearch && matchesSubject;
  });

  // Sort remaining universities based on the selected sort option
  const sortedRemainingUniversities = [...filteredRemainingUniversities].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "subjects") {
      return b.subjects.length - a.subjects.length; // Sort by number of subjects (descending)
    }
    return 0;
  });

  // Filter top and second row universities (to ensure they match search and subject filters)
  const filteredTopRowUniversities = topRowUniversities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject ? uni.subjects.includes(selectedSubject) : true;
    return matchesSearch && matchesSubject;
  });

  const filteredSecondRowUniversities = secondRowUniversities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject ? uni.subjects.includes(selectedSubject) : true;
    return matchesSearch && matchesSubject;
  });

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
          <Link href="/topics" className="text-blue-400">
            Topics
          </Link>
          <Link href="/community" className="hover:text-blue-400">
            Community
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-16">
        {/* Banner */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 md:p-8 rounded-lg mb-10 text-center shadow-lg">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <span>🏫</span> Current University Profiles with Subjects
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto">
            Explore available universities and the subjects students can find partners or groups to learn with. Further options to add a prominent course that is university-specific will be included!
          </p>
          <Link 
            href="/add-university" 
            className="mt-6 inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
          >
            Add Your University
          </Link>
        </section>

        {/* Search, Filter, and Sort */}
        <section className="mb-10 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search universities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search universities"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          <div className="relative w-full md:w-64">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-2 pl-10 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              aria-label="Filter by subject"
            >
              <option value="">All Subjects</option>
              {allSubjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📚</span>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
          </div>
          <div className="relative w-full md:w-64">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 pl-10 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              aria-label="Sort universities"
            >
              <option value="name">Sort by Name</option>
              <option value="subjects">Sort by Number of Subjects</option>
            </select>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">↕️</span>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
          </div>
        </section>

        {/* University Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Current Available Universities To Network
          </h2>
          <p className="text-sm md:text-lg text-blue-300 mb-8 text-center bg-gray-800 inline-block px-4 py-2 rounded-lg">
            * More universities will be added in the future!
          </p>

          {/* Top Row (including UW-Madison) */}
          {filteredTopRowUniversities.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-6">
              {filteredTopRowUniversities.map((uni, index) => (
                <Link 
                  key={uni.name} 
                  href={`/topics/${uni.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer animate-fade-in"
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
          )}

          {/* Second Row (including BU) */}
          {filteredSecondRowUniversities.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-6">
              {filteredSecondRowUniversities.map((uni, index) => (
                <Link 
                  key={uni.name} 
                  href={`/topics/${uni.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer animate-fade-in"
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
          )}

          {/* Remaining Universities */}
          {sortedRemainingUniversities.length === 0 &&
          filteredTopRowUniversities.length === 0 &&
          filteredSecondRowUniversities.length === 0 ? (
            <p className="text-center text-gray-400">No universities found matching your criteria.</p>
          ) : (
            sortedRemainingUniversities.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {sortedRemainingUniversities.map((uni, index) => (
                  <Link 
                    key={uni.name} 
                    href={`/topics/${uni.name.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer animate-fade-in"
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
            )
          )}
        </section>

        {/* Footer CTA */}
        <section className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Ready to Connect with Study Partners?
          </h3>
          <Link 
            href="/" 
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-200 shadow-md"
          >
            Find Your Study Partner Now 🚀
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
