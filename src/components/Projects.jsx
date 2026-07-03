import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'PairPilot IDE',
    subtitle: 'Real-Time Collaborative Web IDE',
    description:
      'A full-stack, real-time collaborative web-based IDE built to replicate the pair programming experience remotely. The platform features a VS Code-style code editor with live multi-user collaboration, AI-powered code suggestions via OpenAI and Google Gemini, built-in text and voice chat, and a sandboxed Python execution engine all within the browser, enabling teams to code, communicate, and debug together seamlessly.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Monaco Editor', 'WebRTC', 'OpenAI API', 'Google Gemini API', 'JWT Authentication'],
    live: 'https://pair-pilot-ten.vercel.app/',
    gradient: 'from-cyan-500 to-blue-600',
    iconColor: 'text-cyan-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Shopify Review App',
    subtitle: 'Embedded Shopify Application',
    description:
      'A custom-built, embedded Shopify application designed to empower merchants with a seamless way to collect and manage customer feedback. The app integrates a native admin dashboard for easy review moderation and dynamically injects customizable review widgets directly onto the storefront, enhancing social proof and driving conversions without requiring any code edits.',
    tech: ['React', 'Remix', 'Node.js', 'Prisma', 'MongoDB', 'Shopify Polaris', 'App Bridge'],
    github: 'https://github.com/EhsanAfzal005/shopify-review-app',
    demo: 'https://www.loom.com/share/12a14594b83a4fb58c05ede85fcc55af',
    gradient: 'from-emerald-500 to-teal-600',
    iconColor: 'text-emerald-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'ProjectHub',
    subtitle: 'Full-Stack Project Management Dashboard',
    description:
      'ProjectHub is a production-ready, full-stack web application designed to help users and teams seamlessly manage their projects. Built with a focus on clean architecture, the platform features a highly responsive and modern user interface, interactive analytics, and robust backend security to ensure an optimal and secure user experience.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    github: 'https://github.com/EhsanAfzal005/fullstack-project-dashboard',
    demo: 'https://www.loom.com/share/e2b6b4944a9d47e2a4c0936b3b0fc792',
    gradient: 'from-violet-500 to-fuchsia-600',
    iconColor: 'text-violet-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

export default function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-black">
      {/* Subtle border top to separate sections */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-full mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] text-white mb-4">
            What I&apos;ve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Built</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            A selection of projects that showcase my skills in full-stack
            development, system design, and AI integration.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group bg-neutral-900/30 border border-neutral-800 rounded-2xl overflow-hidden hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-500 hover:-translate-y-1 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 150 + 200}ms` }}
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  {/* Left - Project Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-neutral-800 ${project.iconColor} flex items-center justify-center`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-500">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-neutral-400 leading-relaxed mb-6 text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-neutral-300 bg-neutral-800 rounded-lg border border-neutral-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-300 bg-neutral-800 border border-neutral-700 rounded-lg hover:text-white hover:bg-neutral-700 transition-all duration-300 group/link"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View on GitHub
                          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-lg hover:text-cyan-300 hover:bg-cyan-900/40 transition-all duration-300 group/link"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Watch Demo Video
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 rounded-lg hover:text-emerald-300 hover:bg-emerald-900/40 transition-all duration-300 group/link"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                          Live Demo
                          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right - Visual */}
                  <div className="lg:w-80 flex-shrink-0">
                    <div className={`h-48 lg:h-full min-h-[200px] rounded-xl bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 flex items-center justify-center`}>
                      <div className={`${project.iconColor} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}>
                        <div className="scale-[3]">
                          {project.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
