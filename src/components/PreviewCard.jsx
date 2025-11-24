import React from "react";

const PreviewCard = ({ config }) => {
  const { r, g, b, a, blur, borderRadius } = config;

  const glassStyle = {
    background: `rgba(${r}, ${g}, ${b}, ${a})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    borderRadius: `${borderRadius}px`,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
          Live Preview
        </h2>
      </div>

      {/* Preview Container with Background Pattern */}
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, #22D3EE 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
            `,
            }}
          ></div>
        </div>

        {/* Glass Card */}
        <div
          className="relative p-8 transition-all duration-300 ease-out"
          style={glassStyle}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-neon-blue to-purple-400 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Glassmorphism Card
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              This is your live preview. Adjust the controls to see real-time
              changes in the glass effect.
            </p>

            <div className="flex justify-center space-x-2 pt-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Preview */}
      <div className="mt-4 p-3 glass-effect bg-white/5 rounded-lg">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Current Color:</span>
          <div className="flex items-center space-x-2">
            <div
              className="w-4 h-4 rounded border border-white/20"
              style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})` }}
            ></div>
            <span className="font-mono">
              rgba({r}, {g}, {b}, {a.toFixed(2)})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
