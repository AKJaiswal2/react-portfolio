import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "ChatAI",
    description:
      "Multi-agent AI chat application powered by LangGraph, featuring an intelligent supervisor that dynamically routes queries across RAG, semantic memory, and real-time web search agents — all synthesized by a dedicated responder using Groq LLaMA 3.",
    image: "/projects/project3.png",
    tags: ["LangGraph", "LangChain", "RAG", "Groq", "LLM", "Node.js", "React", "HuggingFace", "Tavily", "Vector DB"],
    link: "https://chat-ai-one-tan.vercel.app/",
    featured: true,
  },
  {
    title: "Web3Toolkit",
    description:
      "Real-time blockchain analytics platform for tracking on-chain transactions, analytics, and event processing at scale.",
    image: "/projects/project1.png",
    tags: ["NodeJS", "NestJS", "AWS", "MongoDB", "PostgreSQL", "Redis", "Socket.io", "Docker"],
    link: "https://web3paymentsolutions.io/",
  },
  {
    title: "AreYouIn",
    description:
      "Event discovery and management platform enabling users to create, join, and engage with communities through live events.",
    image: "/projects/project2.png",
    tags: ["NodeJS", "MongoDB", "Redis", "PM2"],
    link: "https://www.areyou.in/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work — from scalable backend platforms to
            intelligent AI-powered applications built with the latest LLM frameworks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass rounded-2xl overflow-hidden animate-fade-in block ${project.featured ? "md:col-span-2" : "md:row-span-1"
                }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${project.featured ? "aspect-[21/9]" : "aspect-video"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold backdrop-blur-sm">
                    ✦ AI Project
                  </div>
                )}

                {/* Overlay link icon */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};