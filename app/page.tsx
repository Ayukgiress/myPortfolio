import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { SiJavascript, SiTailwindcss, SiHtml5, SiReact, SiReactquery, SiMongodb, SiPostgresql, SiNextdotjs, SiNodedotjs, SiNestjs, SiTypescript, SiExpress, SiGit, SiNpm, SiPnpm } from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black text-foreground">
      <Nav />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-5 pt-24 pb-16 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.05),transparent_50%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.03),transparent_50%)]"></div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center xl:w-[100rem] max-w-6xl mx-auto relative z-10">
    {/* Left Column - Name and Career */}
    <div className="animate-fade-in-up space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent leading-tight">
          Ayuk Giress
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
      </div>

      <div className="space-y-6">
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
          Full Stack Developer
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
          Crafting modern web applications with cutting-edge technologies and exceptional user experiences.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a
          href="#about"
          className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1"
        >
          <span className="flex items-center justify-center gap-2">
            Learn More
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </a>
        <a
          href="#contact"
          className="group border-2 border-green-600 text-green-600 dark:text-green-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1"
        >
          <span className="flex items-center justify-center gap-2">
            Contact Me
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
        </a>
      </div>
      
      {/* Social Links */}
      <div className="flex space-x-4 pt-2">
        <a href="https://twitter.com/ayukgiress" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/ayukgiress" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="https://github.com/ayukgiress" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Right Column - Image */}
    <div className="flex justify-center animate-fade-in-right">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
          <div className="bg-white dark:bg-gray-900 border-4 border-white dark:border-gray-800 rounded-full w-72 h-72 md:w-80 md:h-80 flex items-center justify-center shadow-inner">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Your Photo</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse shadow-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-5 py-24 bg-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.03),transparent_70%)]"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-fade-in">
                  About Me
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto"></div>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
                I'm a passionate full-stack developer with a love for creating innovative web applications. I specialize in modern web technologies and enjoy bringing ideas to life through clean, efficient code. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-16 space-y-12 animate-fade-in-down">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {/* JavaScript */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0s' }}>
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '0s' }}>
                    <SiJavascript className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">JavaScript</span>
                </div>

                {/* TypeScript */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.1s' }}>
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '0.5s' }}>
                    <SiTypescript className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">TypeScript</span>
                </div>

                {/* HTML5 */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '1s' }}>
                    <SiHtml5 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">HTML5</span>
                </div>

                {/* React */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '1.5s' }}>
                    <SiReact className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">React</span>
                </div>

                {/* React Native */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '2s' }}>
                    <SiReactquery className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">React Native</span>
                </div>

                {/* Next.js */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center shadow-lg border border-gray-700 tech-icon animate-float" style={{ animationDelay: '2.5s' }}>
                    <SiNextdotjs className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">Next.js</span>
                </div>

                {/* Tailwind CSS */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '3s' }}>
                    <SiTailwindcss className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">Tailwind CSS</span>
                </div>

                {/* Node.js */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.7s' }}>
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '3.5s' }}>
                    <SiNodedotjs className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">Node.js</span>
                </div>

                {/* Express */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '4s' }}>
                    <SiExpress className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">Express</span>
                </div>

                {/* NestJS */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '0.9s' }}>
                  <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '4.5s' }}>
                    <SiNestjs className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">NestJS</span>
                </div>

                {/* MongoDB */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '5s' }}>
                    <SiMongodb className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">MongoDB</span>
                </div>

                {/* PostgreSQL */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '1.1s' }}>
                  <div className="w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '5.5s' }}>
                    <SiPostgresql className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">PostgreSQL</span>
                </div>

                {/* Git */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '1.2s' }}>
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '6s' }}>
                    <SiGit className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">Git</span>
                </div>

                {/* npm */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '1.3s' }}>
                  <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '6.5s' }}>
                    <SiNpm className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">npm</span>
                </div>

                {/* pnpm */}
                <div className="flex flex-col items-center gap-3 group animate-stagger-fade-in" style={{ animationDelay: '1.4s' }}>
                  <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg tech-icon animate-float" style={{ animationDelay: '7s' }}>
                    <SiPnpm className="w-8 h-8 text-black" />
                  </div>
                  <span className="text-white font-medium bg-black/50 px-3 py-1 rounded">pnpm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="min-h-screen flex items-center justify-center px-5 py-24 bg-gradient-to-b from-black to-gray-900/50 dark:from-gray-900/50 dark:to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,197,94,0.03),transparent_70%)]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-fade-in">
                  Certifications
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto"></div>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Showcasing my commitment to continuous learning and skill development in web technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* HackerRank JavaScript Intermediate */}
              <div className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/20 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">JavaScript</h3>
                    <p className="text-gray-300 leading-relaxed">Intermediate level certification demonstrating proficiency in JavaScript fundamentals, ES6+ features, and modern development practices.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-100/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-400/30">Intermediate</span>
                      <span className="px-3 py-1 bg-gray-100/20 text-gray-300 rounded-full text-sm font-medium border border-gray-400/30">HackerRank</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* HackerRank React Basics */}
              <div className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/20 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89zM7.37 19.24c.35.27.79.44 1.26.44.48 0 .9-.16 1.26-.44.35-.27.58-.64.58-1.06 0-.43-.23-.8-.58-1.06-.35-.27-.78-.44-1.26-.44-.47 0-.91.17-1.26.44-.35.26-.58.63-.58 1.06 0 .42.23.79.58 1.06zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.93 7.57c-.05.08-.1.16-.17.23-.14.14-.32.23-.52.27-.43.08-.87-.13-1.08-.52-.05-.1-.08-.2-.08-.31 0-.18.06-.35.17-.49.28-.37.88-.43 1.31-.15.11.07.2.17.26.3.14.31.08.68-.11.97-.05.08-.11.15-.18.22-.14.14-.32.23-.52.27-.43.08-.87-.13-1.08-.52-.05-.1-.08-.2-.08-.31 0-.18.06-.35.17-.49.28-.37.88-.43 1.31-.15.11.07.2.17.26.3.14.31.08.68-.11.97z"/>
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">React</h3>
                    <p className="text-gray-300 leading-relaxed">Basics certification covering fundamental React concepts including components, props, state management, and JSX.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-100/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30">Basics</span>
                      <span className="px-3 py-1 bg-gray-100/20 text-gray-300 rounded-full text-sm font-medium border border-gray-400/30">HackerRank</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* HackerRank Node.js */}
              <div className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/20 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1.27l10.09 5.8v11.86L12 22.73 1.91 18.93V7.07L12 1.27zM12 3.73L4.91 7.87v8.26L12 20.27l7.09-4.14V7.87L12 3.73zM10.09 8.73h3.82L12 12.09l-1.91-3.36zm1.91 6.18l1.91-3.36h3.82l-5.73 10-5.73-10h3.82l1.91 3.36z"/>
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">Node.js</h3>
                    <p className="text-gray-300 leading-relaxed">Certification demonstrating knowledge of Node.js fundamentals, including modules, file system operations, and server-side JavaScript development.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100/20 text-green-300 rounded-full text-sm font-medium border border-green-400/30">Certified</span>
                      <span className="px-3 py-1 bg-gray-100/20 text-gray-300 rounded-full text-sm font-medium border border-gray-400/30">HackerRank</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-5 py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-black dark:to-gray-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.05),transparent_70%)]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-fade-in">
                  My Projects
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto"></div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of the projects I've worked on, showcasing my skills in full-stack development.
              </p>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-black dark:text-white">E-Commerce Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Next.js</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">TypeScript</span>
                    </div>
                    <a href="#" className="group/link flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors">
                      <span>View</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Analytics Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">A comprehensive analytics dashboard with real-time data visualization, built with React and D3.js for interactive charts.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">D3.js</span>
                    </div>
                    <a href="#" className="group/link flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors">
                      <span>View</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

                  <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Analytics Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">A comprehensive analytics dashboard with real-time data visualization, built with React and D3.js for interactive charts.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">D3.js</span>
                    </div>
                    <a href="#" className="group/link flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors">
                      <span>View</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

               <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Analytics Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">A comprehensive analytics dashboard with real-time data visualization, built with React and D3.js for interactive charts.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">D3.js</span>
                    </div>
                    <a href="#" className="group/link flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors">
                      <span>View</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

               <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Analytics Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">A comprehensive analytics dashboard with real-time data visualization, built with React and D3.js for interactive charts.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">D3.js</span>
                    </div>
                    <a href="#" className="group/link flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors">
                      <span>View</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-black dark:text-white">Task Management App</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Vue.js</span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Firebase</span>
                    </div>
                    <a href="#" className="group/link flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors">
                      <span>View</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-5 py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-black relative">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.05),transparent_70%)]"></div>
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <div className="space-y-8 mb-16">
      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-black via-gray-800 to-black dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-fade-in">
          Let's Connect
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto"></div>
      </div>

      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
        Ready to bring your ideas to life? Whether it's a groundbreaking project, a collaboration opportunity,
        or just a friendly chat about the latest in tech—I'm here and excited to connect with you!
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {/* Contact Info - Left side */}
      <div className="order-2 lg:order-1 flex flex-col h-full">
        <div className="flex-1 flex flex-col justify-between gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-black dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">ayuk.giress@example.com</p>
                  <a href="mailto:ayuk.giress@example.com" className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm transition-colors group/link mt-1">
                    <span>Drop me a line</span>
                    <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-black dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Somewhere in the World</p>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-medium text-sm">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons - At the bottom */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:ayuk.giress@example.com"
                className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Let's Chat</span>
              </a>
              <a
                href="#home"
                className="group border-2 border-green-600 text-green-600 dark:text-green-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Back to Top</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form - Right side */}
      <div className="order-1 lg:order-2">
        <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transform transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 h-full flex flex-col">
          <div className="flex-1 flex flex-col space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold text-black dark:text-white">Send a Message</h3>
              <p className="text-gray-600 dark:text-gray-300">I'd love to hear from you!</p>
            </div>

            <form className="space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </div>
  );
}
