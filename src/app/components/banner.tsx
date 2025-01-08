
export default function Banner() {
  return (
    <div className="relative w-full h-screen flex items-center justify-start bg-gradient-to-br from-black via-gray-800 to-white text-white p-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide animate-fade-in font-serif text-gray-200">
          I’m Quratulain Faheem
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-light tracking-wide text-gray-300">
          A passionate <span className="font-semibold text-white">Full-Stack Developer</span> who transforms ideas into scalable solutions.
        </p>
        <p className="mt-6 text-base sm:text-lg text-gray-400">
          Crafting intuitive user experiences, building robust backends, and bringing projects to life with clean, efficient code.
        </p>
        
      </div>
      {/* Optional decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-48 h-48 bg-gray-500 rounded-full absolute -top-10 -left-10 blur-3xl"></div>
        <div className="w-72 h-72 bg-gray-700 rounded-full absolute -bottom-20 -right-20 blur-3xl"></div>
      </div>
    </div>
  );
}
