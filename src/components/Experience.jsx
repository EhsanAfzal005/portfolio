import { useInView } from '../hooks/useInView';

const experiences = [
  {
    year: 'May 2026 — Present',
    title: 'Leveling Up: TypeScript & Testing',
    subtitle: 'Currently Exploring',
    description:
      'Now diving into TypeScript to write safer, more maintainable code, and learning testing practices to build more reliable applications — moving toward writing code that\'s not just functional, but production-grade and well-verified.',
    skills: ['TypeScript', 'Testing', 'Code Quality'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    active: true,
  },
  {
    year: 'Dec 2025 — Apr 2026',
    title: 'MERN Stack Internship — MEAN3',
    subtitle: 'Where My MERN Journey Began',
    description:
      'Interned as a MERN Stack Developer, building the Shopify Review App and REST APIs for merchant platforms. Implemented JWT authentication, role-based access control, and database schema design in production-style projects.',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Shopify'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    year: '2023 — 2025',
    title: 'Backend Development',
    subtitle: 'Deepening My Backend Skills',
    description:
      'Focused on strengthening my backend fundamentals — building REST APIs, designing efficient database schemas, implementing secure authentication and authorization flows, and learning how to structure scalable, maintainable server-side applications with Node.js and Express.js.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    year: '2022 — 2023',
    title: 'Foundations',
    subtitle: 'Learning Core Programming & Web Development',
    description:
      'Started my BS in Software Engineering, building a foundation in programming, data structures, and core web development concepts (JavaScript, HTML/CSS) that led into full-stack development.',
    skills: ['JavaScript', 'HTML/CSS', 'Programming Fundamentals', 'Software Engineering Principles'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
];

export default function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-black">
      {/* Subtle border top to separate sections */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-full mb-4">
            Experience & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] text-white mb-4">
            My Learning{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Path</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            A timeline of my growth as a developer from fundamentals to
            building production-ready systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-neutral-800" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`relative pl-16 sm:pl-20 ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 150 + 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 sm:left-6 top-6 w-4 h-4 rounded-full border-2 ${
                    exp.active
                      ? 'bg-cyan-500 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                      : 'bg-black border-neutral-700'
                  }`}
                >
                  {exp.active && (
                    <span className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-30" />
                  )}
                </div>

                {/* Card */}
                <div className="group bg-neutral-900/30 border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
                  {/* Year */}
                  <span className={`inline-block text-xs font-bold mb-3 px-3 py-1 rounded-full border ${
                    exp.active
                      ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                      : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  }`}>
                    {exp.year}
                  </span>

                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5 ${exp.active ? 'text-cyan-400' : 'text-neutral-400'}`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-neutral-500">{exp.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-400 bg-neutral-800 rounded-md border border-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
