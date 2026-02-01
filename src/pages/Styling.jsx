import React from 'react';
import Layout from '../components/Layout';
import ExampleCard from '../components/ExampleCard';
import TailwindDemo from '../components/TailwindDemo';
import InteractiveStylingSandbox from '../components/InteractiveStylingSandbox';

const snippetGlobal = "/* src/index.js */\nimport './styles.css'\n\n/* Component */\nfunction Card(){\n  return <div className=\"card\">Hello from Global CSS</div>\n}";
const snippetModule = "/* Button.module.css */\n.btn { background:#667eea; color:#fff; padding:8px 12px; border-radius:6px }\n\n/* Button.jsx */\nimport styles from './Button.module.css'\nexport default function Button(){\n  return <button className={styles.btn}>Click me</button>\n}";
const snippetInline = "const boxStyle = { padding: '12px', background: '#fafafa', borderRadius: '8px' }\n\nfunction Card(){\n  return <div style={boxStyle}>Inline styled box</div>\n}";
const snippetStyled = "// npm install styled-components\nimport styled from 'styled-components'\n\nconst Button = styled.button`\n  background: #667eea;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n`\n\nfunction App(){\n  return <Button>Styled</Button>\n}";
const snippetTailwind = "// install (project root)\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\n// tailwind.config.js\nmodule.exports = {\n  content: ['./index.html', './src/**/*.{js,jsx}'],\n  theme: { extend: {} },\n  plugins: [],\n}";
const snippetTailwindSteps = "# 1) Install (project root)\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\n# 2) Configure tailwind.config.js\nmodule.exports = {\n  content: ['./index.html', './src/**/*.{js,jsx}'],\n  theme: { extend: {} },\n  plugins: [],\n}\n\n# 3) Create src/index.css and add:\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n# 4) Import './index.css' in src/main.jsx\n# 5) Use classes: <div className=\"p-4 bg-white rounded\">Text</div>";

export default function Styling() {
  return (
    <Layout>
      <div className="topic-page">
        <div className="page-header">
          <h1>Styling in React</h1>
          <p className="page-subtitle">Multiple ways to style React apps with clear examples and live previews</p>
        </div>

        <div className="topic-card">
          <div className="topic-content">
            <h2>What is Styling in React?</h2>
            <p className="concept-intro">Styling controls how UI looks and feels. In React you can use global CSS, CSS Modules, inline styles, CSS-in-JS, or utility frameworks like Tailwind. Below are 5 approaches with code and output examples.</p>
          </div>
        </div>

        <ExampleCard title="1. Global CSS (example + output)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetGlobal}</code></pre>
            <div className="demo-output">
              <div className="card" style={{ padding: 18, borderRadius: 10, border: '1px solid #e8e8e8', background: '#fff' }}>Hello from Global CSS</div>
              <p className="note">Output: card rendered using a global class.</p>
            </div>
          </div>
          <p className="explanation">Global CSS is easy to start with. Import a stylesheet and use class names. Good for simple sites and global theming.</p>
        </ExampleCard>

        <ExampleCard title="2. CSS Modules (scoped styles)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetModule}</code></pre>
            <div className="demo-output">
              <button style={{ background: '#667eea', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Click me</button>
              <p className="note">Output: component-scoped styles avoid name collisions.</p>
            </div>
          </div>
          <p className="explanation">CSS Modules compile class names to unique identifiers. Use when you need local scoping without runtime libraries.</p>
        </ExampleCard>

        <ExampleCard title="3. Inline Styles (dynamic)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetInline}</code></pre>
            <div className="demo-output">
              <div style={{ padding: 12, background: '#fafafa', borderRadius: 8 }}>Inline styled box</div>
              <p className="note">Output: immediate styling via the style prop — ideal for dynamic values.</p>
            </div>
          </div>
          <p className="explanation">Inline styles let you compute values in JS. They don't support pseudo-classes or media queries directly, but are great for dynamic theming.</p>
        </ExampleCard>

        <ExampleCard title="4. CSS-in-JS (styled-components)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetStyled}</code></pre>
            <div className="demo-output">
              <button style={{ background: '#667eea', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Styled</button>
              <p className="note">Output: component-scoped styles using a runtime library.</p>
            </div>
          </div>
          <p className="explanation">CSS-in-JS provides powerful patterns (theming, dynamic props) at the cost of an extra dependency. Popular in large apps needing isolation.</p>
        </ExampleCard>

        <ExampleCard title="5. Tailwind CSS (utility-first)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetTailwind}</code></pre>
            <div className="demo-output">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow">Get started</button>
              <p className="note">Output: Tailwind utilities compose styling via className.</p>
            </div>
          </div>
          <p className="explanation">Tailwind is ideal for rapid UI development. Uses Purge/Content to remove unused CSS in production. Smallest CSS output when configured properly.</p>
        </ExampleCard>

        <TailwindDemo />

        <InteractiveStylingSandbox />

        <div className="topic-card">
          <div className="topic-content">
            <h2>Tailwind: When and Why to Use It</h2>
            <p>Use Tailwind when you want fast, consistent UI building with smaller CSS in production. Great for marketing sites, admin panels, and teams that prefer utility composition.</p>
            <h3>Why Tailwind?</h3>
            <ul className="benefits-box" style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>Rapid development (compose utilities, no writing CSS)</li>
              <li>Smaller output in production (tree-shaking unused utilities)</li>
              <li>Consistent design system out of the box</li>
              <li>Easy customization via tailwind.config.js</li>
              <li>Mobile-first responsive design built-in</li>
            </ul>
            <h3>Full Setup Steps</h3>
            <pre className="code-block"><code>{snippetTailwindSteps}</code></pre>
            <p className="explanation">After installation, Tailwind's build step (via PostCSS) generates utility classes. Configure the content paths so unused utilities are removed in production builds.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
