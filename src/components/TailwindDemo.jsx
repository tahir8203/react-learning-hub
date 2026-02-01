import React from 'react';

export default function TailwindDemo() {
  const installText = '// install (project root)\\nnpm install -D tailwindcss postcss autoprefixer\\nnpx tailwindcss init -p\\n\\n// tailwind.config.js\\nmodule.exports = {\\n  content: [\'./index.html\', \'./src/**/*.{js,jsx}\'],\\n  theme: { extend: {} },\\n  plugins: [],\\n}';

  return (
    <div className="example-card">
      <h4>Live Tailwind Demo (requires Tailwind installed)</h4>
      <div className="explanation">
        <p>
          This button uses Tailwind utility classes. It will display correctly
          after you install and configure Tailwind in the project (instructions
          are shown below).
        </p>
      </div>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow">
          Get started
        </button>

        <div style={{ flex: 1, minWidth: 260 }}>
          <pre className="code-block">
            <code>{installText}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
