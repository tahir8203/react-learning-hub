import React, { useState } from 'react';
import Layout from '../components/Layout';
import ExampleCard from '../components/ExampleCard';

export default function Intro() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Layout>
      <div className="intro-container">
        <div className="intro-hero">
          <h1>🚀 React from Scratch - Complete Beginner Guide</h1>
          <p className="intro-subtitle">
            "If at any point you feel confused, that's normal. React is not hard — it's just new. We'll move slowly."
          </p>
        </div>

        {/* Part 0 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part0')}
          >
            <span className="section-number">Part 0</span>
            <span>Before React: How Websites Really Work</span>
            <span className="toggle-icon">{expandedSections['part0'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part0'] && (
            <div className="section-content">
              <h3>What happens when you open a website?</h3>
              <ol className="concept-list">
                <li>Browser downloads HTML</li>
                <li>Browser downloads CSS</li>
                <li>Browser downloads JavaScript</li>
                <li>Browser executes JavaScript</li>
                <li>JavaScript can change HTML</li>
              </ol>

              <ExampleCard title="Vanilla JavaScript Example">
                <pre className="code-block">
{`<p id="text">Hello</p>
<button onclick="changeText()">Click</button>

<script>
  function changeText() {
    document.getElementById("text").innerText = "Hi";
  }
</script>`}
                </pre>
              </ExampleCard>

              <div className="problem-box">
                <h4>⚠️ Problem with this approach:</h4>
                <ul>
                  <li>✅ Works for small pages</li>
                  <li>❌ Many buttons/forms = painful</li>
                  <li>❌ Data changes frequently = messy</li>
                  <li>❌ UI updates = manual control</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Part 1 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part1')}
          >
            <span className="section-number">Part 1</span>
            <span>Why React Exists (The Real Reason)</span>
            <span className="toggle-icon">{expandedSections['part1'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part1'] && (
            <div className="section-content">
              <h3>Imagine This Scenario</h3>
              <p>You're building a task app where:</p>
              <ul>
                <li>Tasks can be added</li>
                <li>Tasks can be removed</li>
                <li>Tasks can be completed</li>
              </ul>

              <div className="concept-box">
                <h4>🎯 React's Big Idea:</h4>
                <p className="highlight">
                  <strong>UI should be a RESULT of data</strong>
                </p>
                <p>Instead of: "Change this element, then that element"</p>
                <p>React says: "Here is my data → React, update the UI"</p>
              </div>
            </div>
          )}
        </div>

        {/* Part 2 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part2')}
          >
            <span className="section-number">Part 2</span>
            <span>What React ACTUALLY Is</span>
            <span className="toggle-icon">{expandedSections['part2'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part2'] && (
            <div className="section-content">
              <div className="two-column">
                <div className="column is-react">
                  <h4>✅ React IS:</h4>
                  <ul>
                    <li>A JavaScript library</li>
                    <li>Used to build user interfaces</li>
                    <li>Runs in the browser</li>
                  </ul>
                </div>
                <div className="column not-react">
                  <h4>❌ React is NOT:</h4>
                  <ul>
                    <li>A language</li>
                    <li>A framework</li>
                    <li>Magic</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Part 3 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part3')}
          >
            <span className="section-number">Part 3</span>
            <span>Prerequisites of React (CRITICAL)</span>
            <span className="toggle-icon">{expandedSections['part3'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part3'] && (
            <div className="section-content">
              <h3>Why You Cannot Just Open React in Browser</h3>
              
              <div className="two-column">
                <div className="column">
                  <h4>Browsers understand:</h4>
                  <ul>
                    <li>✅ HTML</li>
                    <li>✅ CSS</li>
                    <li>✅ JavaScript</li>
                  </ul>
                </div>
                <div className="column">
                  <h4>React code uses:</h4>
                  <ul>
                    <li>JSX</li>
                    <li>Modules</li>
                    <li>Imports</li>
                    <li>Modern syntax</li>
                  </ul>
                </div>
              </div>

              <div className="alert-box">
                <p>❌ Browsers don't understand this directly</p>
              </div>
            </div>
          )}
        </div>

        {/* Part 4 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part4')}
          >
            <span className="section-number">Part 4</span>
            <span>Tools React Needs</span>
            <span className="toggle-icon">{expandedSections['part4'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part4'] && (
            <div className="section-content">
              <table className="tools-table">
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Why Needed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Node.js</strong></td>
                    <td>Run tools on your computer</td>
                  </tr>
                  <tr>
                    <td><strong>npm</strong></td>
                    <td>Download React & tools</td>
                  </tr>
                  <tr>
                    <td><strong>Bundler (Vite)</strong></td>
                    <td>Convert React code into browser-ready JS</td>
                  </tr>
                  <tr>
                    <td><strong>VS Code</strong></td>
                    <td>Write code</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Part 5 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part5')}
          >
            <span className="section-number">Part 5</span>
            <span>Windows Setup (FROM ZERO)</span>
            <span className="toggle-icon">{expandedSections['part5'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part5'] && (
            <div className="section-content">
              <h3>1. Step-by-step process of setting up a React project using Vite</h3>
              <h4>Step 1: Ensure prerequisites</h4>
              <p>You must have Node.js installed because Vite uses npm.</p>
              <pre className="code-block">
{`node -v
npm -v`}
              </pre>

              <h4>Step 2: Create a new Vite project</h4>
              <p>Run the following command in the terminal:</p>
              <pre className="code-block">
{`npm create vite@latest my-react-app`}
              </pre>
              <ul>
                <li>Choose React as the framework.</li>
                <li>Choose JavaScript or JavaScript + SWC.</li>
              </ul>

              <h4>Step 3: Navigate into the project folder</h4>
              <pre className="code-block">
{`cd my-react-app`}
              </pre>

              <h4>Step 4: Install dependencies</h4>
              <pre className="code-block">
{`npm install`}
              </pre>

              <h4>Step 5: Start the development server</h4>
              <pre className="code-block">
{`npm run dev`}
              </pre>
              <p>The app opens in the browser, usually at <code>http://localhost:5173</code>.</p>
              <p className="note">
                Why Vite is used: Vite provides fast startup, instant hot reload, and simpler configuration compared to older tools.
              </p>

              <h3>2. React directory structure and role of important files</h3>
              <h4>Typical Vite + React folder structure</h4>
              <pre className="code-block">
{`my-react-app/
|
|-- index.html
|-- package.json
|-- vite.config.js
|-- src/
|   |-- main.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|-- node_modules/`}
              </pre>

              <h4>Important files explained</h4>
              <p><strong>index.html</strong></p>
              <pre className="code-block">
{`<div id="root"></div>`}
              </pre>
              <ul>
                <li>The single HTML entry point.</li>
                <li>React injects the UI into this root div.</li>
              </ul>

              <p><strong>main.jsx</strong></p>
              <pre className="code-block">
{`import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);`}
              </pre>
              <ul>
                <li>Entry point of the React app.</li>
                <li>Connects React to the browser DOM.</li>
              </ul>

              <p><strong>App.jsx</strong></p>
              <pre className="code-block">
{`function App() {
  return <h1>Hello React</h1>;
}

export default App;`}
              </pre>
              <ul>
                <li>Main component.</li>
                <li>UI logic starts here.</li>
              </ul>

              <p><strong>package.json</strong></p>
              <p>Manages dependencies and scripts like <code>npm run dev</code>.</p>

              <h3>3. How JSX works and why React uses it</h3>
              <h4>Example of JSX</h4>
              <pre className="code-block">
{`const element = <h1>Hello World</h1>;`}
              </pre>

              <h4>What JSX really is</h4>
              <p>JSX is not HTML. It is converted into JavaScript like this:</p>
              <pre className="code-block">
{`const element = React.createElement("h1", null, "Hello World");`}
              </pre>

              <h4>Why React uses JSX</h4>
              <ul>
                <li>Combines UI and logic in one place.</li>
                <li>Easier to read than raw createElement calls.</li>
                <li>Catches errors at compile time.</li>
                <li>Prevents injection attacks by default.</li>
              </ul>
              <p>
                Why not plain HTML or JavaScript? HTML cannot handle logic, and plain JS becomes unreadable for large UIs. JSX balances both.
              </p>

              <h3>4. Application rendering sequence (main.jsx to browser)</h3>
              <h4>Step 1: Browser loads index.html</h4>
              <pre className="code-block">
{`<div id="root"></div>`}
              </pre>

              <h4>Step 2: main.jsx executes</h4>
              <pre className="code-block">
{`ReactDOM.createRoot(document.getElementById("root")).render(<App />);`}
              </pre>
              <ul>
                <li>React finds the root div.</li>
                <li>Creates a virtual DOM root.</li>
              </ul>

              <h4>Step 3: App.jsx component is rendered</h4>
              <pre className="code-block">
{`function App() {
  return <h1>Hello React</h1>;
}`}
              </pre>
              <ul>
                <li>JSX is converted to JavaScript.</li>
                <li>Virtual DOM nodes are created.</li>
              </ul>

              <h4>Step 4: React updates the real DOM</h4>
              <ul>
                <li>React compares Virtual DOM with actual DOM.</li>
                <li>Only required changes are applied.</li>
              </ul>

              <h4>Final result</h4>
              <p>The browser displays:</p>
              <pre className="code-block">
{`Hello React`}
              </pre>
              <p className="note">
                Why this rendering model matters: It improves performance and keeps UI updates predictable.
              </p>
            </div>
          )}
        </div>
        {/* Part 6 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part6')}
          >
            <span className="section-number">Part 6</span>
            <span>What npm Is</span>
            <span className="toggle-icon">{expandedSections['part6'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part6'] && (
            <div className="section-content">
              <div className="concept-box">
                <h4>npm = Node Package Manager</h4>
                <p>Think of npm like <strong>Google Play Store for JavaScript</strong></p>
              </div>

              <h3>It downloads:</h3>
              <ul>
                <li>React</li>
                <li>Libraries</li>
                <li>Tools</li>
              </ul>

              <p className="note">Without npm, you'd have to download thousands of files manually!</p>
            </div>
          )}
        </div>

        {/* Part 7 */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part7')}
          >
            <span className="section-number">Part 7</span>
            <span>Creating Your First React Project</span>
            <span className="toggle-icon">{expandedSections['part7'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part7'] && (
            <div className="section-content">
              <h3>Step-by-Step (Live Coding)</h3>
              <pre className="code-block">
{`npm create vite@latest task-tracker
Choose:
  • React
  • JavaScript

cd task-tracker
npm install
npm run dev`}
              </pre>
              <p className="note">Open browser: http://localhost:5173</p>
            </div>
          )}
        </div>

        {/* Part 10 - JSX */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part10')}
          >
            <span className="section-number">Part 10</span>
            <span>What is JSX?</span>
            <span className="toggle-icon">{expandedSections['part10'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part10'] && (
            <div className="section-content">
              <div className="concept-box">
                <h4>JSX = JavaScript XML</h4>
                <p>It lets us write HTML-like code inside JavaScript</p>
              </div>

              <ExampleCard title="JSX Example">
                <pre className="code-block">
{`const element = <h1>Hello React</h1>;`}
                </pre>
                <p className="note">This looks like HTML, but it is NOT HTML!</p>
              </ExampleCard>

              <div className="comparison-box">
                <div className="column">
                  <h4>❌ What Browser Gets (Old Way):</h4>
                  <pre className="code-block">{`const element = document.createElement("h1");
element.innerText = "Hello React";`}</pre>
                </div>
                <div className="column">
                  <h4>✅ What You Write (JSX Way):</h4>
                  <pre className="code-block">{`const element = <h1>Hello React</h1>;`}</pre>
                </div>
              </div>

              <div className="alert-box important">
                <strong>⚠️ Very Important Rule:</strong>
                <ul>
                  <li>❗ You write JSX</li>
                  <li>❗ Tools convert JSX</li>
                  <li>❗ Browser never sees JSX</li>
                </ul>
              </div>

              <h3>Why React Uses JSX If Browsers Don't Understand It?</h3>
              <p>Because JSX is:</p>
              <ul>
                <li>✅ Easier to read</li>
                <li>✅ Easier to write</li>
                <li>✅ Looks like HTML</li>
                <li>✅ Helps visualize UI structure</li>
              </ul>
            </div>
          )}
        </div>

        {/* Part 11 - Components */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part11')}
          >
            <span className="section-number">Part 11</span>
            <span>What is a Component?</span>
            <span className="toggle-icon">{expandedSections['part11'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part11'] && (
            <div className="section-content">
              <div className="concept-box">
                <h4>🧩 Component = Function that returns JSX</h4>
                <pre className="code-block">{`function Hello() {
  return <h1>Hello</h1>;
}`}</pre>
              </div>

              <h3>Why Components?</h3>
              <div className="two-column">
                <div className="column">
                  <h4>❌ Without components:</h4>
                  <ul>
                    <li>Copy-paste HTML</li>
                    <li>Hard to manage</li>
                    <li>Code repeats</li>
                  </ul>
                </div>
                <div className="column">
                  <h4>✅ With components:</h4>
                  <ul>
                    <li>Reusable UI</li>
                    <li>Clean structure</li>
                    <li>Easy to maintain</li>
                  </ul>
                </div>
              </div>

              <div className="example-card">
                <h4>Real Component Example</h4>
                <pre className="code-block">{`function Card({ title, price }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Price: $\{price}</p>
    </div>
  );
}

// Use it multiple times:
<Card title="Product 1" price="10" />
<Card title="Product 2" price="20" />
<Card title="Product 3" price="30" />`}</pre>
              </div>

              <p className="note">Components are the building blocks of React apps!</p>
            </div>
          )}
        </div>

        {/* Part 11B - Props */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('part11b')}
          >
            <span className="section-number">Part 11B</span>
            <span>What are Props?</span>
            <span className="toggle-icon">{expandedSections['part11b'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['part11b'] && (
            <div className="section-content">
              <div className="concept-box">
                <h4>Props = Data sent from parent to child component</h4>
                <p>Props work like function parameters or HTML attributes</p>
              </div>

              <ExampleCard title="Props Example">
                <pre className="code-block">
{`function Welcome({ name }) {
  return <h2>Hello {name}</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Ali" />
      <Welcome name="Sara" />
      <Welcome name="John" />
    </div>
  );
}`}
                </pre>
              </ExampleCard>

              <div className="alert-box important">
                <strong>⚠️ Important Rules:</strong>
                <ul>
                  <li>✅ Props flow parent → child (one direction)</li>
                  <li>❌ Props are READ-ONLY (child cannot change them)</li>
                  <li>✅ Props make components reusable</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Key Concepts */}
        <div className="section">
          <button 
            className="section-header"
            onClick={() => toggleSection('summary')}
          >
            <span className="section-number">📋</span>
            <span>Key Takeaways</span>
            <span className="toggle-icon">{expandedSections['summary'] ? '▼' : '▶'}</span>
          </button>
          {expandedSections['summary'] && (
            <div className="section-content">
              <div className="key-takeaways">
                <div className="takeaway">
                  <span className="icon">🎯</span>
                  <p><strong>UI = Data</strong> - React updates UI based on data</p>
                </div>
                <div className="takeaway">
                  <span className="icon">🧩</span>
                  <p><strong>Components</strong> - Reusable functions that return JSX</p>
                </div>
                <div className="takeaway">
                  <span className="icon">📦</span>
                  <p><strong>Props</strong> - Data passed from parent to child</p>
                </div>
                <div className="takeaway">
                  <span className="icon">🔧</span>
                  <p><strong>Tools Matter</strong> - Vite converts JSX for browsers</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </Layout>
  );
}

