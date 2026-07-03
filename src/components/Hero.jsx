import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Grid Pattern Background instead of colorful glowing orbs */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      
      {/* Subtle spotlight effect for true black theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto ${isInView ? '' : 'opacity-0'}`}>
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md text-sm text-neutral-400 mb-8 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 font-['Poppins'] ${
            isInView ? 'animate-fade-in-up delay-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text-hero">Ehsan</span>{' '}
          <span className="gradient-text">Afzal</span>
        </h1>

        {/* Title */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl font-medium text-neutral-300 mb-4 ${
            isInView ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}
        >
          Backend-Focused{' '}
          <span className="text-cyan-400">Full Stack Developer</span>
        </p>

        {/* Tagline */}
        <p
          className={`text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed ${
            isInView ? 'animate-fade-in-up delay-300' : 'opacity-0'
          }`}
        >
          Building scalable, secure web systems crafting robust APIs and bringing ideas to life with clean, efficient code.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isInView ? 'animate-fade-in-up delay-400' : 'opacity-0'
          }`}
        >
          <a
            href="#projects"
            id="hero-view-projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#"
            id="hero-download-resume"
            className="group px-8 py-3.5 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 text-neutral-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 sm:mt-24 flex justify-center ${
            isInView ? 'animate-fade-in delay-700' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-neutral-600">
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-neutral-800 flex justify-center pt-1.5 bg-neutral-900/50">
              <div
                className="w-1 h-2 rounded-full bg-cyan-500"
                style={{ animation: 'float 2s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
