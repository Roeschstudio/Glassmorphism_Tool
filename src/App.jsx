import React, { useState } from "react";
import Banner from "./components/Banner";
import CodeOutput from "./components/CodeOutput";
import InputPanel from "./components/InputPanel";
import PreviewCard from "./components/PreviewCard";

function App() {
  const [glassConfig, setGlassConfig] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 0.1,
    blur: 10,
    borderRadius: 16,
  });

  const updateConfig = (key, value) => {
    setGlassConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const generateCSS = () => {
    const { r, g, b, a, blur, borderRadius } = glassConfig;
    return `.glass-element {
  background: rgba(${r}, ${g}, ${b}, ${a});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border-radius: ${borderRadius}px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`;
  };

  return (
    <div className="min-h-screen bg-dark-matte gradient-bg">
      <Banner />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Controls */}
          <div className="space-y-6">
            <InputPanel config={glassConfig} updateConfig={updateConfig} />
            <CodeOutput css={generateCSS()} />
          </div>

          {/* Right Column - Preview */}
          <div className="flex items-center justify-center">
            <PreviewCard config={glassConfig} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
