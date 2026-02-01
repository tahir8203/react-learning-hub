import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export function Home() {
  const topics = [
    {
      id: 1,
      title: 'Function Components',
      path: '/function-components',
      emoji: '⚙️',
      description: 'Learn what function components are and how to create reusable React components.'
    },
    {
      id: 2,
      title: 'Rendering Components',
      path: '/rendering',
      emoji: '🎨',
      description: 'Understand how React renders components and composition patterns.'
    },
    {
      id: 3,
      title: 'State and Props',
      path: '/state-props',
      emoji: '📊',
      description: 'Manage component data with state and pass data through props.'
    },
    {
      id: 4,
      title: 'Event Handling',
      path: '/event-handling',
      emoji: '🖱️',
      description: 'Handle user interactions like clicks, form submissions, and input changes.'
    },
    {
      id: 5,
      title: 'Conditional Rendering',
      path: '/conditional',
      emoji: '❓',
      description: 'Show or hide content based on conditions using if, ternary, and && operators.'
    },
    {
      id: 6,
      title: 'Lists and Keys',
      path: '/lists-keys',
      emoji: '📝',
      description: 'Render arrays of data and understand why keys are important for performance.'
    }
  ];

  return (
    <Layout>
      <div className="home-page">
        <section className="hero">
          <h1>Welcome to React Learning Hub</h1>
          <p>Master React fundamentals through interactive examples and real-world use cases.</p>
        </section>

        <section className="topics-grid">
          <h2>Learn the Essentials</h2>
          <div className="cards-container">
            {topics.map(topic => (
              <Link key={topic.id} to={topic.path} className="topic-card">
                <div className="card-emoji">{topic.emoji}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="card-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="how-to-use">
          <h2>How to Use This Site</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Read the Definition</h4>
              <p>Start with a clear, beginner-friendly explanation of the concept.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>See Code Examples</h4>
              <p>View and run interactive code examples directly in your browser.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Understand the Analogy</h4>
              <p>Learn how the concept relates to real-world scenarios.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <h4>Explore Industry Usage</h4>
              <p>See how this concept is used in real websites and applications.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
