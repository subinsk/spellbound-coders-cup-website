export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            Ready to Showcase Your Innovation?
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Join the SpellBound Coders Cup and turn your ideas into reality. 
          Submit your ideation and compete for amazing prizes!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 transform hover:scale-105">
            Register Now
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500/50 rounded-lg text-blue-400 font-semibold text-base sm:text-lg hover:border-blue-400 hover:bg-blue-500/10 transition-all backdrop-blur-sm">
            View Schedule
          </button>
        </div>
        <p className="mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm px-4">
          Registration opens Nov 10 • Closes Nov 26 • Limited to 50 ideas
        </p>
      </div>
    </section>
  );
}

