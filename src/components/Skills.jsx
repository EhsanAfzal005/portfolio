import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    color: 'from-cyan-500 to-cyan-600',
    accent: 'text-cyan-400',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 85 },
      { name: 'Authentication (JWT, bcrypt)', level: 80 },
      { name: 'MVC Architecture', level: 80 },
      { name: 'Python / Flask', level: 85 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-400',
    skills: [
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'JavaScript', level: 88 },
      { name: 'REST API Integration', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    color: 'from-zinc-400 to-neutral-600',
    accent: 'text-zinc-300',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQL Server', level: 75 },
      { name: 'Mongoose', level: 80 },
      { name: 'Firebase', level: 65 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 5l5.1 5.07-5.1 5.1zM21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-700',
    accent: 'text-blue-400',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Thunder Client', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 55 },
      { name: 'Heroku', level: 75 },
      { name: 'CI/CD Concepts', level: 70 },
    ],
  },
  {
    title: 'AI & Automation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'from-amber-500 to-orange-600',
    accent: 'text-amber-400',
    skills: [
      { name: 'Cursor IDE', level: 95 },
      { name: 'GitHub Copilot', level: 90 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'AI Workflows', level: 80 },
    ],
  },
];

export default function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-black">
      {/* Subtle border top to separate sections */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-full mb-4">
            Skills & Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] text-white mb-4">
            My Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Arsenal</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            Technologies and tools I use to bring ideas to life and build
            production-ready applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`group bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 hover:bg-neutral-900/80 transition-all duration-500 hover:-translate-y-1 ${
                isInView ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${catIdx * 100 + 200}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center ${category.accent}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-sm font-medium bg-neutral-950/50 border border-neutral-800 rounded-lg text-neutral-300 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800 hover:${category.accent}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
