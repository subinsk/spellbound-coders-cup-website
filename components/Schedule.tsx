export default function Schedule() {
  const scheduleItems = [
    {
      day: "Overall Timeline",
      events: [
        { time: "Nov 10", title: "Registration Start (Ideation Submission Start)", description: "Start submitting your ideas" },
        { time: "Nov 11", title: "Start Reviewing Ideas", description: "Internal review by copoint members begins" },
        { time: "Nov 26", title: "Registration Last Date", description: "Last day to submit your ideation" },
        { time: "Nov 28", title: "Announcing Shortlisted 20 Ideas", description: "Top 20 teams selected for hackathon" },
        { time: "Dec 4", title: "Hackathon Day", description: "Build and present your prototype" },
      ],
    },
    {
      day: "Hackathon Day Timeline - December 4th",
      events: [
        { time: "8:00 AM", title: "Copoint Members Reaching Office", description: "Sharp" },
        { time: "9:30 AM", title: "Keynote", description: "9:30am - 10:00am" },
        { time: "10:00 AM", title: "Hackathon Start", description: "Sharp - Start building!" },
        { time: "1:00 PM", title: "Lunch", description: "1:00pm - 2:00pm" },
        { time: "2:00 PM", title: "Mentoring Session", description: "6 members on 20 teams - 1.5 hours total (30 min per team)" },
        { time: "5:00 PM", title: "Hackathon End", description: "Submit your projects" },
        { time: "5:00 PM", title: "Judging", description: "5:00pm - 8:00pm" },
        { time: "8:30 PM", title: "Result Announcement", description: "Winners announced!" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Event Schedule
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            From ideation to prototype - Your journey to innovation
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {scheduleItems.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
                <h3 className="px-3 sm:px-6 text-lg sm:text-xl md:text-2xl font-bold text-blue-400 text-center">{day.day}</h3>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1"></div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="relative group bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-l-xl"></div>
                    <div className="ml-3 sm:ml-4">
                      <div className="text-blue-400 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">{event.time}</div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">{event.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

