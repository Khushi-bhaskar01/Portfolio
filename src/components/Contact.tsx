import {
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { ReactNode } from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Get In Touch
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Whether you're looking for a developer, collaborator, or just want to say hi — I'm just a message away.
          </p>
        </div>

        <div className="grid gap-8 max-w-xl mx-auto">
          <ContactCard
            title="Email"
            value="khushibhaskar.2006@gmail.com"
            href="mailto:khushibhaskar.2006@gmail.com"
            icon={<Mail className="w-6 h-6 text-white" />}
          />

          <ContactCard
            title="GitHub"
            value="@Khushi-bhaskar01"
            href="https://github.com/Khushi-bhaskar01"
            icon={<Github className="w-6 h-6 text-white" />}
          />

          <ContactCard
            title="LinkedIn"
            value="@Khushi Bhaskar"
            href="https://www.linkedin.com/in/khushi-bhaskar-b00586324/"
            icon={<Linkedin className="w-6 h-6 text-white" />}
          />

        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  title,
  value,
  href,
  icon,
}: {
  title: string;
  value: string;
  href: string;
  icon: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-4 p-4 glass-card rounded-xl 
             hover:scale-105 transition-all duration-300 hover:border-primary/40"
  >
    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow 
                  rounded-lg flex items-center justify-center group-hover:scale-110 
                  transition-transform duration-300">
      {icon}
    </div>
    <div>
      <div className="font-semibold text-primary group-hover:text-primary-glow transition-colors">
        {title}
      </div>
      <div className="text-muted-foreground">{value}</div>
    </div>
  </a>
);

export default Contact;
