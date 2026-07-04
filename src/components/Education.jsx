import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, isInView] = useInView();

  return (
    <section id="education" className="relative py-24 sm:py-32 bg-black">
      {/* Subtle border top to separate sections */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-full mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] text-white mb-4">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Background</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            The formal education that built the foundation for my engineering career.
          </p>
        </div>

        {/* Education Card */}
        <div className={`max-w-3xl mx-auto ${isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="group relative bg-neutral-900/30 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-500 overflow-hidden">
            {/* Gradient accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-neutral-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      BS Software Engineering
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm mt-1">
                      UIT University
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full whitespace-nowrap self-start">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    2022 — 2026
                  </span>
                </div>

                <p className="text-neutral-400 leading-relaxed text-sm sm:text-base mb-5">
                  Completed a Bachelor's degree in Software Engineering, combining theoretical knowledge with practical development experience. Worked on academic projects that strengthened software design, problem-solving, teamwork, and the ability to build reliable, maintainable applications.
                </p>

                {/* Key Subjects */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming',
                    'Database Systems',
                    'Software Design & Architecture',
                    'Web Development',
                    'Operating Systems',
                    'Computer Networks',
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-2.5 py-1 text-xs font-medium text-neutral-400 bg-neutral-800 rounded-md border border-neutral-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
