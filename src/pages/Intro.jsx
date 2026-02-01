import React, { useState } from 'react';
import Layout from '../components/Layout';
import ExampleCard from '../components/ExampleCard';

export default function Intro() {
  const [activeSection, setActiveSection] = useState('part0');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
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
            <span className="toggle-icon">{activeSection === 'part0' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part0' && (
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
            <span className="toggle-icon">{activeSection === 'part1' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part1' && (
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
            <span className="toggle-icon">{activeSection === 'part2' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part2' && (
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
            <span className="toggle-icon">{activeSection === 'part3' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part3' && (
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
            <span className="toggle-icon">{activeSection === 'part4' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part4' && (
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
            <span className="toggle-icon">{activeSection === 'part5' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part5' && (
            <div className="section-content">
              <h3>Step 1: Install Node.js</h3>
              <ol className="setup-steps">
                <li>Go to: <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">https://nodejs.org</a></li>
                <li>Download <strong>LTS version</strong> (not current)</li>
                <li>Install → next → next → finish</li>
              </ol>
              <p className="note">⚠️ React beginners should always use LTS</p>

              <h3>Step 2: Verify Installation</h3>
              <p>Open PowerShell or Command Prompt and type:</p>
              <pre className="code-block">
{`node -v
npm -v`}
              </pre>
              <p className="note">You must see version numbers</p>
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
            <span className="toggle-icon">{activeSection === 'part6' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part6' && (
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
            <span className="toggle-icon">{activeSection === 'part7' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part7' && (
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
            <span className="toggle-icon">{activeSection === 'part10' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part10' && (
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
            <span className="toggle-icon">{activeSection === 'part11' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part11' && (
            <div className="section-content">
              <div className="concept-box">
                <h4>🧩 Component = Function that returns JSX</h4>
                <pre className="code-block">
{`function Hello() {
  return <h1>Hello</h1>;
}`}
                </pre>
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

              <ExampleCard title="Real Component Example">
                <pre className="code-block">
{`function Card({ title, price }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

// Use it multiple times:
<Card title="Product 1" price="10" />
<Card title="Product 2" price="20" />
<Card title="Product 3" price="30" />`}
                </pre>
              </ExampleCard>

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
            <span className="toggle-icon">{activeSection === 'part11b' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'part11b' && (
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
            <span className="toggle-icon">{activeSection === 'summary' ? '▼' : '▶'}</span>
          </button>
          {activeSection === 'summary' && (
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
