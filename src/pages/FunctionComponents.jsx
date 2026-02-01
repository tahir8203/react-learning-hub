import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

// Example component used in the page
function Greeting({ name = 'React' }) {
  return <h2>Hello, {name}! 👋</h2>;
}

function ReusableButton({ label, onClick }) {
  return (
    <button className="demo-button" onClick={onClick}>
      {label}
    </button>
  );
}

export function FunctionComponents() {
  const [greeting, setGreeting] = useState('React');
  const [clickCount, setClickCount] = useState(0);

  const exampleCode1 = `function Greeting({ name = 'React' }) {
  return <h2>Hello, {name}! 👋</h2>;
}

// Use it
<Greeting name="Alice" />`;

  const exampleCode2 = `function ReusableButton({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

// Use it multiple times
<ReusableButton label="Click Me" onClick={handleClick} />
<ReusableButton label="Try Again" onClick={handleAgain} />`;

  const exampleCode3 = `// Without props (not reusable)
function GreetingAlice() {
  return <p>Hello, Alice!</p>;
}

// With props (reusable for any name)
function GreetingFlex({ name }) {
  return <p>Hello, {name}!</p>;
}`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>Function Components</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            A <strong>function component</strong> is a JavaScript function that returns JSX (React elements).
            It's the modern, preferred way to create React components. Function components can accept props
            (short for "properties") as input and return what should appear on the screen.
          </p>
        </section>

        <section className="examples">
          <h2>Examples</h2>

          <ExampleCard title="Example 1: Simple Greeting Component">
            <div className="code-section">
              <CodeBlock code={exampleCode1} language="jsx" />
              <p className="explanation">
                This function component accepts a <code>name</code> prop with a default value of "React".
                It returns JSX that displays a greeting. You can reuse this component with different names.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <input
                type="text"
                placeholder="Enter a name"
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
                aria-label="Enter a name for greeting"
              />
              <Greeting name={greeting} />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 2: Reusable Button Component">
            <div className="code-section">
              <CodeBlock code={exampleCode2} language="jsx" />
              <p className="explanation">
                This component is <strong>reusable</strong> because it accepts props for the label and click handler.
                Instead of hardcoding a button's text, we pass it as a prop, making the same component work in different contexts.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <p>Click count: <strong>{clickCount}</strong></p>
              <ReusableButton
                label="Increment"
                onClick={() => setClickCount(clickCount + 1)}
              />
              <ReusableButton
                label="Reset"
                onClick={() => setClickCount(0)}
              />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 3: Props Make Components Flexible">
            <div className="code-section">
              <CodeBlock code={exampleCode3} language="jsx" />
              <p className="explanation">
                Without props, you'd need to write a new function for every greeting (GreetingAlice, GreetingBob, etc.).
                Props let you pass data into a component, making it <strong>flexible and reusable</strong>.
              </p>
            </div>
          </ExampleCard>
        </section>

        <section className="analogy">
          <h2>Real-Life Analogy</h2>
          <p>
            Think of a function component like a <strong>recipe</strong>. A recipe is a reusable set of instructions that
            can be used to make a meal. The recipe itself doesn't change, but the <strong>ingredients</strong> (props) you add
            can vary.
          </p>
          <p>
            For example, a "Cookie Recipe" is a function component. The ingredients (flour, sugar, eggs) are like props.
            You can make the same recipe with vanilla extract for vanilla cookies or chocolate chips for chocolate cookies.
            Same function, different props, different results!
          </p>
          <p>
            Props are like filling in a template form. The form (component) stays the same, but the data (props) you enter
            changes each time.
          </p>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            <strong>E-commerce websites</strong> like Amazon use function components to display product cards.
            Instead of writing a new component for each product, they create a single <code>ProductCard</code> component
            that accepts props like <code>name</code>, <code>price</code>, <code>image</code>, and <code>rating</code>.
          </p>
          <p>
            This one reusable component can display thousands of products. When you're browsing Amazon, every product card
            you see is likely the same function component, just with different props passed in.
          </p>
          <p>
            Another example: Social media feeds (Instagram, Twitter) use reusable <code>Post</code> or <code>Tweet</code> components.
            The component structure is the same, but the content (user name, message, image) comes from props.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default FunctionComponents;
