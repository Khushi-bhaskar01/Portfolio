import Card from "./Card";
import "./Certificates.css";

const certificates = [
  {
    title: "Postman API",
    description: "Gained expertise in API testing, collection management, and automation using Postman",
    src: "/certificates/postman.png",
    color: "#a1775f",
  },
  {
    title: "Web Development Fundamentals",
    description: "Issued by IBM SkillsBuild: Learned core web development concepts including HTML, CSS, and JavaScript fundamentals",
    src: "/certificates/webdev.png",
    color: "#3178C6",
  },
  {
    title: "Deloitte Technology Job Simulation",
    description: "Completed practical simulations in software development and coding, gaining hands-on experience with real-world tech tasks.",
    src: "/certificates/del.png",
    color: "#86BC25",
  },
  {
    title: "Prompt Design in Vertex AI",
    description: "Issued by Google Cloud: Earned introductory skill badge for designing effective prompts using Google's Vertex AI platform",
    src: "/certificates/prompt.png",
    color: "#6d7f9c",
  },
  {
    title: "Explore Generative AI with Vertex AI Gemini API",
    description: "Intermediate skill badge for exploring generative AI capabilities using Gemini API.",
    src: "/certificates/explore.png",
    color: "#F7DF1E",
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality",
    description: "Intermediate skill badge for working with multimodal documents using Gemini's RAG capabilities.",
    src: "/certificates/inspect.png",
    color: "#00BFA5",
  },
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    description: "Intermediate skill badge for building generative AI applications using Gemini and Streamlit.",
    src: "/certificates/develop.png",
    color: "#FF4081",
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen",
    description: "Introductory skill badge for creating practical AI solutions using Gemini and Imagen.",
    src: "/certificates/build.png",
    color: "#00BCD4",
  },
];

const Certificates = () => {
  return (
    <section id= "certificates" className="certificates-section">
      <h1 className="section-title">My Certifications</h1>
      <p className="section-subtitle">Here are some of my completed certifications</p>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <Card
            key={`cert-${index}`}
            i={index}
            title={cert.title}
            description={cert.description}
            src={cert.src}
            color={cert.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
