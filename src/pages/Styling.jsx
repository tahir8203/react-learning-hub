import React from 'react';
import Layout from '../components/Layout';
import ExampleCard from '../components/ExampleCard';
import TailwindDemo from '../components/TailwindDemo';
import InteractiveStylingSandbox from '../components/InteractiveStylingSandbox';

export default function Styling() {
  const snippetGlobal = "/* src/styles.css */\n.card {\n  padding: 20px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  margin-bottom: 16px;\n}\n\n/* Component.jsx */\nimport './styles.css'\n\nfunction Card(){\n  return <div className=\"card\">Styled with Global CSS</div>\n}";

  const snippetModule = "/* Button.module.css */\n.btn {\n  background: #667eea;\n  color: white;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.btn:hover {\n  background: #5568d3;\n}\n\n/* Button.jsx */\nimport styles from './Button.module.css'\n\nexport default function Button(){\n  return <button className={styles.btn}>Click me</button>\n}";

  const snippetInline = "function Card({ isDark }) {\n  const boxStyle = {\n    padding: '16px',\n    background: isDark ? '#1f2937' : '#f3f4f6',\n    color: isDark ? '#fff' : '#111',\n    borderRadius: '8px',\n    transition: 'background 0.3s'\n  }\n\n  return <div style={boxStyle}>Dynamic theme</div>\n}";

  const snippetStyled = "// npm install styled-components\nimport styled from 'styled-components'\n\nconst StyledButton = styled.button`\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s;\n  \n  &:hover {\n    transform: scale(1.05);\n  }\n`\n\nfunction App(){\n  return <StyledButton>Beautiful Button</StyledButton>\n}";

  const snippetTailwind = "// npm install -D tailwindcss postcss autoprefixer\n// npx tailwindcss init -p\n\nfunction Button(){\n  return (\n    <button className=\"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition\">\n      Tailwind Button\n    </button>\n  )\n}";

  return (
    <Layout>
      <div className="topic-page">
        <div className="page-header">
          <h1>Styling in React</h1>
          <p className="page-subtitle">Learn 5 powerful ways to style your React components with code examples, output, and real-world use cases</p>
        </div>

        {/* Introduction */}
        <div className="topic-card">
          <div className="topic-content">
            <h2>What is Styling in React?</h2>
            <p className="concept-intro">
              Styling is how you make your React components look beautiful and responsive. Unlike vanilla HTML/CSS, React gives you multiple approaches depending on your project's needs. Some are simpler, some are more powerful. Let's explore all 5 main methods with real examples, output, and when to use each one.
            </p>
            <div className="benefits-box" style={{ background: '#f0f4ff', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
              <strong>Quick guide:</strong>
              <ul style={{ marginTop: '8px', marginBottom: 0 }}>
                <li><strong>Global CSS:</strong> Simple, fast to start, good for small projects</li>
                <li><strong>CSS Modules:</strong> Scoped, safe from naming conflicts, no extra library</li>
                <li><strong>Inline Styles:</strong> Dynamic, computed at runtime, no CSS files</li>
                <li><strong>CSS-in-JS:</strong> Powerful, themes, and scoped — but extra dependency</li>
                <li><strong>Tailwind CSS:</strong> Rapid development, consistent design, smallest production bundle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Method 1 */}
        <ExampleCard title="Method 1: Global CSS — Start Simple">
          <div className="topic-content">
            <p><strong>What it is:</strong> A central CSS file imported into your app where you define classes used everywhere.</p>
            <p><strong>When to use:</strong> Small projects, simple UI, when you don't need component isolation. Great for getting started.</p>
            <p><strong>Real-world example:</strong> A hobby project, blog, or marketing landing page where you have a few standard components.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{snippetGlobal}</code></pre>
            <div className="demo-output">
              <div className="card" style={{ padding: 18, background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Styled with Global CSS</div>
              <p className="note"><strong>Output:</strong> A card component with shadow and spacing, using a global class.</p>
            </div>
          </div>
          <p className="explanation">
            <strong>How it works:</strong> You write traditional CSS and import it. React applies the class names. Simple and fast, but all class names are global — if two components use .btn, they both get the same style (good and bad).
          </p>
          <div className="benefits-box">
            <strong>Pros:</strong> Easy to learn, no dependencies, fast to build
            <br/><strong>Cons:</strong> Class name collisions, harder to maintain in large apps
          </div>
        </ExampleCard>

        {/* Method 2 */}
        <ExampleCard title="Method 2: CSS Modules — Scoped by Default">
          <div className="topic-content">
            <p><strong>What it is:</strong> CSS files that are scoped to a single component. Class names are automatically made unique.</p>
            <p><strong>When to use:</strong> Medium-sized projects, component libraries, when you want isolation without adding dependencies.</p>
            <p><strong>Real-world example:</strong> A company dashboard where many developers work on different components and you need to avoid style conflicts.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{snippetModule}</code></pre>
            <div className="demo-output">
              <button style={{ background: '#667eea', color: '#fff', padding: '8px 16px', borderRadius: 6, border: 'none', fontWeight: 500, cursor: 'pointer' }} onMouseEnter={e => e.target.style.background = '#5568d3'} onMouseLeave={e => e.target.style.background = '#667eea'}>Click me</button>
              <p className="note"><strong>Output:</strong> A button with scoped styles. Hover to see the transition effect.</p>
            </div>
          </div>
          <p className="explanation">
            <strong>How it works:</strong> Save CSS in a `.module.css` file. Import it as an object and use `className={styles.className}`. The build tool converts `.btn` to something like `Button_btn_a3f5` (unique). No naming conflicts ever.
          </p>
          <div className="benefits-box">
            <strong>Pros:</strong> Scoped, no conflicts, no extra dependencies
            <br/><strong>Cons:</strong> Still can't compute styles from JS props easily, file-based
          </div>
        </ExampleCard>

        {/* Method 3 */}
        <ExampleCard title="Method 3: Inline Styles — Dynamic & Computed">
          <div className="topic-content">
            <p><strong>What it is:</strong> Pass a JavaScript object to the `style` prop. Styles are computed at runtime based on component state/props.</p>
            <p><strong>When to use:</strong> Dynamic theming, runtime calculations, animations triggered by user actions.</p>
            <p><strong>Real-world example:</strong> A dark/light mode toggle that changes colors on the fly without CSS files.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{snippetInline}</code></pre>
            <div className="demo-output">
              <div style={{ padding: 16, background: '#f3f4f6', color: '#111', borderRadius: 8, transition: 'background 0.3s' }}>Dynamic theme example</div>
              <p className="note"><strong>Output:</strong> Styles computed in JavaScript. Click the Interactive Sandbox below to try changing colors live.</p>
            </div>
          </div>
          <p className="explanation">
            <strong>How it works:</strong> Define a JS object with CSS properties (camelCase: fontSize, backgroundColor, etc). Pass it to `style={}`. Change values based on state, and the UI updates instantly. Perfect for theme switching.
          </p>
          <div className="benefits-box">
            <strong>Pros:</strong> Dynamic, computed from JS, great for themes
            <br/><strong>Cons:</strong> No pseudo-classes (like :hover) natively, no media queries, inline styles have high specificity
          </div>
        </ExampleCard>

        {/* Method 4 */}
        <ExampleCard title="Method 4: CSS-in-JS (styled-components) — Power & Flexibility">
          <div className="topic-content">
            <p><strong>What it is:</strong> Write actual CSS inside JavaScript using template literals. A library compiles it at runtime.</p>
            <p><strong>When to use:</strong> Large apps with complex theming, design systems, component libraries that need props-based styling.</p>
            <p><strong>Real-world example:</strong> Airbnb, Stripe — they use CSS-in-JS to manage hundreds of components with consistent theming.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{snippetStyled}</code></pre>
            <div className="demo-output">
              <button style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}> Beautiful Button </button>
              <p className="note"><strong>Output:</strong> Styled button with hover animation. Hover to see the transform effect.</p>
            </div>
          </div>
          <p className="explanation">
            <strong>How it works:</strong> Install styled-components. Create styled components using tagged template literals. The library generates unique class names and injects CSS. You get full CSS power (pseudo-classes, media queries) plus JavaScript props support.
          </p>
          <div className="benefits-box">
            <strong>Pros:</strong> Full CSS features, props-based styling, great for design systems, scoped by default
            <br/><strong>Cons:</strong> Extra library dependency, slight runtime overhead, learning curve
          </div>
        </ExampleCard>

        {/* Method 5 */}
        <ExampleCard title="Method 5: Tailwind CSS — Utility-First Rapid Development">
          <div className="topic-content">
            <p><strong>What it is:</strong> A utility framework that gives you pre-built classes (px-4, bg-blue-500, rounded-lg) that you compose in your markup.</p>
            <p><strong>When to use:</strong> Fast-moving startups, marketing sites, admin panels, when you want the smallest CSS in production.</p>
            <p><strong>Real-world example:</strong> Vercel, Figma, Stripe — modern companies use Tailwind to build UIs 2-3x faster.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{snippetTailwind}</code></pre>
            <div className="demo-output">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg transition hover:bg-blue-600">Tailwind Button</button>
              <p className="note"><strong>Output:</strong> Button styled entirely with Tailwind utility classes. Hover to see the color change.</p>
            </div>
          </div>
          <p className="explanation">
            <strong>How it works:</strong> Install Tailwind and configure it. Use utility classes in your markup (px = padding-x, bg = background, rounded = border-radius). Build sends only the CSS for classes you actually used. No writing custom CSS — just compose utilities.
          </p>
          <div className="benefits-box">
            <strong>Pros:</strong> Fastest development, smallest CSS bundle, consistent design system, responsive design built-in
            <br/><strong>Cons:</strong> Markup gets verbose, learning curve, setup required
          </div>
        </ExampleCard>

        <TailwindDemo />

        <InteractiveStylingSandbox />

        {/* Tailwind Setup */}
        <div className="topic-card">
          <div className="topic-content">
            <h2>Tailwind CSS: Complete Setup Guide</h2>
            <p>
              <strong>Why choose Tailwind?</strong> Modern developers love Tailwind because:
            </p>
            <ul className="benefits-box" style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>✅ Compose UI 3x faster (no writing CSS files)</li>
              <li>✅ Smallest CSS output in production (tree-shaking unused utilities)</li>
              <li>✅ Built-in responsive design (md:, lg: breakpoints)</li>
              <li>✅ Consistent spacing, colors, shadows out-of-box</li>
              <li>✅ Easy customization via tailwind.config.js</li>
            </ul>

            <h3 style={{ marginTop: '20px' }}>Step-by-Step Setup</h3>
            <pre className="code-block"><code>{`# Step 1: Install Tailwind and dependencies
npm install -D tailwindcss postcss autoprefixer

# Step 2: Initialize Tailwind config file
npx tailwindcss init -p

# This creates:
# - tailwind.config.js (customize colors, spacing, etc)
# - postcss.config.js (build configuration)`}</code></pre>

            <pre className="code-block"><code>{`# Step 3: Configure tailwind.config.js
# Update 'content' to point to your templates
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#667eea'
      }
    }
  },
  plugins: []
}`}</code></pre>

            <pre className="code-block"><code>{`# Step 4: Create src/index.css (or add to existing)
@tailwind base;
@tailwind components;
@tailwind utilities;`}</code></pre>

            <pre className="code-block"><code>{`# Step 5: Import in src/main.jsx
import './index.css'
import App from './App'

// Now use Tailwind classes in any component
function Card() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-gray-900">Title</h3>
      <p className="text-gray-600 mt-2">Description</p>
    </div>
  )
}`}</code></pre>

            <h3>Common Tailwind Class Patterns</h3>
            <pre className="code-block"><code>{`Spacing:     p-4 (padding), m-2 (margin), gap-3 (flex gap)
Colors:      bg-blue-500, text-red-700, border-green-400
Size:        w-full, h-screen, max-w-md
Typography: text-sm, font-bold, leading-tight
Responsive: md:text-lg, lg:flex, sm:hidden
Hover:       hover:bg-blue-600, focus:ring-2`}</code></pre>

            <p className="explanation" style={{ marginTop: '16px' }}>
              <strong>After setup:</strong> Every time you use a Tailwind class, the build system adds it to the final CSS. Unused classes are automatically removed. You'll see much smaller CSS in production compared to writing traditional CSS.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="topic-card">
          <div className="topic-content">
            <h2>Quick Comparison: Which Method Should You Use?</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ background: '#f3f4f6', borderBottom: '2px solid #e5e7eb' }}>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Method</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Setup Time</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Best For</th>
                  <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Production Bundle</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px' }}>Global CSS</td>
                  <td style={{ padding: '12px' }}>Instant</td>
                  <td style={{ padding: '12px' }}>Small projects</td>
                  <td style={{ padding: '12px' }}>Average</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px' }}>CSS Modules</td>
                  <td style={{ padding: '12px' }}>Instant</td>
                  <td style={{ padding: '12px' }}>Medium projects</td>
                  <td style={{ padding: '12px' }}>Average</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px' }}>Inline Styles</td>
                  <td style={{ padding: '12px' }}>Instant</td>
                  <td style={{ padding: '12px' }}>Dynamic theming</td>
                  <td style={{ padding: '12px' }}>No CSS file</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px' }}>styled-components</td>
                  <td style={{ padding: '12px' }}>5 mins</td>
                  <td style={{ padding: '12px' }}>Design systems</td>
                  <td style={{ padding: '12px' }}>Average+</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px' }}>Tailwind CSS</td>
                  <td style={{ padding: '12px' }}>10 mins</td>
                  <td style={{ padding: '12px' }}>Fast development</td>
                  <td style={{ padding: '12px' }}>Smallest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Industry Examples */}
        <div className="topic-card">
          <div className="topic-content">
            <h2>Real-World Industry Examples</h2>
            <p><strong>Facebook/Meta:</strong> Uses CSS-in-JS for their massive application with thousands of components across teams.</p>
            <p><strong>Stripe, Vercel, Figma:</strong> All use Tailwind CSS for their marketing sites and dashboards — rapid iteration and small bundle size.</p>
            <p><strong>Netflix, Airbnb:</strong> Use a mix of global CSS for brand identity + CSS-in-JS for component libraries.</p>
            <p><strong>Your project:</strong> Start with Global CSS, move to CSS Modules when it grows, or jump straight to Tailwind if you value speed. You can always mix methods.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
