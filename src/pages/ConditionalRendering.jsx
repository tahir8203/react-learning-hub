import React, { useState } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import ExampleCard from '../components/ExampleCard';

// Example components
function LoginDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div className="conditional-demo">
        <p>Welcome back! 👋</p>
        <button className="demo-button" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="conditional-demo">
      <p>Please log in</p>
      <button className="demo-button" onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
    </div>
  );
}

function UserStatusDemo() {
  const [userRole, setUserRole] = useState('guest');

  const getMessage = () => {
    if (userRole === 'admin') {
      return 'You have full access to all features';
    } else if (userRole === 'user') {
      return 'You can view and comment on posts';
    } else {
      return 'Create an account to unlock more features';
    }
  };

  return (
    <div className="conditional-demo">
      <div style={{ marginBottom: '12px' }}>
        <label htmlFor="role-select">Select role: </label>
        <select
          id="role-select"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <p className={`status-${userRole}`}>{getMessage()}</p>
    </div>
  );
}

function NotificationDemo() {
  const [hasNotifications, setHasNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  return (
    <div className="conditional-demo">
      <div style={{ marginBottom: '12px' }}>
        <label>
          <input
            type="checkbox"
            checked={hasNotifications}
            onChange={() => setHasNotifications(!hasNotifications)}
            aria-label="Enable notifications"
          />
          {' '}Show notifications
        </label>
      </div>
      {hasNotifications && (
        <div>
          <p>
            You have {unreadCount > 0 ? (
              <strong>{unreadCount} new messages</strong>
            ) : (
              <strong>no new messages</strong>
            )}
          </p>
          {unreadCount > 0 && (
            <button className="demo-button" onClick={() => setUnreadCount(0)}>
              Mark as Read
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function ConditionalRendering() {
  const exampleCode1 = `function LoginDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If/else returns different JSX
  if (isLoggedIn) {
    return <p>Welcome back! <button>Logout</button></p>;
  }

  return <p>Please log in <button>Login</button></p>;
}`;

  const exampleCode2 = `function UserStatus({ role }) {
  // Ternary: condition ? true : false
  return (
    <p>
      {role === 'admin' 
        ? 'You have full access' 
        : 'Limited access'}
    </p>
  );
}`;

  const exampleCode3 = `function Notifications({ hasNotif, count }) {
  return (
    <div>
      {/* && operator: show if true, hide if false */}
      {hasNotif && (
        <p>You have {count} new notifications</p>
      )}
      
      {/* Complex: nested ternary */}
      {count > 0 ? (
        <p>You have unread items</p>
      ) : (
        <p>All caught up!</p>
      )}
    </div>
  );
}`;

  return (
    <Layout>
      <div className="topic-page">
        <h1>Conditional Rendering</h1>

        <section className="definition">
          <h2>Definition</h2>
          <p>
            <strong>Conditional rendering</strong> is showing or hiding content based on conditions.
            In React, you can use JavaScript's <code>if/else</code>, <strong>ternary operator</strong>
            (<code>condition ? true : false</code>), or <strong>logical AND operator</strong> (<code>&& </code>)
            to decide what to render.
          </p>
          <p>
            Different conditions render different content, creating dynamic user experiences.
          </p>
        </section>

        <section className="examples">
          <h2>Examples</h2>

          <ExampleCard title="Example 1: If/Else Statement">
            <div className="code-section">
              <CodeBlock code={exampleCode1} language="jsx" />
              <p className="explanation">
                An <code>if/else</code> statement returns different JSX based on a condition.
                If <code>isLoggedIn</code> is true, show a welcome message. Otherwise, show a login prompt.
                This is the clearest way to conditionally render large chunks of UI.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <LoginDemo />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 2: Ternary Operator">
            <div className="code-section">
              <CodeBlock code={exampleCode2} language="jsx" />
              <p className="explanation">
                The <strong>ternary operator</strong> is useful for inline conditions:
                <code>condition ? ifTrue : ifFalse</code>. It's more concise than if/else but can get
                messy with nested conditions. Use it for simple true/false decisions.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <UserStatusDemo />
            </div>
          </ExampleCard>

          <ExampleCard title="Example 3: Logical AND (&&) Operator">
            <div className="code-section">
              <CodeBlock code={exampleCode3} language="jsx" />
              <p className="explanation">
                The <code>&&</code> operator renders content only if the condition is true.
                <code>condition && element</code> displays <code>element</code> if <code>condition</code> is true,
                otherwise renders nothing. Perfect for showing optional UI elements.
              </p>
            </div>
            <div className="interactive-demo">
              <h4>Live Demo:</h4>
              <NotificationDemo />
            </div>
          </ExampleCard>

        </section>

        <section className="analogy">
          <h2>Real-Life Analogy</h2>
          <p>
            Think of conditional rendering like a <strong>traffic light</strong>.
            Based on the condition (the current light color):
            <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
              <li><strong>Red light:</strong> Show "Stop" sign (if condition is false) – don't render</li>
              <li><strong>Green light:</strong> Show "Go" sign (if condition is true) – render the element</li>
            </ul>
          </p>
          <p>
            Another example: A restaurant that's <strong>open or closed</strong>. If it's open hours, show "Welcome, come in!"
            If it's closed, show "We're closed. Reopens tomorrow at 10 AM." The same component structure, different content
            based on a condition (isOpen).
          </p>
          <p>
            Or think of a <strong>video player</strong>: If a video is playing, show pause button. If paused, show play button.
            The button changes based on the condition, making the app responsive to user state.
          </p>
        </section>

        <section className="industry-example">
          <h2>Industry Example</h2>
          <p>
            <strong>Spotify</strong> uses conditional rendering extensively. If a user is logged in, show
            their playlists and recommendations. If not logged in, show "Sign up" and "Login" buttons.
            The entire page changes based on authentication status.
          </p>
          <p>
            <strong>Gmail</strong> shows different content based on conditions:
            If there are unread emails, show the count in the tab title and highlight the inbox.
            If you're composing a draft, show a "Save draft" button. If the email is sent, hide it.
            Each piece of UI appears or disappears based on conditions.
          </p>
          <p>
            <strong>E-commerce sites</strong> like Amazon conditionally render based on inventory:
            If an item is in stock, show "Add to Cart" button. If out of stock, show "Notify Me" button.
            If the user is viewing their order history, show order status ("Delivered", "Processing", etc.)
            based on the actual order state.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default ConditionalRendering;
