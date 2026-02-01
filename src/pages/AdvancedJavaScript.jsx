import React, { useState } from 'react';
import Layout from '../components/Layout';
import ExampleCard from '../components/ExampleCard';

export default function AdvancedJavaScript() {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const toggleTopic = (topic) => {
    setExpandedTopic(expandedTopic === topic ? null : topic);
  };

  return (
    <Layout>
      <div className="topic-page">
        <div className="page-header">
          <h1>⚡ Advanced JavaScript Concepts</h1>
          <p className="page-subtitle">Master Modern JavaScript ES6+ Features</p>
        </div>

        {/* Arrow Functions */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('arrow')}>
            <h2>1. Arrow Functions</h2>
            <span className="expand-icon">{expandedTopic === 'arrow' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'arrow' && (
            <div className="topic-content">
              <p className="concept-intro">
                Arrow functions were introduced in ES6 to make functions shorter and clearer. They are not just shorthand though - they behave differently in some important cases.
              </p>

              <ExampleCard title="Traditional Function (Old Way)">
                <pre className="code-block">
{`function add(a, b) {
  return a + b;
}

console.log(add(3, 4)); // 7`}
                </pre>
                <p className="note">❌ Verbose for small functions</p>
              </ExampleCard>

              <ExampleCard title="Arrow Function (Basic)">
                <pre className="code-block">
{`const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4)); // 7`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Arrow with Implicit Return">
                <pre className="code-block">
{`const add = (a, b) => a + b;

console.log(add(3, 4)); // 7`}
                </pre>
                <p className="note">✅ Most common in modern code</p>
              </ExampleCard>

              <ExampleCard title="Single Parameter (No Parentheses)">
                <pre className="code-block">
{`const square = x => x * x;

console.log(square(5)); // 25`}
                </pre>
              </ExampleCard>

              <ExampleCard title="No Parameters">
                <pre className="code-block">
{`const sayHello = () => "Hello World";

console.log(sayHello()); // Hello World`}
                </pre>
              </ExampleCard>

              <div className="benefits-box">
                <h3>✅ Benefits:</h3>
                <ul>
                  <li>Shorter, cleaner syntax</li>
                  <li>Better for callbacks</li>
                  <li>Lexical `this` binding</li>
                  <li>Modern JavaScript standard</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Destructuring */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('destructuring')}>
            <h2>2. Destructuring</h2>
            <span className="expand-icon">{expandedTopic === 'destructuring' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'destructuring' && (
            <div className="topic-content">
              <p className="concept-intro">
                Destructuring lets you extract values from arrays or objects into variables in a clean, readable way.
              </p>

              <h3>Array Destructuring</h3>

              <ExampleCard title="Basic Array Destructuring">
                <pre className="code-block">
{`const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);  // red
console.log(second); // green
console.log(third);  // blue`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Skipping Values">
                <pre className="code-block">
{`const numbers = [10, 20, 30, 40];

const [a, , c] = numbers;

console.log(a); // 10
console.log(c); // 30`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Default Values">
                <pre className="code-block">
{`const scores = [90];

const [math, physics = 0] = scores;

console.log(math);     // 90
console.log(physics);  // 0 (default)`}
                </pre>
              </ExampleCard>

              <h3>Object Destructuring</h3>

              <ExampleCard title="Basic Object Destructuring">
                <pre className="code-block">
{`const user = {
  name: "Ali",
  age: 22,
  city: "Lahore"
};

const { name, age } = user;

console.log(name); // Ali
console.log(age);  // 22`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Renaming Variables">
                <pre className="code-block">
{`const user = {
  name: "Ali",
  age: 22
};

const { name: fullName, age: userAge } = user;

console.log(fullName); // Ali
console.log(userAge);  // 22`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Destructuring in Function Parameters">
                <pre className="code-block">
{`function printUser({ name, age }) {
  console.log(name);
  console.log(age);
}

printUser({ name: "Sara", age: 20 });`}
                </pre>
                <p className="note">✅ Very common in React</p>
              </ExampleCard>
            </div>
          )}
        </div>

        {/* Props */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('props')}>
            <h2>3. Props & Data Passing</h2>
            <span className="expand-icon">{expandedTopic === 'props' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'props' && (
            <div className="topic-content">
              <p className="concept-intro">
                Props are values passed from outside to a function or component to make it reusable and dynamic.
              </p>

              <ExampleCard title="Simple Function Props">
                <pre className="code-block">
{`function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ali"));   // Hello Ali
console.log(greet("Sara"));  // Hello Sara`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Object Props">
                <pre className="code-block">
{`function showStudent(student) {
  return student.name + " - " + student.marks;
}

const result = showStudent({ 
  name: "Ali", 
  marks: 85 
});
console.log(result); // Ali - 85`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Props with Destructuring">
                <pre className="code-block">
{`function showStudent({ name, marks }) {
  return name + " scored " + marks;
}

console.log(showStudent({ name: "Sara", marks: 92 }));
// Sara scored 92`}
                </pre>
                <p className="note">✅ Most professional approach</p>
              </ExampleCard>
            </div>
          )}
        </div>

        {/* Spread Operator */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('spread')}>
            <h2>4. Spread Operator (...)</h2>
            <span className="expand-icon">{expandedTopic === 'spread' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'spread' && (
            <div className="topic-content">
              <p className="concept-intro">
                The spread operator expands elements of an array or object into individual values.
              </p>

              <ExampleCard title="Spread with Arrays">
                <pre className="code-block">
{`const a = [1, 2, 3];
const b = [...a, 4, 5];

console.log(b);
// [1, 2, 3, 4, 5]`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Copying an Array">
                <pre className="code-block">
{`const original = [10, 20];
const copy = [...original];

copy.push(30);

console.log(original); // [10, 20]
console.log(copy);     // [10, 20, 30]`}
                </pre>
                <p className="note">✅ Creates independent copy</p>
              </ExampleCard>

              <ExampleCard title="Spread with Objects">
                <pre className="code-block">
{`const user = { name: "Ali", age: 22 };
const updated = { ...user, city: "Lahore" };

console.log(updated);
// { name: 'Ali', age: 22, city: 'Lahore' }`}
                </pre>
              </ExampleCard>
            </div>
          )}
        </div>

        {/* Rest Operator */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('rest')}>
            <h2>5. Rest Operator (...)</h2>
            <span className="expand-icon">{expandedTopic === 'rest' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'rest' && (
            <div className="topic-content">
              <p className="concept-intro">
                The rest operator collects multiple values into a single array.
              </p>

              <ExampleCard title="Rest in Function Parameters">
                <pre className="code-block">
{`function sum(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3, 4));
// 10`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Rest with Destructuring">
                <pre className="code-block">
{`const nums = [5, 10, 15, 20];

const [first, ...rest] = nums;

console.log(first); // 5
console.log(rest);  // [10, 15, 20]`}
                </pre>
              </ExampleCard>
            </div>
          )}
        </div>

        {/* map() */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('map')}>
            <h2>6. map() - Transform Arrays</h2>
            <span className="expand-icon">{expandedTopic === 'map' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'map' && (
            <div className="topic-content">
              <p className="concept-intro">
                The map() method creates a new array by applying a function to each element.
              </p>

              <ExampleCard title="Map Numbers">
                <pre className="code-block">
{`const numbers = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);

console.log(doubled);
// [2, 4, 6, 8]`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Map Objects">
                <pre className="code-block">
{`const students = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 90 }
];

const names = students.map(s => s.name);

console.log(names);
// ['Ali', 'Sara']`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Real-World: Transforming Data">
                <pre className="code-block">
{`const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const priceList = products.map(p => 
  p.name + ": " + p.price
);

console.log(priceList);
// ['Laptop: 50000', 'Phone: 20000']`}
                </pre>
              </ExampleCard>
            </div>
          )}
        </div>

        {/* filter() */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('filter')}>
            <h2>7. filter() - Select Items</h2>
            <span className="expand-icon">{expandedTopic === 'filter' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'filter' && (
            <div className="topic-content">
              <p className="concept-intro">
                The filter() method creates a new array containing only elements that satisfy a condition.
              </p>

              <ExampleCard title="Filter Numbers">
                <pre className="code-block">
{`const numbers = [10, 25, 30, 15];

const passed = numbers.filter(n => n >= 20);

console.log(passed);
// [25, 30]`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Filter Objects">
                <pre className="code-block">
{`const students = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 40 },
  { name: "Ahmed", marks: 75 }
];

const passedStudents = students.filter(s => s.marks >= 50);

console.log(passedStudents);
// [{ name: 'Ali', marks: 80 }, { name: 'Ahmed', marks: 75 }]`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Real-World: Filter Products">
                <pre className="code-block">
{`const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true }
];

const available = products.filter(p => p.inStock);

console.log(available.length); // 2`}
                </pre>
              </ExampleCard>
            </div>
          )}
        </div>

        {/* reduce() */}
        <div className="topic-card">
          <div className="topic-title" onClick={() => toggleTopic('reduce')}>
            <h2>8. reduce() - Accumulate Values</h2>
            <span className="expand-icon">{expandedTopic === 'reduce' ? '▼' : '▶'}</span>
          </div>
          {expandedTopic === 'reduce' && (
            <div className="topic-content">
              <p className="concept-intro">
                The reduce() method reduces an array to a single value by accumulating results step by step.
              </p>

              <ExampleCard title="Sum of Numbers">
                <pre className="code-block">
{`const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, n) => sum + n, 0);

console.log(total);
// 10`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Real-World: Shopping Cart Total">
                <pre className="code-block">
{`const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 2000 },
  { name: "Keyboard", price: 3000 }
];

const totalPrice = cart.reduce(
  (total, item) => total + item.price,
  0
);

console.log(totalPrice);
// 55000`}
                </pre>
              </ExampleCard>

              <ExampleCard title="Building an Object from Array">
                <pre className="code-block">
{`const students = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];

const studentMap = students.reduce((acc, s) => {
  acc[s.id] = s.name;
  return acc;
}, {});

console.log(studentMap);
// { '1': 'Ali', '2': 'Sara' }`}
                </pre>
              </ExampleCard>
            </div>
          )}
        </div>

        {/* Quick Reference */}
        <div className="quick-reference">
          <h2>📋 Quick Reference</h2>
          <div className="reference-list">
            <div className="ref-item">
              <strong>Arrow Function:</strong> <span>const add = (a,b) =&gt; a + b</span>
            </div>
            <div className="ref-item">
              <strong>Destructuring:</strong> <span>const {'{name, age}'} = user</span>
            </div>
            <div className="ref-item">
              <strong>Props:</strong> <span>function show({'{name}'})</span>
            </div>
            <div className="ref-item">
              <strong>Spread (...):</strong> <span>['...arr1, ...arr2']</span>
            </div>
            <div className="ref-item">
              <strong>Rest (...):</strong> <span>function sum(...args)</span>
            </div>
            <div className="ref-item">
              <strong>map():</strong> <span>arr.map(x =&gt; x * 2)</span>
            </div>
            <div className="ref-item">
              <strong>filter():</strong> <span>arr.filter(x =&gt; x &gt; 5)</span>
            </div>
            <div className="ref-item">
              <strong>reduce():</strong> <span>arr.reduce((a,b) =&gt; a+b, 0)</span>
            </div>
          </div>
        </div>

        <div className="key-concepts">
          <h2>🎯 Key Takeaways</h2>
          <div className="concept-cards">
            <div className="concept-card">
              <h3>Modern Syntax</h3>
              <p>Arrow functions and destructuring make code cleaner and more readable</p>
            </div>
            <div className="concept-card">
              <h3>Data Transformation</h3>
              <p>map(), filter(), reduce() are powerful tools for array manipulation</p>
            </div>
            <div className="concept-card">
              <h3>Code Reusability</h3>
              <p>Props and spread operator enable flexible, reusable code</p>
            </div>
            <div className="concept-card">
              <h3>Industry Standard</h3>
              <p>These features are essential for modern JavaScript development</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
