import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

// Example components
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-demo">
      <p>Count: <strong>{count}</strong></p>
      <button className="demo-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="demo-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

function ChildComponent({ message, count }) {
  return (
    <div className="child-component-demo">
      <p>Message from parent: <strong>{message}</strong></p>
      <p>Count from parent: <strong>{count}</strong></p>
    </div>
  );
}

function LiftedStateExample() {
  const [sharedCount, setSharedCount] = useState(0);

  return (
    <div className="lifted-state-demo">
      <p>Shared count: <strong>{sharedCount}</strong></p>
      <button className="demo-button" onClick={() => setSharedCount(sharedCount + 1)}>
        Both Components See This
      </button>
      <div className="sibling-containers">
        <div className="sibling">
          <h5>Component 1</h5>
          <p>Count: {sharedCount}</p>
        </div>
        <div className="sibling">
          <h5>Component 2</h5>
          <p>Count: {sharedCount}</p>
        </div>
      </div>
    </div>
  );
}

export function StateAndProps() {
  const [parentMessage, setParentMessage] = useState('Hello Child!');
  const [parentCount, setParentCount] = useState(5);
  const [showCodeExplanation, setShowCodeExplanation] = useState(false);

  const exampleCode1 = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`;

  const exampleCode2 = `function ChildComponent({ message, count }) {
  return (
    <div>
      <p>Message: {message}</p>
      <p>Count: {count}</p>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <ChildComponent message="Hello" count={10} />
      <ChildComponent message="Hi" count={20} />
    </div>
  );
}`;

  const exampleCode3 = `function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count in Parent: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child1 count={count} />
      <Child2 count={count} />
    </div>
  );
}

function Child1({ count }) {
  return <p>Child 1 sees: {count}</p>;
}

function Child2({ count }) {
  return <p>Child 2 sees: {count}</p>;
}`;

  const counterCodeExample = `import { useState } from "react";

function Counter() {
  // Declare a state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>State and Props</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            <strong>Props</strong> (properties) are values passed from a parent component to a child component.
            They are <strong>read-only</strong> – a child cannot modify props.
          </p>
          <p>
            <strong>State</strong> is data that belongs to a component and can change over time.
            When state changes, React re-renders the component. State is managed within the component using the
            <code>useState</code> hook.
          </p>
        </section>

        <section className="examples">
          <h2>Examples</h2>

          <ExampleCard title="Example 1: State with useState Hook">
            <div className="code-section">
              <CodeBlock code={exampleCode1} language="jsx" />
              <p className="explanation">
                <code>useState</code> is a React hook that lets you add state to a function component.
                It returns an array: the current state value and a function to update it.
                When you call the setter function, React re-renders the component with the new state.
              </p>
              <button
                className="demo-button"
                onClick={() => setShowCodeExplanation(!showCodeExplanation)}
              >
                {showCodeExplanation ? 'Hide Explaination' : 'Code Explaination'}
              </button>
              {showCodeExplanation && (
                <div style={{ marginTop: '16px' }}>
                  <h4>Example: Counter using useState</h4>
                  <h5>Code</h5>
                  <CodeBlock code={counterCodeExample} language="jsx" />
                  <p className="explanation"><strong>Explanation (line by line, plain language)</strong></p>

                  <h5>1. useState import</h5>
                  <pre className="code-block">{`import { useState } from "react";`}</pre>
                  <p className="explanation">
                    <code>useState</code> is a React hook.
                    Hooks let function components remember data between renders.
                  </p>

                  <h5>2. Creating state</h5>
                  <pre className="code-block">{`const [count, setCount] = useState(0);`}</pre>
                  <p className="explanation">This line does three things:</p>
                  <ul>
                    <li><strong>count</strong>{' -> '}the current value of the state</li>
                    <li><strong>setCount</strong>{' -> '}a function to update that value</li>
                    <li><strong>0</strong>{' -> '}the initial value (when the component loads the first time)</li>
                  </ul>
                  <p className="explanation">
                    Think of it like: "React, please store a number for me, starting at 0."
                  </p>

                  <h5>3. Using state in JSX</h5>
                  <pre className="code-block">{`<p>Count: {count}</p>`}</pre>
                  <ul>
                    <li><code>{'{count}'}</code> displays the current state value.</li>
                    <li>When <code>count</code> changes, React automatically re-renders this text.</li>
                    <li>No manual DOM updates.</li>
                  </ul>

                  <h5>4. Updating state</h5>
                  <pre className="code-block">{`<button onClick={() => setCount(count + 1)}>`}</pre>
                  <ul>
                    <li><code>onClick</code> runs when the button is pressed.</li>
                    <li><code>setCount(count + 1)</code> updates the state.</li>
                    <li>React re-renders the component with the new value.</li>
                  </ul>
                  <p className="explanation">
                    <strong>Important rule:</strong><br />
                    Never change state directly<br />
                    <code>{`count = count + 1`}</code> (wrong)<br />
                    <code>{`setCount(count + 1)`}</code> (correct)
                  </p>

                  <h5>What "state" really means</h5>
                  <p className="explanation">
                    State is data that belongs to a component, can change over time,
                    and when it changes, the UI updates automatically.
                    If the data affects what the user sees, it should probably be state.
                  </p>

                  <h5>Mental model (simple but accurate)</h5>
                  <ul>
                    <li><strong>Props</strong>{' -> '}data coming from outside</li>
                    <li><strong>State</strong>{' -> '}data managed inside the component</li>
                  </ul>

                  <h5>One common beginner mistake</h5>
                  <pre className="code-block">{`let count = 0; // wrong`}</pre>
                  <p className="explanation">
                    This won't work because React doesn't track normal variables,
                    and changing them doesn't trigger re-render.
                    That's why <code>useState</code> exists.
                  </p>
                </div>
              )}
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <Counter />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 2: Passing Props to Children">
            <div className="code-section">
              <CodeBlock code={exampleCode2} language="jsx" />
              <p className="explanation">
                The parent component has state/data and passes it to children via props.
                Children receive props as function parameters and use them. The same child component
                can receive different props each time it's rendered, making it flexible.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <div>
                <input
                  type="text"
                  value={parentMessage}
                  onChange={(e) => setParentMessage(e.target.value)}
                  placeholder="Enter message"
                  aria-label="Enter message for child"
                />
                <br />
                <label>
                  Count:
                  <input
                    type="number"
                    value={parentCount}
                    onChange={(e) => setParentCount(Number(e.target.value))}
                    style={{ marginLeft: '8px', width: '80px' }}
                    aria-label="Enter count for child"
                  />
                </label>
              </div>
              <div style={{ marginTop: '16px' }}>
                <h5>Children Receive Props:</h5>
                <ChildComponent message={parentMessage} count={parentCount} />
              </div>
            </div>
          </ExampleCard>

          <ExampleCard title="Example 3: Lifting State Up">
            <div className="code-section">
              <CodeBlock code={exampleCode3} language="jsx" />
              <p className="explanation">
                When multiple child components need to share data, move (lift) the state to their common parent.
                The parent manages the state and passes it as props to both children.
                This way, siblings can "communicate" through a shared parent state.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <LiftedStateExample />
            </div>
          </ExampleCard>
        </section>

        <section className="analogy">
          <h2>Real-Life Analogy</h2>
          <p>
            Think of <strong>props</strong> like <strong>instructions</strong> a parent gives a child.
            A parent might say "Go to the store and buy milk." The child receives this instruction (prop)
            and acts on it, but cannot change the instruction themselves.
          </p>
          <p>
            <strong>State</strong> is like a <strong>child's own memory</strong>. A child has their own thoughts,
            feelings, and memories that only they control. They can change their own mood from happy to sad,
            but they cannot change their parent's mood (props) – that comes from outside.
          </p>
          <p>
            When a child's state changes, the whole household (React) notices and adjusts. When a parent gives
            new props (instructions), the child receives them and responds. Together, state and props create
            the dynamic behavior of a component.
          </p>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            <strong>Shopping carts</strong> on e-commerce sites like Amazon use state and props extensively.
            Each product in the cart is a component that receives props: product name, price, and image.
            The quantity in the cart is state – when you change the quantity, the component re-renders
            and updates the total price instantly.
          </p>
          <p>
            The main Cart page (parent) manages the overall cart state (total items, total price).
            Each CartItem (child) receives props from the parent (product details) and has its own state
            (quantity input). When you increase quantity in one item, the parent's total updates automatically.
          </p>
          <p>
            Form applications also heavily use state. A login form has state for username, password, and
            error messages. As you type, state updates. The parent might pass down a function via props
            to handle form submission.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default StateAndProps;
