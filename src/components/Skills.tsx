const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90, color: "text-blue-400" },
        { name: "JavaScript", level: 88, color: "text-yellow-400" },
        { name: "TypeScript", level: 85, color: "text-blue-600" },
        { name: "HTML5/CSS3", level: 92, color: "text-orange-400" },
        { name: "Tailwind CSS", level: 87, color: "text-cyan-400" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, color: "text-green-500" },
        { name: "Express.js", level: 85, color: "text-gray-600" },
        { name: "MongoDB", level: 82, color: "text-green-600" },
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 88, color: "text-orange-500" },
        { name: "Canva", level: 75, color: "text-blue-400" },
        { name: "Figma", level: 85, color: "text-purple-500" },
        { name: "VS Code", level: 95, color: "text-blue-500" },
      ]
    }
  ];

  const techStack = [
    "React", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript",
    "Tailwind CSS", "Git"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Skills & Technologies
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="fade-in fade-in-delay-1 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-mono text-primary">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="tech-badge"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`fade-in fade-in-delay-${categoryIndex + 1} glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-primary font-mono">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${skill.color}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full 
                                 transition-all duration-1000 ease-out group-hover:scale-105"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Code Editor Mockup */}
        <div className="fade-in fade-in-delay-3 mt-16">
          <div className="glass-card max-w-2xl mx-auto p-6 font-mono text-sm">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-accent-green"></div>
              </div>
              <span className="ml-3 text-muted-foreground">skills.json</span>
            </div>
            <div className="space-y-2">
              <div className="text-accent-green">{'{'}</div>
              <div className="ml-4">
                <span className="text-blue-400">"primarySkills"</span>: [
              </div>
              <div className="ml-8 text-yellow-400">
                "MERN Stack Development",
              </div>
              <div className="ml-8 text-yellow-400">
                "Full Stack Architecture",
              </div>
              <div className="ml-4">],</div>
              <div className="ml-4">
                <span className="text-blue-400">"currentlyLearning"</span>: 
                <span className="text-yellow-400"> "Nextjs"</span>
              </div>
              <div className="text-accent-green">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;