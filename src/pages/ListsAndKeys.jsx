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
  const [showExample3Explanation, setShowExample3Explanation] = useState(false);

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
              <div className="explanation">
                <h4>Line-by-Line Explanation</h4>
                <p>
                  Let&apos;s go through this line by line, focusing on what React is actually doing, not just
                  repeating definitions.
                </p>
                <p>
                  <code>const fruits = ['Apple', 'Banana', 'Orange'];</code>
                </p>
                <p>This is a normal JavaScript array.</p>
                <p>Each item is a string.</p>
                <p>React does nothing special here yet.</p>
                <p>
                  <code>&lt;ul&gt;</code>
                </p>
                <p>This is JSX.</p>
                <p>It represents an unordered list in the browser (<code>&lt;ul&gt;</code> in HTML).</p>
                <p>JSX looks like HTML, but it is actually JavaScript under the hood.</p>
                <p>
                  <code>{'{fruits.map((fruit, index) => ('}</code>
                </p>
                <p>
                  <code>{'{}'}</code> means &ldquo;run JavaScript here inside JSX&rdquo;.
                </p>
                <p>
                  <code>map()</code> loops over every element in the <code>fruits</code> array.
                </p>
                <p>For each item:</p>
                <p>
                  <code>fruit</code> is the current value (&apos;Apple&apos;, then &apos;Banana&apos;, then
                  &apos;Orange&apos;).
                </p>
                <p>
                  <code>index</code> is the position (<code>0</code>, <code>1</code>, <code>2</code>).
                </p>
                <p>
                  <code>map()</code> returns a new array, not a single value.
                </p>
                <p>In React, that returned array can directly contain JSX elements.</p>
                <p>
                  <code>&lt;li key={'{index}'}&gt;{'{fruit}'}&lt;/li&gt;</code>
                </p>
                <p>This JSX runs once per fruit.</p>
                <p>
                  <code>&lt;li&gt;</code> is a list item element.
                </p>
                <p>
                  <code>{'{fruit}'}</code> inserts the current fruit name as text.
                </p>
                <p>
                  <code>key={'{index}'}</code> helps React identify each list item when updating the UI.
                </p>
                <p>React uses keys to efficiently re-render lists.</p>
                <p>Using index works for simple static lists, but it is not ideal for dynamic lists.</p>
                <p>
                  <code>{'))}'}</code>
                </p>
                <p>This closes the arrow function and the <code>map()</code> call.</p>
                <p>
                  At this point, <code>map()</code> has produced:
                </p>
                <CodeBlock
                  code={`[
  <li>Apple</li>,
  <li>Banana</li>,
  <li>Orange</li>
]`}
                  language="jsx"
                />
                <p>
                  <code>&lt;/ul&gt;</code>
                </p>
                <p>React inserts the generated <code>&lt;li&gt;</code> elements inside the <code>&lt;ul&gt;</code>.</p>
                <p>The final rendered HTML looks like:</p>
                <CodeBlock
                  code={`<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>`}
                  language="html"
                />
                <p>
                  <strong>Key concept to remember:</strong> React does not loop in JSX. JavaScript loops (
                  <code>map</code>) run first, and JSX is just the output of those loops.
                </p>
              </div>
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
              <button
                className="demo-button"
                onClick={() => setShowExample3Explanation(!showExample3Explanation)}
                style={{ marginTop: '8px' }}
              >
                {showExample3Explanation ? 'Hide Explanation' : 'Show Explanation'}
              </button>
              {showExample3Explanation && (
                <div className="explanation" style={{ marginTop: '12px' }}>
                  <h4>Bad approach: using array index as key</h4>
                  <CodeBlock
                    code={`{items.map((item, index) => (
  <div key={index}>{item}</div>
))}`}
                    language="jsx"
                  />
                  <h5>Line by line</h5>
                  <p>
                    <code>items.map((item, index) =&gt; (</code>
                  </p>
                  <p>
                    <code>map()</code> loops over the <code>items</code> array.
                  </p>
                  <p>
                    <code>item</code> is the current value.
                  </p>
                  <p>
                    <code>index</code> is the position in the array: <code>0, 1, 2, ...</code>
                  </p>
                  <p>
                    <code>&lt;div key=&#123;index&#125;&gt;&#123;item&#125;&lt;/div&gt;</code>
                  </p>
                  <p>React renders a <code>&lt;div&gt;</code> for each item.</p>
                  <p>
                    <code>key=&#123;index&#125;</code> uses the position as the identifier.
                  </p>

                  <h5>Why this is a problem</h5>
                  <p>
                    React uses <code>key</code> to track which element is which between renders.
                    If the array changes, the index changes.
                  </p>
                  <p>Example:</p>
                  <CodeBlock
                    code={`['A', 'B', 'C']`}
                    language="jsx"
                  />
                  <p>Keys: <code>0, 1, 2</code></p>
                  <p>Insert a new item at the top:</p>
                  <CodeBlock
                    code={`['X', 'A', 'B', 'C']`}
                    language="jsx"
                  />
                  <p>Keys now become: <code>0, 1, 2, 3</code></p>
                  <p>React thinks:</p>
                  <p>
                    <code>'A'</code> is the old <code>'B'</code>
                  </p>
                  <p>
                    <code>'B'</code> is the old <code>'C'</code>
                  </p>
                  <p>Result:</p>
                  <p>Wrong DOM updates.</p>
                  <p>Inputs lose focus.</p>
                  <p>State sticks to the wrong item.</p>
                  <p>Index keys describe position, not identity.</p>

                  <h4>Good approach: using stable unique IDs</h4>
                  <CodeBlock
                    code={`{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}`}
                    language="jsx"
                  />
                  <h5>Line by line</h5>
                  <p>
                    <code>items.map(item =&gt; (</code>
                  </p>
                  <p>Loop over the array.</p>
                  <p>Each item is an object.</p>
                  <p>
                    <code>&lt;div key=&#123;item.id&#125;&gt;&#123;item.name&#125;&lt;/div&gt;</code>
                  </p>
                  <p>
                    <code>key=&#123;item.id&#125;</code> gives React a stable identity.
                  </p>
                  <p>The key stays the same even if the item moves.</p>
                  <p>
                    <code>&#123;item.name&#125;</code> displays the item label.
                  </p>

                  <h5>Why this works</h5>
                  <p>If the array changes order:</p>
                  <CodeBlock
                    code={`[{id: 3}, {id: 1}, {id: 2}]`}
                    language="jsx"
                  />
                  <p>React still knows:</p>
                  <p>This DOM node belongs to item <code>id: 1</code>.</p>
                  <p>This one belongs to item <code>id: 2</code>.</p>
                  <p>So:</p>
                  <p>Correct updates.</p>
                  <p>No visual glitches.</p>
                  <p>Component state stays attached to the right item.</p>

                  <h5>The core rule (remember this)</h5>
                  <p>
                    Keys tell React <code>"who is who"</code>, not <code>"where is where"</code>.
                  </p>
                  <p>Index is only safe when:</p>
                  <p>List never changes.</p>
                  <p>No insertions.</p>
                  <p>No deletions.</p>
                  <p>No reordering.</p>
                  <p>In real apps, those conditions rarely hold.</p>
                </div>
              )}
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
