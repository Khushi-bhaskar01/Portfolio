const Projects = () => {
  const projects = [
    {
      title: "HackTracker",
      description: "HackTracker helps you track your hackathon journey, deadlines, and submissions — and showcase your achievements with a public shareable profile",
      tech: ["React", "Node.js", "MongoDB","Expressjs", "JWT"],
      github: "https://github.com/Khushi-bhaskar01/VibeCode25",
      live: "https://hacktracker.netlify.app/",
      image: "🛤️",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Captain-Focus",
      description: "Captain Focus is a productivity tool powered by Omnidimension AI, offering voice and text-based interactions to help you stay focused though voice features may not work due to limited API access.",
      tech: ["React", "Omnidimension"],
      github: "https://github.com/Khushi-bhaskar01/Captain-Focus",
      live: "https://react-app-123-gamma.vercel.app/",
      image: "🤖",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with geolocation, 7-day forecasts and interactive maps",
      tech: ["HTML","JS", "OpenWeatherMap API", "CSS3"],
      github: "https://github.com/Khushi-bhaskar01/Weather-App",
      live: "https://weather-app-l4vy.vercel.app/",
      image: "🌤️",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Mood Tracker",
      description: "A simple mood tracker app that analyzes user input and gives voice feedback based on emotional tone.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/Khushi-bhaskar01/Khushi_ui_empire",
      live: "https://khushi-ui-empire.vercel.app/",
      image: "🌈",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Featured Projects
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`fade-in fade-in-delay-${(index % 3) + 1} group`}
            >
              <div className="glass-card p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Project Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} 
                                 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 
                                 transition-transform duration-300`}>
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 
                                 text-primary border border-primary/20 hover:border-primary/40 
                                 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="mt-auto pt-4 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glow-button px-4 py-3 rounded-lg text-center text-primary-foreground 
                             font-medium transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 glass-card px-4 py-3 rounded-lg text-center text-primary 
                             border border-primary/30 hover:border-primary/60 font-medium
                             transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Section */}
        <div className="fade-in fade-in-delay-3 mt-16">
          <div className="glass-card max-w-4xl mx-auto p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 font-mono">
                GitHub Activity
              </h3>
              <p className="text-muted-foreground">
                Check out my open source contributions and coding activity
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Commits</div>
              </div>
              <div className="text-center p-6 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-accent-green mb-2">25+</div>
                <div className="text-muted-foreground">Public Repositories</div>
              </div>
              <div className="text-center p-6 glass-card rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-accent-purple mb-2">10+</div>
                <div className="text-muted-foreground">Open Source Contributions</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://github.com/Khushi-bhaskar01"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button px-8 py-4 rounded-lg text-primary-foreground font-semibold 
                         transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Full GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;