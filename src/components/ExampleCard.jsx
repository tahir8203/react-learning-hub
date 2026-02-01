import React from 'react';

export function ExampleCard({ title, children }) {
  return (
    <div className="example-card">
      <h4>{title}</h4>
      <div className="example-content">
        {children}
      </div>
    </div>
  );
}

export default ExampleCard;
