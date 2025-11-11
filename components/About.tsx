export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f605_1px,transparent_1px),linear-gradient(to_bottom,#3b82f605_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              About SpellBound Coders Cup
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A one-day hackathon along with an ideation phase where individuals or teams come together to ideate, prototype, and build innovative products from scratch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start md:items-center">
          <div className="space-y-6">
            <div className="p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Online Ideation Phase</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Submit your innovative ideas with a presentation deck (3 slides) and video explanation. Top 20 teams will be selected for the hackathon day.
              </p>
            </div>

            <div className="p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Team Formation</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Participants can register either solo or in teams of up to 3 members. Work together to solve real-world problems and showcase your technical prowess.
              </p>
            </div>

            <div className="p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Hackathon Day</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Build and present a working prototype of your idea. The event encourages rapid development, out-of-the-box thinking, and friendly competition.
              </p>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-8 border border-blue-500/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Event Timeline</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Registration Start</div>
                    <div className="text-gray-400 text-xs sm:text-sm">10th November</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Registration Last Date</div>
                    <div className="text-gray-400 text-xs sm:text-sm">26th November</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Shortlisted Teams Announced</div>
                    <div className="text-gray-400 text-xs sm:text-sm">28th November</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Hackathon Day</div>
                    <div className="text-gray-400 text-xs sm:text-sm">4th December</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Team Size</div>
                    <div className="text-gray-400 text-xs sm:text-sm">1-3 members per team</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Max Ideas Accepted</div>
                    <div className="text-gray-400 text-xs sm:text-sm">50 ideas (20 teams selected)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

