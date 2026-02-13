import React, { useState } from 'react';
import Layout from '../components/Layout';
import ExampleCard from '../components/ExampleCard';
import TailwindDemo from '../components/TailwindDemo';
import InteractiveStylingSandbox from '../components/InteractiveStylingSandbox';

export default function Styling() {
  const [showTailwindExplanation, setShowTailwindExplanation] = useState(false);

  return (
    <Layout>
      <div className="topic-page">
        <div className="page-header">
          <h1>Styling in React</h1>
          <p className="page-subtitle">Learn 5 powerful ways to style your React components with real examples</p>
        </div>

        <div className="topic-card">
          <div className="topic-content">
            <h2>What is Styling in React?</h2>
            <p className="concept-intro">
              Styling controls how your components look. React supports 5 main approaches: Global CSS, CSS Modules, Inline Styles, CSS-in-JS (styled-components), and Tailwind CSS. Each has pros and cons depending on your project size.
            </p>
          </div>
        </div>

        {/* Global CSS */}
        <ExampleCard title="1. Global CSS — Simple and Fast">
          <div className="topic-content">
            <p><strong>What it is:</strong> A central CSS file imported into your app. Classes are used globally.</p>
            <p><strong>When to use:</strong> Small projects, learning React, simple UIs.</p>
            <p><strong>Real example:</strong> A hobby blog or portfolio site.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{`/* src/styles.css */
.card {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* In component: */
import './styles.css'

function Card() {
  return <div className="card">Content here</div>
}`}</code></pre>
            <div className="demo-output">
              <div className="card" style={{ padding: 18, background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>Styled with Global CSS</div>
              <p className="note">Output: Card with shadow and padding</p>
            </div>
          </div>
          <p className="explanation"><strong>How:</strong> Write CSS in a file, import it, use class names. Simple but all classes are global — naming conflicts possible in big apps.</p>
          <div className="benefits-box" style={{ background: '#e8f5e9', padding: '12px', borderRadius: '6px', marginTop: '12px' }}>
            Pros: Easy, no setup, fast
            <br/>Cons: Naming conflicts, harder to maintain
          </div>
        </ExampleCard>

        {/* CSS Modules */}
        <ExampleCard title="2. CSS Modules — Scoped Styles">
          <div className="topic-content">
            <p><strong>What it is:</strong> CSS files scoped to one component. Class names are auto-made unique.</p>
            <p><strong>When to use:</strong> Medium projects, component libraries, team environments.</p>
            <p><strong>Real example:</strong> Company dashboard with many components.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{`/* Button.module.css */
.btn {
  background: #667eea;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background: #5568d3;
}

/* In component: */
import styles from './Button.module.css'

function Button() {
  return <button className={styles.btn}>Click</button>
}`}</code></pre>
            <div className="demo-output">
              <button style={{ background: '#667eea', color: '#fff', padding: '8px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', fontWeight: 500 }} onMouseEnter={e => e.target.style.background = '#5568d3'} onMouseLeave={e => e.target.style.background = '#667eea'}>Click me</button>
              <p className="note">Output: Button with hover effect. Hover to see color change.</p>
            </div>
          </div>
          <p className="explanation"><strong>How:</strong> Save as `.module.css`, import as object, use `styles.className`. Build tool creates unique names like `Button_btn_a3f5`. No naming conflicts.</p>
          <div className="benefits-box" style={{ background: '#e8f5e9', padding: '12px', borderRadius: '6px', marginTop: '12px' }}>
            Pros: Scoped, no conflicts, no dependency
            <br/>Cons: Can't compute from JS easily
          </div>
        </ExampleCard>

        {/* Inline Styles */}
        <ExampleCard title="3. Inline Styles — Dynamic Styling">
          <div className="topic-content">
            <p><strong>What it is:</strong> JavaScript objects passed to the `style` prop. Styles computed at runtime.</p>
            <p><strong>When to use:</strong> Dynamic themes, runtime calculations, theme switching.</p>
            <p><strong>Real example:</strong> Dark/light mode toggle that changes colors instantly.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{`function Card({ isDark }) {
  const boxStyle = {
    padding: '16px',
    background: isDark ? '#1f2937' : '#f3f4f6',
    color: isDark ? '#fff' : '#111',
    borderRadius: '8px'
  }

  return <div style={boxStyle}>
    Dynamic theme box
  </div>
}`}</code></pre>
            <div className="demo-output">
              <div style={{ padding: 16, background: '#f3f4f6', color: '#111', borderRadius: 8, marginBottom: 8 }}>Light theme example</div>
              <p className="note">Output: Styles change based on JavaScript values (props, state)</p>
            </div>
          </div>
          <p className="explanation"><strong>How:</strong> Create JS object with camelCase properties (backgroundColor, fontSize, etc). Pass to `style={}`. Update on state change and UI updates instantly.</p>
          <div className="benefits-box" style={{ background: '#e8f5e9', padding: '12px', borderRadius: '6px', marginTop: '12px' }}>
            Pros: Dynamic, computed from JS, great for themes
            <br/>Cons: No pseudo-classes (:hover), no media queries natively
          </div>
        </ExampleCard>

        {/* CSS-in-JS */}
        <ExampleCard title="4. CSS-in-JS (styled-components) — Full Power">
          <div className="topic-content">
            <p><strong>What it is:</strong> Write CSS inside JavaScript using template literals. Library compiles at runtime.</p>
            <p><strong>When to use:</strong> Large apps, design systems, complex theming.</p>
            <p><strong>Real example:</strong> Airbnb, Stripe (they manage hundreds of components this way).</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{`// npm install styled-components

import styled from 'styled-components'

const StyledBtn = styled.button\`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
\`

function App() {
  return <StyledBtn>Beautiful</StyledBtn>
}`}</code></pre>
            <div className="demo-output">
              <button style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, transition: 'transform 0.2s' }} onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}> Beautiful Button </button>
              <p className="note">Output: Styled button with hover animation. Hover to see effect.</p>
            </div>
          </div>
          <p className="explanation"><strong>How:</strong> Install styled-components. Create styled components with full CSS syntax including pseudo-classes and media queries. Scoped automatically, props can control styles.</p>
          <div className="benefits-box" style={{ background: '#e8f5e9', padding: '12px', borderRadius: '6px', marginTop: '12px' }}>
            Pros: Full CSS features, scoped, props-based styling, great for design systems
            <br/>Cons: Extra dependency, runtime cost, learning curve
          </div>
        </ExampleCard>

        {/* Tailwind */}
        <ExampleCard title="5. Tailwind CSS — Utility-First">
          <div className="topic-content">
            <p><strong>What it is:</strong> Pre-built utility classes (px-4, bg-blue-500, rounded-lg) that you compose in markup.</p>
            <p><strong>When to use:</strong> Fast-moving teams, startups, marketing sites, rapid development.</p>
            <p><strong>Real example:</strong> Vercel, Stripe, Figma all use Tailwind to build UIs 3x faster.</p>
          </div>
          <div className="example-display">
            <pre className="code-block"><code>{`// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

function Button() {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      Tailwind Button
    </button>
  )
}`}</code></pre>
            <div className="demo-output">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Tailwind Button</button>
              <p className="note">Output: Button styled entirely with utility classes. Hover to see color change.</p>
            </div>
          </div>
          <p className="explanation"><strong>How:</strong> Install Tailwind, configure it. Use utility classes in markup. Build system removes unused classes. Fastest development, smallest CSS in production.</p>
          <div className="benefits-box" style={{ background: '#e8f5e9', padding: '12px', borderRadius: '6px', marginTop: '12px' }}>
            Pros: Fastest dev, smallest CSS bundle, consistent design system
            <br/>Cons: Markup gets verbose, setup required, learning curve
          </div>
          <button
            className="demo-button"
            onClick={() => setShowTailwindExplanation(!showTailwindExplanation)}
            style={{ marginTop: '12px' }}
          >
            EXPLANTION
          </button>
          {showTailwindExplanation && (
            <div className="topic-content" style={{ marginTop: '16px' }}>
              <h3>Tailwind CSS - Utility-First</h3>

              <h4>What it is</h4>
              <p>Tailwind is a CSS framework built around utility classes.</p>
              <p>Instead of writing custom CSS like this:</p>
              <pre className="code-block"><code>{`.card {
  padding: 1rem;
  background: blue;
  border-radius: 8px;
}`}</code></pre>
              <p>You write styles directly in your markup:</p>
              <pre className="code-block"><code>{`<div class="px-4 bg-blue-500 rounded-lg"></div>`}</code></pre>
              <p>Each class does one small job:</p>
              <p><code>px-4</code> -&gt; horizontal padding</p>
              <p><code>bg-blue-500</code> -&gt; background color</p>
              <p><code>rounded-lg</code> -&gt; border radius</p>
              <p>You compose these like LEGO blocks. No custom class names. No separate CSS file for most components.</p>

              <h4>Why this approach exists</h4>
              <p>Traditional CSS has real problems:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Class naming is hard and inconsistent</li>
                <li>Styles leak and override each other</li>
                <li>You spend time jumping between HTML and CSS files</li>
                <li>Refactoring is risky</li>
              </ul>
              <p>Tailwind trades abstraction for explicitness.</p>
              <p>You see the styling exactly where the element is defined.</p>
              <p>That&apos;s the core idea.</p>

              <h4>When to use it</h4>
              <p>Tailwind works best when:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Speed matters more than perfect abstraction</li>
                <li>UI changes frequently</li>
                <li>Many developers touch the same codebase</li>
              </ul>
              <p>That&apos;s why it fits:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Startups</li>
                <li>Marketing pages</li>
                <li>Dashboards</li>
                <li>MVPs</li>
                <li>Teams iterating daily</li>
              </ul>
              <p>It is less ideal for:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Very small static sites</li>
                <li>Teams that strongly prefer traditional CSS separation</li>
                <li>Designers who want semantic class names over visual ones</li>
              </ul>
              <p>So it&apos;s a trade-off, not a universal win.</p>

              <h4>&ldquo;Build UIs 3x faster&rdquo; - what that really means</h4>
              <p>Teams using Tailwind tend to:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Write less CSS</li>
                <li>Avoid bikeshedding over class names</li>
                <li>Skip context switching between files</li>
                <li>Reuse patterns mentally, not via inheritance</li>
              </ul>
              <p>Companies like Vercel, Stripe, and Figma use Tailwind not because it&apos;s trendy, but because:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>It scales well across teams</li>
                <li>It enforces consistency through configuration</li>
                <li>It keeps UI work fast and predictable</li>
              </ul>
              <p>The &ldquo;3x faster&rdquo; claim isn&apos;t magic. It&apos;s fewer decisions, fewer files, and fewer surprises.</p>

              <h4>Key takeaway</h4>
              <p>Tailwind is not &ldquo;no CSS&rdquo;. It is CSS with constraints.</p>
              <p>You give up:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Semantic class names</li>
                <li>Traditional separation of concerns</li>
              </ul>
              <p>You gain:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li>Speed</li>
                <li>Consistency</li>
                <li>Confidence when refactoring</li>
              </ul>
              <p>Whether that&apos;s a good deal depends on your project, not on hype.</p>
            </div>
          )}
        </ExampleCard>

        <TailwindDemo />
        <InteractiveStylingSandbox />

        {/* Tailwind Setup */}
        <div className="topic-card">
          <div className="topic-content">
            <h2>Tailwind CSS: Complete Setup</h2>
            <p><strong>Why Tailwind?</strong> Modern companies choose Tailwind because:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Compose UIs 3x faster (no CSS files)</li>
              <li>Smallest CSS in production (unused utilities removed)</li>
              <li>Built-in responsive design (md:, lg: breakpoints)</li>
              <li>Consistent design system out-of-box</li>
              <li>Easy to customize via tailwind.config.js</li>
            </ul>

            <h3 style={{ marginTop: '20px' }}>Installation Steps</h3>
            <pre className="code-block"><code>{`# 1) Install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2) Update tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: { extend: {} },
  plugins: []
}

# 3) Add to src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# 4) Import in src/main.jsx
import './index.css'

# 5) Use classes in components
<div className="p-4 bg-white rounded-lg shadow">
  Content
</div>`}</code></pre>

            <h3>Common Classes Reference</h3>
            <pre className="code-block"><code>{`Spacing:  p-4, m-2, gap-3 (padding, margin, gaps)
Colors:   bg-blue-500, text-red-700, border-green-400
Size:     w-full, h-screen, max-w-md, min-h-96
Type:     text-sm, font-bold, leading-tight, italic
Hover:    hover:bg-blue-600, focus:ring-2
Mobile:   sm:text-lg, md:flex, lg:grid, xl:absolute`}</code></pre>
          </div>
        </div>

        {/* Comparison */}
        <div className="topic-card">
          <div className="topic-content">
            <h2>Quick Comparison</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ background: '#f3f4f6', borderBottom: '2px solid #ddd' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Method</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Setup Time</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Best For</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Bundle Size</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Global CSS</td>
                  <td style={{ padding: '10px' }}>Instant</td>
                  <td style={{ padding: '10px' }}>Small projects</td>
                  <td style={{ padding: '10px' }}>Average</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>CSS Modules</td>
                  <td style={{ padding: '10px' }}>Instant</td>
                  <td style={{ padding: '10px' }}>Medium projects</td>
                  <td style={{ padding: '10px' }}>Average</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Inline Styles</td>
                  <td style={{ padding: '10px' }}>Instant</td>
                  <td style={{ padding: '10px' }}>Dynamic theming</td>
                  <td style={{ padding: '10px' }}>No CSS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>styled-components</td>
                  <td style={{ padding: '10px' }}>5 minutes</td>
                  <td style={{ padding: '10px' }}>Design systems</td>
                  <td style={{ padding: '10px' }}>Average</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px' }}>Tailwind CSS</td>
                  <td style={{ padding: '10px' }}>10 minutes</td>
                  <td style={{ padding: '10px' }}>Fast development</td>
                  <td style={{ padding: '10px' }}>Smallest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Industry Examples */}
        <div className="topic-card">
          <div className="topic-content">
            <h2>Used by Top Companies</h2>
            <p><strong>Facebook/Meta:</strong> CSS-in-JS for massive apps with hundreds of components across teams.</p>
            <p><strong>Stripe, Vercel, Figma:</strong> Tailwind CSS for marketing sites and dashboards — rapid iteration, small bundles.</p>
            <p><strong>Netflix, Airbnb:</strong> Mix of global CSS (brand) + CSS-in-JS (components) for scale.</p>
            <p><strong>Your choice:</strong> Start simple with Global CSS, grow to CSS Modules, or jump to Tailwind if speed matters. You can mix methods in one project.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
