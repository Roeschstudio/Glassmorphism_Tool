import React from "react";

const InputPanel = ({ config, updateConfig }) => {
  const SliderInput = ({
    label,
    value,
    min,
    max,
    step,
    onChange,
    unit = "",
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-xs text-neon-blue font-mono">
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider-track focus-ring"
        style={{
          background: `linear-gradient(to right, #22D3EE 0%, #22D3EE ${
            ((value - min) / (max - min)) * 100
          }%, rgba(255,255,255,0.1) ${
            ((value - min) / (max - min)) * 100
          }%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
    </div>
  );

  return (
    <div className="glass-effect bg-white/5 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
        <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
        Glass Properties
      </h2>

      <div className="space-y-6">
        {/* RGBA Controls */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Background Color (RGBA)
          </h3>

          <SliderInput
            label="Red"
            value={config.r}
            min={0}
            max={255}
            step={1}
            onChange={(value) => updateConfig("r", value)}
          />

          <SliderInput
            label="Green"
            value={config.g}
            min={0}
            max={255}
            step={1}
            onChange={(value) => updateConfig("g", value)}
          />

          <SliderInput
            label="Blue"
            value={config.b}
            min={0}
            max={255}
            step={1}
            onChange={(value) => updateConfig("b", value)}
          />

          <SliderInput
            label="Alpha"
            value={config.a}
            min={0}
            max={1}
            step={0.01}
            onChange={(value) => updateConfig("a", value)}
          />
        </div>

        {/* Effect Controls */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            Glass Effects
          </h3>

          <SliderInput
            label="Blur Radius"
            value={config.blur}
            min={0}
            max={50}
            step={1}
            unit="px"
            onChange={(value) => updateConfig("blur", value)}
          />

          <SliderInput
            label="Border Radius"
            value={config.borderRadius}
            min={0}
            max={50}
            step={1}
            unit="px"
            onChange={(value) => updateConfig("borderRadius", value)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputPanel;
