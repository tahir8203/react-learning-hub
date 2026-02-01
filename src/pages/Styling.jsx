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
const snippetTailwindSteps = "# 1) Install (project root)\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n\n# 2) Configure tailwind.config.js content paths\nmodule.exports = {\n  content: ['./index.html', './src/**/*.{js,jsx}'],\n  theme: { extend: {} },\n  plugins: [],\n}\n\n# 3) Create src/index.css and add:\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n# 4) Import './index.css' in src/main.jsx or index.js\n# 5) Use classes in components: <div className=\"p-4 bg-white rounded\">";

export default function Styling() {
  return (
    <Layout>
      <div className="topic-page">
        <div className="page-header">
          <h1>🎨 Styling in React</h1>
          <p className="page-subtitle">Multiple ways to style React apps — with clear examples and live previews</p>
        </div>

        <div className="topic-card">
          <div className="topic-content">
            <h2>What is Styling in React?</h2>
            <p className="concept-intro">Styling controls how UI looks and feels. In React you can use global CSS, CSS Modules, inline styles, CSS-in-JS, or utility frameworks like Tailwind. Below are code + output examples with explanations.</p>
          </div>
        </div>

        <ExampleCard title="Global CSS (example + output)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetGlobal}</code></pre>
            <div className="demo-output">
              <div className="card" style={{ padding: 18, borderRadius: 10, border: '1px solid #e8e8e8', background: '#fff' }}>Hello from Global CSS</div>
              <p className="note">Output: a simple card rendered using a global class.</p>
            </div>
          </div>
          <p className="explanation">Global CSS is easy to start with — import a stylesheet and use class names. Good for simple sites and global theming.</p>
        </ExampleCard>

        <ExampleCard title="CSS Modules (scoped styles)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetModule}</code></pre>
            <div className="demo-output">
              <button style={{ background: '#667eea', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Click me</button>
              <p className="note">Output: component-scoped styles avoid global name collisions.</p>
            </div>
          </div>
          <p className="explanation">CSS Modules compile class names to unique identifiers. Use when you need local scoping without runtime libraries.</p>
        </ExampleCard>

        <ExampleCard title="Inline styles (dynamic)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetInline}</code></pre>
            <div className="demo-output">
              <div style={{ padding: 12, background: '#fafafa', borderRadius: 8 }}>Inline styled box</div>
              <p className="note">Output: immediate styling via the <code>style</code> prop — ideal for dynamic values.</p>
            </div>
          </div>
          <p className="explanation">Inline styles let you compute values in JS. They don't support pseudo-classes or media queries directly.</p>
        </ExampleCard>

        <ExampleCard title="CSS-in-JS (styled-components)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetStyled}</code></pre>
            <div className="demo-output">
              <button style={{ background: '#667eea', color: '#fff', padding: '8px 12px', borderRadius: 6, border: 'none' }}>Styled</button>
              <p className="note">Output: component-scoped styles using a runtime library; supports theming and props.</p>
            </div>
          </div>
          <p className="explanation">CSS-in-JS provides powerful patterns (theming, dynamic props) at the cost of an extra dependency.</p>
        </ExampleCard>

        <ExampleCard title="Tailwind CSS (utility-first)">
          <div className="example-display">
            <pre className="code-block"><code>{snippetTailwind}</code></pre>
            <div className="demo-output">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow">Get started</button>
              <p className="note">Output: Tailwind utilities compose styling via className. Install Tailwind and import its directives in your main CSS.</p>
            </div>
          </div>
          <p className="explanation">Tailwind is ideal for rapid UI development and consistent design systems. It uses Purge/Content to remove unused CSS in production.</p>
        </ExampleCard>

        <TailwindDemo />

        <InteractiveStylingSandbox />

        <div className="topic-card">
          <div className="topic-content">
            <h2>Tailwind: When and why to use it</h2>
            <p>Use Tailwind when you want fast, consistent UI building with smaller CSS output in production. It's great for marketing sites, admin panels, and teams that prefer utility composition over writing many custom class names.</p>
            <h3>Full setup steps</h3>
            <pre className="code-block"><code>{snippetTailwindSteps}</code></pre>
            <p className="explanation">After installation, Tailwind's build step (via PostCSS/Vite) generates the utility classes used in your markup. Configure <code>content</code> to point to your templates so unused utilities are removed in production.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
import React from 'react';
import TailwindDemo from '../components/TailwindDemo';
import InteractiveStylingSandbox from '../components/InteractiveStylingSandbox';

function CodeBlock({ children }) {
  return (
    <pre className="code-block">
      <code>{children}</code>
    </pre>
  );
}

export default function Styling() {
  return (
    <div className="topic-page styling-page main-content">
      <h1>Styling in React</h1>

      <section className="definition">
        <h2>What is Styling in React?</h2>
        <p>
          Styling in React refers to applying CSS to components to control layout,
          import Layout from '../components/Layout';
          import ExampleCard from '../components/ExampleCard';
          utility-first libraries like Tailwind CSS.
        </p>
          <li>CSS Modules (scoped, file-level CSS)</li>
          export default function Styling() {
            return (
              <Layout>
                <div className="topic-page">
                  <div className="page-header">
                    <h1>🎨 Styling in React</h1>
                    <p className="page-subtitle">Multiple ways to style React apps — with clear examples and live previews</p>
                  </div>

        <div className="example-card">
          <h4>Example 1 — Global CSS</h4>
          <div className="explanation">
            <p>
              Import a central stylesheet (for example in <strong>index.js</strong>)
              and use class names on elements.
            </p>
          </div>
          <div className="code-section">
            <CodeBlock>{`/* src/index.js */
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css' // global styles
import App from './App'

createRoot(document.getElementById('root')).render(<App />)`}</CodeBlock>
            <CodeBlock>{`// in a component
return <div className="card">Hello</div>`}</CodeBlock>
          </div>
        </div>

        <div className="example-card">
          <h4>Example 2 — CSS Modules</h4>
          <div className="explanation">
            <p>
              CSS Modules scope class names to the file. Create a file like
              <strong> Button.module.css</strong> and import it.
            </p>
          </div>
          <div className="code-section">
            <CodeBlock>{`/* Button.module.css */
.btn { background: #667eea; color: white; padding: 8px 12px; border-radius: 6px }

/* Button.jsx */
import styles from './Button.module.css'

export default function Button(){
  return <button className={styles.btn}>Click me</button>
}`}</CodeBlock>
          </div>
        </div>

        <div className="example-card">
          <h4>Example 3 — Inline Styles</h4>
          <div className="explanation">
            <p>
              Use the <strong>style</strong> prop with a JS object for dynamic
              or computed styling.
            </p>
          </div>
          <div className="code-section">
            <CodeBlock>{`const boxStyle = { padding: '12px', background: '#fafafa', borderRadius: '8px' }

function Card(){
  return <div style={boxStyle}>Inline styled box</div>
}`}</CodeBlock>
          </div>
        </div>

        <div className="example-card">
          <h4>Example 4 — Styled Components (CSS-in-JS)</h4>
          <div className="explanation">
            <p>
              Libraries like <strong>styled-components</strong> let you write
              component-scoped styles using tagged template literals.
            </p>
          </div>
          <div className="code-section">
            <CodeBlock>{`// npm install styled-components
import styled from 'styled-components'

const Button = styled.button\`
  background: #667eea;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
\`

function App(){
  return <Button>Styled</Button>
}`}</CodeBlock>
          </div>
        </div>

        <div className="example-card">
          <h4>Example 5 — Tailwind CSS (utility-first)</h4>
          <div className="explanation">
            <p>
              Tailwind provides utility classes that you add to <strong>className</strong>
              to compose styles quickly.
            </p>
          </div>
          <div className="code-section">
            <CodeBlock>{`// after installing Tailwind, in a component:
function Badge(){
  return <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded">New</span>
}`}</CodeBlock>
          </div>
        </div>

        <div className="example-card">
          <h4>Example 6 — CSS Variables + Theming</h4>
          <div className="explanation">
            <p>
              Use CSS custom properties for shared theme tokens and switch them
              at runtime (light/dark mode).
            </p>
          </div>
          <div className="code-section">
            <CodeBlock>{`/* :root in global CSS */
:root { --bg: #fff; --text: #111 }

/* component */
function Box(){
  return <div style={{ background: 'var(--bg)', color: 'var(--text)', padding: 12 }}>Theme box</div>
}`}</CodeBlock>
          </div>
        </div>
      </section>

      <section className="analogy">
        <h2>Analogy</h2>
        <p>
          Think of styling as the wardrobe for your app: global CSS is a closet
          everyone shares, CSS Modules are personalized outfits for each person,
          inline styles are quick accessories you put on, and Tailwind is a
          capsule wardrobe of reusable pieces you combine instantly.
        </p>
      </section>

      <section className="industry-example">
        <h2>Industry Example</h2>
        <p>
          Many companies use a combination: design tokens and global CSS for
          brand identity, CSS Modules or CSS-in-JS for component isolation, and
          utility frameworks like Tailwind for rapid feature development.
          Example: a marketing site may use Tailwind for landing pages and
          CSS Modules inside a complex dashboard.
        </p>
      </section>

      <section className="definition">
        <h2>Introduction to Tailwind CSS</h2>
        <p>
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes (like <em>px-4</em>, <em>bg-blue-500</em>) so you can
          build custom designs without writing custom CSS. It encourages
          composing small utilities in the markup rather than creating
          component-class names for each style.
        </p>
      </section>
              </Layout>
            );
          }

      <section className="examples">
        <h2>Tailwind — Quick Example</h2>
        <div className="example-card">
          <h4>Button with Tailwind</h4>
          <div className="code-section">
            <CodeBlock>{`// install (project root)
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

/* tailwind.config.js - add paths to your templates */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
}

// component
function CTA(){
  return <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow">Get started</button>
}`}</CodeBlock>
          </div>
        </div>

        <TailwindDemo />

        <div className="example-card">
          <h4>Tailwind Analogy</h4>
          <div className="explanation">
            <p>
              Tailwind is like a box of labelled LEGO bricks — instead of
              carving new bricks for each toy, you snap utilities together to
              build varied UIs quickly.
            </p>
          </div>
        </div>

        <div className="example-card">
          <h4>Tailwind Industry Example</h4>
          <p>
            Startups often pick Tailwind for marketing sites and admin panels
            because it speeds up styling, keeps CSS size small (with
            purge/content), and enforces consistency via design systems.
          </p>
        </div>

        <InteractiveStylingSandbox />
      </section>
    </div>
  );
}
