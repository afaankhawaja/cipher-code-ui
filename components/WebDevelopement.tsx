import React from "react";
import { Globe, Code, Database, Zap, Shield, Search } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Website Development",
      description: "Tailored solutions built from scratch",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "E-commerce Solutions",
      description: "Complete online store development",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Progressive Web Apps",
      description: "Fast, reliable, and engaging PWAs",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "API Integration",
      description: "Seamless third-party integrations",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Search engine friendly architecture",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Express",
    "Tailwind CSS",
  ];

  return (
    <div className="no-scrollbar overflow-y-hidden h-screen w-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 grid shrink-0 place-items-center overflow-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Web{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building powerful, scalable web applications with cutting-edge
            technologies. From concept to deployment, we create digital
            experiences that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technologies We Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "Understanding your requirements",
            },
            {
              step: "02",
              title: "Design",
              desc: "Creating wireframes and mockups",
            },
            {
              step: "03",
              title: "Development",
              desc: "Building your application",
            },
            { step: "04", title: "Launch", desc: "Testing and deployment" },
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                {process.step}
              </div>
              <h4 className="text-white font-semibold mb-2">{process.title}</h4>
              <p className="text-gray-400 text-sm">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
