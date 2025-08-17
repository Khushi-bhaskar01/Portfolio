const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Khushi Bhaskar
              </span>{' '}
              👋
            </h1>
          </div>

          <div className="fade-in fade-in-delay-1">
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
              <span className="text-accent-green">&gt;</span> Full Stack Developer specializing in{' '}
              <span className="text-primary font-semibold">MERN Stack</span>
            </div>
          </div>

          <div className="fade-in fade-in-delay-2">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Passionate about creating scalable web applications with modern technologies. 
              I transform ideas into digital reality through clean code and innovative solutions.
            </p>
          </div>

          <div className="fade-in fade-in-delay-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#projects"
                className="glow-button px-8 py-4 rounded-lg text-primary-foreground font-semibold 
                         transition-all duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="glass-card px-8 py-4 rounded-lg text-primary border border-primary/30 
                         hover:border-primary/60 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Floating code snippet */}
          <div className="fade-in fade-in-delay-3 mt-16">
            <div className="glass-card max-w-md mx-auto p-6 text-left font-mono text-sm">
              <div className="flex items-center mb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-green"></div>
                </div>
                <span className="ml-3 text-muted-foreground">portfolio.js</span>
              </div>
              <div className="text-accent-green">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span> = {'{'}
              </div>
              <div className="ml-4 text-muted-foreground">
                name: <span className="text-yellow-400">'Khushi Bhaskar'</span>,
              </div>
              <div className="ml-4 text-muted-foreground">
                skills: <span className="text-yellow-400">['React', 'Node.js', 'MongoDB', 'Expressjs']</span>,
              </div>
              <div className="ml-4 text-muted-foreground">
                passion: <span className="text-yellow-400">'Turning imagination into innovation that matters ✨'</span>
              </div>
              <div className="text-accent-green">{'};'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;