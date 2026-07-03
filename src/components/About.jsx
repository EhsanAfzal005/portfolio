import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, isInView] = useInView();

  const highlights = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      ),
      title: 'Software Engineering Graduate',
      desc: 'Strong foundation in software design, architecture, and engineering principles with a focus on building real, production-style applications.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
        </svg>
      ),
      title: 'Backend-Focused Developer',
      desc: 'Passionate about building robust APIs, scalable server architectures, and secure authentication systems.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
      title: 'Modern Development Practices',
      desc: 'Building full-stack MERN applications efficiently using tools like Docker, Git, and AI-assisted development with Cursor.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-black">
      {/* Subtle border top to separate sections */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Poppins'] text-white mb-4">
            Crafting Digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Experiences</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
            A driven software engineering student passionate about building
            systems that solve real-world problems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text & Image */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
            
            {/* Profile Picture & Greeting */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center mb-6">
              {/* Image Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0 group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-50" />
                <div className="absolute inset-0 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700 group-hover:border-cyan-500/50 transition-colors duration-500 z-10">
                  <img
                    src="/profile.jpeg"
                    alt="Ehsan Afzal"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <h3 className="text-3xl font-bold text-white mb-2">Hello, I&apos;m Ehsan</h3>
                <p className="text-cyan-400 font-medium text-base sm:text-lg">Passionate Developer & Engineer</p>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              I&apos;m a Software Engineer with a deep passion for backend development. I specialize in building <span className="text-white font-medium">scalable systems</span>, designing clean <span className="text-white font-medium">RESTful APIs</span>, and implementing robust <span className="text-white font-medium">authentication and authorization</span> mechanisms using the <span className="text-white font-medium">MERN stack</span>.
            </p>
            <p className="text-neutral-400 leading-relaxed text-base sm:text-lg">
              While my core strength lies in backend architecture, I also bring strong frontend skills with <span className="text-white font-medium">React.js</span> allowing me to deliver <span className="text-white font-medium">full-stack solutions</span> from concept to deployment. I hold a BS in Software Engineering, and I care about writing code that&apos;s clean, secure, and built to scale. I actively use AI-assisted tools like Cursor to speed up development and stay efficient in fast-paced environments, while still owning every architectural and security decision myself.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: '3+', label: 'Projects Built' },
                { num: '3+', label: 'Tech Stacks' },
                { num: '1+', label: 'Years Coding' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-neutral-900/40 border border-neutral-800 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.num}</div>
                  <div className="text-xs sm:text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Cards */}
          <div className={`space-y-4 ${isInView ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group p-5 bg-neutral-900/30 border border-neutral-800 rounded-xl hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {item.desc}
                    </p>
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
