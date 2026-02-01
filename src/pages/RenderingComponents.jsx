import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

// Example components
function Header({ title }) {
  return <h2>{title}</h2>;
}

function Footer({ year }) {
  return <footer><p>&copy; {year} My Website</p></footer>;
}

function ComposedPage({ title }) {
  return (
    <div className="composed-page-demo">
      <Header title={title} />
      <p>This is the main content area.</p>
      <Footer year={2026} />
    </div>
  );
}

function Card({ color }) {
  const styles = { backgroundColor: color };
  return <div className="colored-card" style={styles}>I am {color}</div>;
}

export function RenderingComponents() {
  const [showHeader, setShowHeader] = useState(true);
  const [colors, setColors] = useState(['red', 'blue', 'green']);

  const exampleCode1 = `function Header({ title }) {
  return <h2>{title}</h2>;
}

function Footer({ year }) {
  return <footer><p>&copy; {year}</p></footer>;
}

function Page() {
  return (
    <div>
      <Header title="My Page" />
      <p>Main content here</p>
      <Footer year={2026} />
    </div>
  );
}`;

  const exampleCode2 = `function Card({ color }) {
  const styles = { backgroundColor: color };
  return <div style={styles}>I am {color}</div>;
}

function App() {
  const colors = ['red', 'blue', 'green'];
  
  return (
    <div>
      {colors.map(color => (
        <Card key={color} color={color} />
      ))}
    </div>
  );
}`;

  const exampleCode3 = `// Child component receives props from parent
function WelcomeMessage({ userName }) {
  return <h3>Welcome, {userName}!</h3>;
}

// Parent component controls what child displays
function App() {
  return (
    <div>
      <WelcomeMessage userName="Alice" />
      <WelcomeMessage userName="Bob" />
      <WelcomeMessage userName="Charlie" />
    </div>
  );
}`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>Rendering Components</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            <strong>Rendering</strong> is the process of React displaying your components on the screen.
            React uses <strong>composition</strong>, meaning you build complex UIs by combining smaller components together.
            A parent component can render child components, and data flows from parent to child through props.
          </p>
        </section>

        <section className="examples">
          <h2>Examples</h2>

          <ExampleCard title="Example 1: Component Composition">
            <div className="code-section">
              <CodeBlock code={exampleCode1} language="jsx" />
              <p className="explanation">
                The <code>Page</code> component is made up of smaller components: <code>Header</code>, content, and <code>Footer</code>.
                This is <strong>composition</strong> – combining smaller pieces to create a larger UI. Each component has a single
                responsibility, making code easier to understand and reuse.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <label>
                <input
                  type="checkbox"
                  checked={showHeader}
                  onChange={() => setShowHeader(!showHeader)}
                  aria-label="Toggle header visibility"
                />
                {' '}Show Header
              </label>
              {showHeader && <ComposedPage title="Welcome to Our Site" />}
            </div>
          </ExampleCard>

          <ExampleCard title="Example 2: Rendering Lists of Components">
            <div className="code-section">
              <CodeBlock code={exampleCode2} language="jsx" />
              <p className="explanation">
                You can render multiple components by looping through data with <code>.map()</code>.
                Each item becomes a separate component. The <code>key</code> prop (discussed in Lists & Keys section)
                helps React identify which items have changed.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <div className="card-grid">
                {colors.map(color => (
                  <Card key={color} color={color} />
                ))}
              </div>
              <button
                className="demo-button"
                onClick={() => setColors([...colors, `color${colors.length + 1}`])}
              >
                Add Color
              </button>
              <button
                className="demo-button"
                onClick={() => setColors(colors.slice(0, colors.length - 1))}
                disabled={colors.length === 0}
              >
                Remove Color
              </button>
            </div>
          </ExampleCard>

          <ExampleCard title="Example 3: Parent Rendering Multiple Children">
            <div className="code-section">
              <CodeBlock code={exampleCode3} language="jsx" />
              <p className="explanation">
                The parent <code>App</code> component renders the same child component multiple times with different props.
                React efficiently renders each instance, and props let you customize what each child displays.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <div className="welcome-messages">
                <h3>Welcome, Alice! 👋</h3>
                <h3>Welcome, Bob! 👋</h3>
                <h3>Welcome, Charlie! 👋</h3>
              </div>
            </div>
          </ExampleCard>
        </section>

        <section className="analogy">
          <h2>Real-Life Analogy</h2>
          <p>
            Think of component rendering like <strong>building with LEGO blocks</strong>. Each small block (component)
            is simple and does one thing well. You combine many blocks together to create a larger structure (your app).
            The parent block holds smaller blocks in place, giving them instructions (props) on how to fit.
          </p>
          <p>
            When you render a component, you're essentially telling React: "Display this block, with these props,
            in this location." React takes care of showing it on the screen and updating it when props change.
          </p>
          <p>
            Just like you wouldn't build an entire house from one giant LEGO brick, you don't build React apps
            with one huge component. You compose smaller, reusable components into larger ones.
          </p>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            <strong>Netflix</strong> uses component rendering to build its complex UI. The page might render a
            <code>HeaderBar</code>, a <code>SearchComponent</code>, multiple <code>ContentRow</code> components
            (each showing a category like "Trending Now" or "Because you watched..."), and a <code>Footer</code>.
          </p>
          <p>
            Each <code>ContentRow</code> renders multiple <code>MovieCard</code> components. This composition allows
            Netflix to reuse components across different pages (home, search results, profile) while keeping
            the code maintainable and flexible.
          </p>
          <p>
            Similar patterns exist on YouTube, Facebook, and other content-heavy platforms. They all use component
            composition to manage complex UIs.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default RenderingComponents;
