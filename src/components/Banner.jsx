import React from "react";

const Banner = () => {
  return (
    <div className="animate-slide-down bg-gradient-to-r from-neon-blue/20 to-purple-500/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-neon-blue to-purple-400 bg-clip-text text-transparent">
              GlassCSS Builder
            </span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Create beautiful glassmorphism effects with real-time preview
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
