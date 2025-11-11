"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "Anyone with a passion for technology and innovation! Whether you're a student, professional developer, designer, or entrepreneur, you're welcome to join. Participants can register either solo or in teams of up to 3 members.",
    },
    {
      question: "What is the Online Ideation Phase?",
      answer: "The Online Ideation Phase is the first stage where teams submit a presentation deck (3 slides max - problem + solution + BMC) and a video explanation (3-4 minutes). A maximum of 50 ideas will be accepted, and the top 20 teams will be selected for the Hackathon Day.",
    },
    {
      question: "What are the submission requirements for the Ideation Phase?",
      answer: "Each team needs to submit: 1) A presentation deck with 3 slides maximum covering the problem statement, proposed solution, and Business Model Canvas (BMC). 2) A short video (3-4 minutes) hosted on YouTube or Drive explaining the idea.",
    },
    {
      question: "When is the registration deadline?",
      answer: "Registration opens on 10th November and closes on 26th November. The shortlisted 20 teams will be announced on 28th November.",
    },
    {
      question: "What happens on Hackathon Day?",
      answer: "On December 4th, the 20 selected teams will be assigned new project ideas (different from their submissions). Teams will build a working Proof of Concept (PoC) and submit it on GitHub. Optional: Teams can deploy their projects online for additional points.",
    },
    {
      question: "How are projects judged?",
      answer: "The hackathon consists of two phases: Online Ideation Phase (30% of total score) and Hackathon Day Development Phase (70% of total score). Judging criteria include problem understanding, innovation & creativity, feasibility & execution, market & impact potential, technical implementation, git history, deployment, documentation, mentor conversation, and final presentation.",
    },
    {
      question: "Will there be mentors available?",
      answer: "Yes! There will be 6 mentors available on Hackathon Day, with each team getting 30 minutes of mentoring time. Mentors will help with technical questions, design feedback, and project guidance.",
    },
    {
      question: "What are the prizes?",
      answer: "Prizes will be awarded for the top two positions: First Prize - Rs. 25,000, Second Prize - Rs. 15,000. Additionally, participants have the opportunity to join Copoint based on their performance.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f605_1px,transparent_1px),linear-gradient(to_bottom,#3b82f605_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Everything you need to know about the hackathon
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-white pr-3 sm:pr-4">{faq.question}</span>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Still have questions?</p>
          <button className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-500/50 rounded-lg text-blue-400 font-semibold hover:border-blue-400 hover:bg-blue-500/10 transition-all text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

