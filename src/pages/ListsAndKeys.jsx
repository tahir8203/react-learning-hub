import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

// Example components
function SimpleListDemo() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div className="list-demo">
      <h5>Fruits List:</h5>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

function TodoListDemo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy to production' }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const newItem = {
        id: Math.max(...todos.map(t => t.id), 0) + 1,
        text: newTodo
      };
      setTodos([...todos, newItem]);
      setNewTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="list-demo">
      <div style={{ marginBottom: '12px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          aria-label="New todo input"
        />
        <button className="demo-button" onClick={addTodo} style={{ marginLeft: '8px' }}>
          Add
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button
              className="demo-button delete-btn"
              onClick={() => removeTodo(todo.id)}
              aria-label={`Delete ${todo.text}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserCardsDemo() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Designer' },
    { id: 2, name: 'Bob', role: 'Developer' },
    { id: 3, name: 'Charlie', role: 'Manager' }
  ]);

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="list-demo">
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h5>{user.name}</h5>
            <p>{user.role}</p>
            <button
              className="demo-button"
              onClick={() => removeUser(user.id)}
              aria-label={`Remove ${user.name}`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ListsAndKeys() {
  const exampleCode1 = `const fruits = ['Apple', 'Banana', 'Orange'];

// Map array to JSX elements
<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>`;

  const exampleCode2 = `const todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build a project' },
  { id: 3, text: 'Deploy' }
];

<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>`;

  const exampleCode3 = `// BAD: Using index as key causes issues
{items.map((item, index) => (
  <div key={index}>{item}</div>
))}

// GOOD: Use unique, stable IDs
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>Lists and Keys</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            When you render a <strong>list of items</strong>, React needs to track which items have changed.
            The <code>map()</code> function converts an array into an array of React elements.
            Each list item needs a unique <code>key</code> prop so React can identify which items are added,
            removed, or changed.
          </p>
          <p>
            <strong>Keys</strong> help React match list items with their corresponding data, improving performance
            and preventing bugs. Always use a unique, stable identifier (like a database ID) as the key.
          </p>
        </section>

        <section className="examples">
          <h2>Examples</h2>

          <ExampleCard title="Example 1: Simple List with map()">
            <div className="code-section">
              <CodeBlock code={exampleCode1} language="jsx" />
              <p className="explanation">
                The <code>map()</code> function loops through each fruit and returns a list item <code>&lt;li&gt;</code>.
                Each item has a <code>key</code> prop. In this simple example, the index works as a key because
                the list never changes order.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <SimpleListDemo />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 2: Dynamic List with Add/Remove">
            <div className="code-section">
              <CodeBlock code={exampleCode2} language="jsx" />
              <p className="explanation">
                When items are added or removed, use a unique <code>id</code> property as the key, not the array index.
                Here, each todo has an <code>id</code>. When you delete an item, React uses the key to identify
                which item was removed, maintaining correct state for remaining items.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <TodoListDemo />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 3: Why Keys Matter">
            <div className="code-section">
              <CodeBlock code={exampleCode3} language="jsx" />
              <p className="explanation">
                Using the array <strong>index as a key</strong> causes problems when items are added, removed, or reordered.
                React won't know which item is which, causing bugs and performance issues. Always use a <strong>stable, unique ID</strong>
                like <code>item.id</code>. This tells React exactly which item changed.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <UserCardsDemo />
            </div>
          </ExampleCard>
        </section>

        <section className="analogy">
          <h2>Real-Life Analogy</h2>
          <p>
            Think of keys like <strong>student ID numbers</strong> in a classroom. Each student has a unique ID
            (key) written on their desk. When students sit at different desks (the list reorders), the teacher
            (React) knows which student is which by their ID, not by their desk position (index).
          </p>
          <p>
            If you used "desk number" as the identifier instead of "student ID":
            When Alice and Bob swap desks, you'd think Bob is at Alice's desk, getting confused about who's who.
            But with student IDs, the teacher knows exactly where each student is, even if desks change.
          </p>
          <p>
            Similarly, React uses keys (IDs) to track list items. If you add or remove items, React matches
            items by their key, not by their position in the array. This keeps state, focus, and form inputs
            tied to the correct item.
          </p>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            <strong>Instagram's feed</strong> renders thousands of posts using lists. Each post has a unique
            <code>post_id</code> that serves as the key. When you like a post, scroll, or refresh, React uses
            the post ID to track which post is which. Without proper keys, liking a post might like a different
            one after scrolling!
          </p>
          <p>
            <strong>Gmail's inbox</strong> is a list of emails. Each email has a unique ID. When you delete
            an email, React uses the ID to identify which email was removed and updates the list correctly.
            If Gmail used list indices as keys, deleting one email might accidentally delete the wrong one.
          </p>
          <p>
            <strong>Trello boards</strong> contain lists of cards. Each card has a unique ID. When you drag
            a card between lists (reordering), React uses the card ID to ensure the correct card moves with
            all its data (title, description, comments, etc.) intact.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default ListsAndKeys;
