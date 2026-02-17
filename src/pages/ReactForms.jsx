import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

function SimpleFormDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'React Basics'
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="event-demo">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="form-name">Name: </label>
          <input
            id="form-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={{ marginTop: '12px' }}>
          <label htmlFor="form-email">Email: </label>
          <input
            id="form-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginTop: '12px' }}>
          <label htmlFor="form-course">Course: </label>
          <select
            id="form-course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option>React Basics</option>
            <option>State and Props</option>
            <option>React Forms</option>
          </select>
        </div>
        <button className="demo-button" type="submit" style={{ marginTop: '12px' }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="success-message" style={{ marginTop: '12px' }}>
          <p><strong>Output:</strong></p>
          <p>Name: <strong>{submittedData.name}</strong></p>
          <p>Email: <strong>{submittedData.email}</strong></p>
          <p>Course: <strong>{submittedData.course}</strong></p>
        </div>
      )}
    </div>
  );
}

export function ReactForms() {
  const formsCodeExample = `import { useState } from 'react';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: 'React Basics'
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <select name="course" value={formData.course} onChange={handleChange}>
        <option>React Basics</option>
        <option>State and Props</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>React Forms</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            <strong>React Forms</strong> are used to collect user input like name, email, and selections.
            In React, form inputs are usually <strong>controlled components</strong>, which means the input
            values are stored in state and updated with <code>onChange</code>.
          </p>
        </section>

        <section className="examples">
          <h2>Simple Interactive Example</h2>
          <ExampleCard title="Student Registration Form">
            <div className="code-section">
              <CodeBlock code={formsCodeExample} language="jsx" />
              <p className="explanation">
                This form uses one state object to store all fields. On submit, <code>preventDefault()</code> stops
                page reload and we display submitted data as output.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Output:</h4>
              <SimpleFormDemo />
            </div>
          </ExampleCard>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            <strong>E-commerce checkout forms</strong> (Amazon, Walmart) use React forms for shipping address,
            payment details, and contact information. Each input is validated in real time before submission.
          </p>
          <p>
            <strong>Job application portals</strong> use forms for profile details, resume upload, and answers to
            screening questions. React state helps keep all fields synchronized and easy to validate.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default ReactForms;
