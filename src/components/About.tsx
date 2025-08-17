const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            About Me
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in fade-in-delay-1">
            <div className="glass-card p-8 rounded-2xl">
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-accent-purple/20 
                               flex items-center justify-center text-6xl mb-8 floating">
                  👩‍💻
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 
                               rounded-full border-2 border-primary/30 border-dashed animate-spin"
                     style={{ animationDuration: '20s' }}></div>
              </div>
            </div>
          </div>

          <div className="fade-in fade-in-delay-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary font-mono">
                console.log("About Khushi");
              </h3>
              
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  I'm a passionate <span className="text-primary font-semibold">MERN Stack Developer</span> 
                  with a love for creating exceptional digital experiences. My journey in web development 
                  started with curiosity and has evolved into a deep expertise in modern technologies.
                </p>
                
                <p>
                  I specialize in building <span className="text-accent-green">scalable applications</span> 
                  using React.js, Node.js, Express.js, and MongoDB. My goal is to write clean, 
                  efficient code that not only works but is also maintainable and readable.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-4 text-center rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-primary">2028</div>
                  <div className="text-sm text-muted-foreground">Graduate</div>
                </div>
                <div className="glass-card p-4 text-center rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-accent-green">1st</div>
                  <div className="text-sm text-muted-foreground">Year Completed</div>
                </div>
              </div>

              <div className="terminal mt-8">
                <div className="terminal-prompt">$ whoami</div>
                <div className="terminal-text mt-2">
                  Full Stack Developer | Problem Solver | Tech Enthusiast
                </div>
                <div className="terminal-prompt mt-4">$ cat interests.txt</div>
                <div className="terminal-text mt-2">
                  Modern Web Technologies, UI/UX Design, Open Source, Continuous Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;