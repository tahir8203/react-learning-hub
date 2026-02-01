import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

// Example components
function ClickDemo() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="event-demo">
      <p>Button clicked: <strong>{clickCount}</strong> times</p>
      <button className="demo-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

function InputDemo() {
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('react');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="event-demo">
      <div>
        <label htmlFor="text-input">Type something: </label>
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <p>You typed: <strong>{text}</strong></p>
      </div>
      <div style={{ marginTop: '12px' }}>
        <label htmlFor="framework-select">Choose a framework: </label>
        <select id="framework-select" value={selected} onChange={handleSelectChange}>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
        <p>Selected: <strong>{selected}</strong></p>
      </div>
    </div>
  );
}

function FormDemo() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="event-demo">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name: </label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={{ marginTop: '12px' }}>
          <label htmlFor="email-input">Email: </label>
          <input
            id="email-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button className="demo-button" type="submit" style={{ marginTop: '12px' }}>
          Submit Form
        </button>
      </form>
      {submitted && (
        <p className="success-message">
          ✓ Form submitted with name: <strong>{formData.name}</strong> and email: <strong>{formData.email}</strong>
        </p>
      )}
    </div>
  );
}

export function EventHandling() {
  const exampleCode1 = `function ClickDemo() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}`;

  const exampleCode2 = `function InputDemo() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here"
      />
      <p>You typed: {text}</p>
    </div>
  );
}`;

  const exampleCode3 = `function FormDemo() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>Event Handling</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            <strong>Event handling</strong> is how React responds to user interactions like clicks, typing,
            form submissions, and mouse movements. In React, you attach event handlers to elements using
            camelCase attribute names (e.g., <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>).
          </p>
          <p>
            When an event occurs, React calls the handler function, often triggering state updates that
            cause the component to re-render.
          </p>
        </section>

        <section className="examples">
          <h2>Examples</h2>

          <ExampleCard title="Example 1: onClick Event">
            <div className="code-section">
              <CodeBlock code={exampleCode1} language="jsx" />
              <p className="explanation">
                The <code>onClick</code> event fires when the button is clicked. The handler function <code>handleClick</code>
                updates the state, causing React to re-render the component with the new count. This is a fundamental
                pattern for handling user interactions.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <ClickDemo />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 2: onChange with Input and Select">
            <div className="code-section">
              <CodeBlock code={exampleCode2} language="jsx" />
              <p className="explanation">
                The <code>onChange</code> event fires every time a user types in an input or selects an option.
                We capture the new value from the event object (<code>e.target.value</code>) and update state.
                This pattern is called <strong>controlled components</strong> – React controls the input value.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <InputDemo />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 3: Form Submission with preventDefault">
            <div className="code-section">
              <CodeBlock code={exampleCode3} language="jsx" />
              <p className="explanation">
                The <code>onSubmit</code> event fires when a form is submitted (Enter key or Submit button).
                Calling <code>e.preventDefault()</code> stops the browser's default behavior (page reload).
                Instead, your handler function runs, allowing you to process the form data in JavaScript.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <FormDemo />
            </div>
          </ExampleCard>
        </section>

        <section className="analogy">
          <h2>Real-Life Analogy</h2>
          <p>
            Think of event handling like a <strong>doorbell system</strong>. When someone pushes the doorbell button (user clicks),
            a sound plays inside the house (event handler function runs). The handler might be set to play
            a specific tune, alert the dog, or turn on a light – that's your code deciding what happens.
          </p>
          <p>
            Different buttons trigger different events. A doorbell is <code>onClick</code>, a mailbox notification
            is <code>onChange</code> (something changed), and opening the front door is <code>onSubmit</code> (final action).
            Each event can have a different response programmed in.
          </p>
          <p>
            Just like you can ignore a doorbell, you can ignore events in code. But if you want something
            to happen when a user interacts with your app, you set up an event handler.
          </p>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            <strong>Google Docs</strong> uses extensive event handling. As you type, <code>onChange</code> events
            fire and trigger auto-save functionality. Clicking buttons (like "Bold" or "Italic") fires <code>onClick</code>
            events that format text. Form submissions (sharing documents) use <code>onSubmit</code> events.
          </p>
          <p>
            <strong>Twitter</strong> handles events when you like a tweet (<code>onClick</code>), type in the
            compose box (<code>onChange</code>), and submit a tweet (<code>onSubmit</code>). Each action is
            instantly reflected in the UI thanks to event handlers updating state.
          </p>
          <p>
            <strong>Online shopping</strong> sites rely on events: clicking "Add to Cart", changing quantity
            in the cart, submitting payment forms – all use event handlers to create a smooth user experience.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default EventHandling;
