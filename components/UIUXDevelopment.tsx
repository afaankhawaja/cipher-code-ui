import React from "react";
import { Palette, Users, Eye, Layers, Smartphone, Monitor } from "lucide-react";

const UIUXDevelopment = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Research & Analysis",
      description: "Deep understanding of user behavior",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Wireframing & Prototyping",
      description: "Interactive prototypes and wireframes",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Design & Branding",
      description: "Stunning visual identities and designs",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Responsive Design Systems",
      description: "Consistent designs across all devices",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Usability Testing",
      description: "Optimized user experience validation",
    },
  ];

  const technologies = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Principle",
    "InVision",
    "Miro",
    "Framer",
    "Photoshop",
  ];

  const designPrinciples = [
    { title: "User-Centered", desc: "Putting users at the heart of design" },
    { title: "Accessibility", desc: "Inclusive design for everyone" },
    { title: "Consistency", desc: "Unified design language" },
    { title: "Innovation", desc: "Creative and modern solutions" },
  ];

  return (
    <div className="no-scrollbar h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 grid shrink-0 place-items-center overflow-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mt-20 mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            UI/UX{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Design
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting intuitive, beautiful user experiences that convert visitors
            into customers. We blend creativity with psychology to create
            designs that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {designPrinciples.map((principle, index) => (
            <div
              key={index}
              className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
              <h4 className="text-white font-semibold mb-2">
                {principle.title}
              </h4>
              <p className="text-gray-400 text-sm">{principle.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Design Tools & Software
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Our Design Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Research", desc: "User needs analysis" },
              { step: "Ideate", desc: "Creative brainstorming" },
              { step: "Design", desc: "Visual creation" },
              { step: "Prototype", desc: "Interactive testing" },
              { step: "Iterate", desc: "Continuous improvement" },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {process.step}
                </h4>
                <p className="text-gray-400 text-sm">{process.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXDevelopment;
