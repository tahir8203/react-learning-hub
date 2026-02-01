import React from 'react';

export function CodeBlock({ code, language = 'jsx' }) {
  return (
    <pre className="code-block">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

export default CodeBlock;
