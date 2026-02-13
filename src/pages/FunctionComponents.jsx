import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

function Student() {
  return <h2>Student Information</h2>;
}

function StudentInfo({ name, roll }) {
  const [status, setStatus] = useState('Absent');

  return (
    <div>
      <p>Name: {name}</p>
      <p>Roll No: {roll}</p>
      <p>Status: {status}</p>
      <button className="demo-button" onClick={() => setStatus('Present')}>
        Mark Present
      </button>
    </div>
  );
}

export function FunctionComponents() {
  const [demoStatus, setDemoStatus] = useState('Absent');

  const exampleCode1 = `function Student() {
  return <h2>Student Information</h2>;
}`;

  const exampleCode2 = `function StudentInfo(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.roll}</p>
    </div>
  );
}`;

  const exampleCode2Usage = `<StudentInfo name="Ali" roll="CS-101" />`;

  const exampleCode3 = `import { useState } from "react";

function StudentInfo(props) {
  const [status, setStatus] = useState("Absent");

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.roll}</p>
      <p>Status: {status}</p>

      <button onClick={() => setStatus("Present")}>
        Mark Present
      </button>
    </div>
  );
}`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>Function Components</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            Function components are plain JavaScript functions that return JSX and are used to define reusable UI
            pieces in React.
          </p>
        </section>

        <section className="examples">
          <h2>Examples</h2>

          <ExampleCard title="Example 1: Concept of Function Components">
            <div className="code-section">
              <CodeBlock code={exampleCode1} language="jsx" />
              <p className="explanation">
                Function components are plain JavaScript functions that return JSX and are used to define reusable UI
                pieces in React.
              </p>
              <h4>Key points:</h4>
              <ul>
                <li>Written as normal JS functions</li>
                <li>Easier to read and test than class components</li>
                <li>Can use state and lifecycle features via Hooks</li>
              </ul>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <Student />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 2: Receiving Student Name and Roll Number with Props">
            <div className="code-section">
              <CodeBlock code={exampleCode2} language="jsx" />
              <h4>Usage:</h4>
              <CodeBlock code={exampleCode2Usage} language="jsx" />
              <p className="explanation">
                Props allow data to flow from parent to child, making components reusable and configurable.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <StudentInfo name="Ali" roll="CS-101" />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 3: Adding State to Track Present or Absent">
            <div className="code-section">
              <CodeBlock code={exampleCode3} language="jsx" />
              <p className="explanation">
                State stores data that can change over time, such as attendance status.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <p>Status: <strong>{demoStatus}</strong></p>
              <button className="demo-button" onClick={() => setDemoStatus('Present')}>
                Mark Present
              </button>
              <button className="demo-button" onClick={() => setDemoStatus('Absent')} style={{ marginLeft: '8px' }}>
                Mark Absent
              </button>
            </div>
          </ExampleCard>

          <ExampleCard title="Example 4: Difference Between State and Props">
            <div className="code-section">
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '12px' }}>
                <thead>
                  <tr style={{ background: '#f3f4f6' }}>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Aspect</th>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Props</th>
                    <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Mutability</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Immutable</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Mutable</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Ownership</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Parent component</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Same component</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Data Flow</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>One-way (parent -&gt; child)</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Internal</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px' }}>Purpose</td>
                    <td style={{ padding: '10px' }}>Pass data</td>
                    <td style={{ padding: '10px' }}>Manage dynamic data</td>
                  </tr>
                </tbody>
              </table>
              <p className="explanation">
                Props are read-only inputs from parent components, while state is internal, changeable data managed by
                the component itself.
              </p>
              <h4>How React re-renders when state changes</h4>
              <p><strong>What happens on button click</strong></p>
              <CodeBlock code={`setStatus("Present");`} language="jsx" />
              <h4>Re-render sequence</h4>
              <ol>
                <li>State value changes</li>
                <li>React detects state update</li>
                <li>Component function runs again</li>
                <li>JSX is re-evaluated</li>
                <li>Only the changed UI part updates in the browser</li>
              </ol>
              <p className="note">
                Important point: React does not reload the page. It only updates the affected UI using the Virtual DOM.
              </p>
            </div>
          </ExampleCard>
        </section>

        <section className="analogy">
          <h2>Real-Life Analogy</h2>
          <p>
            Think of props as information written on a student form by the school office (parent component), while state
            is the attendance status updated inside the classroom (same component).
          </p>
          <p>
            The form data is read-only for the class teacher in this flow, but attendance can change during class and
            React updates only that part of the UI.
          </p>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            In school management dashboards, a reusable <code>StudentInfo</code> component receives student identity via
            props and tracks live fields (like attendance status) using state.
          </p>
          <p>
            This pattern keeps data flow clear, components reusable, and updates predictable when records change.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default FunctionComponents;
