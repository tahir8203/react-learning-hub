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
