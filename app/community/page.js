export default function Community() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 md:px-6 pt-20">
      {/* Page Header */}
      <h2 className="text-2xl md:text-4xl font-bold text-white mt-10 text-center">
        🌍 Community Feedback
      </h2>

      <p className="text-sm md:text-lg text-gray-300 mt-4 max-w-full md:max-w-2xl text-center">
        This page is intended for users to provide feedback about the platform,
        allowing us to improve Learning Buddy based on user suggestions.
        Your input is valuable in making this a better experience for everyone!
      </p>

      <p className="text-xs md:text-md text-gray-400 mt-6 italic text-center">
        More features will be added soon to facilitate discussions and feedback submissions.
      </p>
    </div>
  );
}
