import React from "react";
import {
  Smartphone,
  Tablet,
  Code2,
  Cloud,
  Bell,
  ShoppingCart,
} from "lucide-react";

const AppDevelopment = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Native iOS & Android",
      description: "Platform-specific optimized applications",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Cross-Platform Solutions",
      description: "One codebase, multiple platforms",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Integration",
      description: "Seamless backend connectivity",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Push Notifications",
      description: "Real-time user engagement",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "In-App Purchases",
      description: "Monetization and payment integration",
    },
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Firebase",
    "AWS",
    "MongoDB",
    "Node.js",
  ];

  const platforms = [
    {
      name: "iOS",
      icon: "📱",
      color: "from-blue-500 to-cyan-500",
      features: [
        "App Store Optimization",
        "iOS Design Guidelines",
        "Swift & Objective-C",
      ],
    },
    {
      name: "Android",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      features: ["Google Play Console", "Material Design", "Kotlin & Java"],
    },
    {
      name: "Cross-Platform",
      icon: "🔄",
      color: "from-purple-500 to-pink-500",
      features: ["Single Codebase", "Faster Development", "Cost Effective"],
    },
  ];

  return (
    <div className="no-scrollbar h-screen w-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 grid shrink-0 place-items-center overflow-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mt-20 mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
            <Tablet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            App{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building powerful mobile applications that engage users and drive
            business growth. From native to cross-platform, we deliver
            exceptional mobile experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {platform.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {platform.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${platform.color} rounded-full mr-3`}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
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
            Development Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full border border-green-500/30 hover:border-green-400/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Development Lifecycle
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { phase: "Plan", icon: "📋" },
              { phase: "Design", icon: "🎨" },
              { phase: "Develop", icon: "⚡" },
              { phase: "Test", icon: "🧪" },
              { phase: "Deploy", icon: "🚀" },
              { phase: "Maintain", icon: "🔧" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl mb-3 hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="text-white font-medium">{step.phase}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Apps Developed" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
            { number: "100K+", label: "Downloads Generated" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
