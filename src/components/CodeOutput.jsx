import React, { useState } from "react";

const CodeOutput = ({ css }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = css;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="glass-effect bg-white/5 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
          Generated CSS
        </h2>

        <button
          onClick={copyToClipboard}
          className={`
            px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 
            copy-button-glow focus-ring relative overflow-hidden
            ${
              copied
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : "bg-neon-blue/20 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/30"
            }
          `}
          disabled={copied}
        >
          <span className="relative z-10 flex items-center space-x-2">
            {copied ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copy CSS</span>
              </>
            )}
          </span>
        </button>
      </div>

      <div className="relative">
        <pre className="bg-gray-900/50 rounded-lg p-4 text-sm font-mono text-gray-300 overflow-x-auto border border-white/10">
          <code>{css}</code>
        </pre>

        {/* Syntax highlighting overlay */}
        <div className="absolute top-4 left-4 right-4 pointer-events-none">
          <div className="text-sm font-mono space-y-1 opacity-0">
            {css.split("\n").map((line, index) => (
              <div key={index} className="whitespace-pre">
                {line.replace(
                  /([a-zA-Z-]+):/g,
                  '<span class="text-blue-400">$1</span>:'
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        <p>
          💡 Tip: This CSS uses modern backdrop-filter for the glass effect. For
          better browser support, consider adding fallbacks.
        </p>
      </div>
    </div>
  );
};

export default CodeOutput;
