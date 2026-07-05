import { Brain, Code2, Cpu, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & LLM Systems",
    description:
      "Designing multi-agent pipelines and RAG systems powered by LLMs, LangChain, and LangGraph.",
  },
  {
    icon: Cpu,
    title: "Agentic Architectures",
    description:
      "Building autonomous agent workflows — supervisor routing, tool-calling, and memory-augmented reasoning.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code across both backend systems and AI service layers.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Delivery",
    description:
      "End-to-end ownership from API design and microservices to deploying production AI applications.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building intelligent systems,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one agent at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Software Engineer with 3+ years of experience, now specializing at the intersection of backend engineering and AI systems. My journey started with building large-scale distributed backends — and has evolved into architecting intelligent, agentic applications powered by LLMs.
              </p>
              <p>
                I work extensively with LangChain, LangGraph, RAG pipelines, vector databases, and LLMs (Groq, Ollama, HuggingFace) to build multi-agent systems that reason, retrieve, and respond intelligently. On the backend, I bring deep expertise in Node.js, TypeScript, NestJS, PostgreSQL, Redis, MongoDB, and AWS.
              </p>
              <p>
                When I'm not shipping code, I'm exploring the latest in Generative AI, agentic frameworks, and foundation models — constantly pushing the boundary between traditional software engineering and AI-native development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to fuse backend engineering excellence with the power of AI — building systems that don't just scale, but think."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};