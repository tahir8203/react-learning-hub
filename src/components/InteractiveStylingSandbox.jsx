import React, { useState } from 'react';

export default function InteractiveStylingSandbox() {
  const [text, setText] = useState('Live preview');
  const [bg, setBg] = useState('#f3f4f6');
  const [color, setColor] = useState('#111827');
  const [padding, setPadding] = useState(16);
  const [radius, setRadius] = useState(8);

  const previewStyle = {
    background: bg,
    color,
    padding: padding + 'px',
    borderRadius: radius + 'px',
    border: '1px solid rgba(0,0,0,0.06)'
  };

  const codeString = `const style = { background: '${bg}', color: '${color}', padding: '${padding}px', borderRadius: '${radius}px' }\n\nreturn <div style={style}>${text}</div>`;

  return (
    <div className="example-card">
      <h4>Interactive Styling Sandbox</h4>
      <div className="explanation">
        <p>Adjust the controls to change inline styles and copy the JSX output.</p>
      </div>

      <div className="interactive-demo" style={{ gap: 12 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Text" />
          <label>BG <input type="color" value={bg} onChange={e => setBg(e.target.value)} /></label>
          <label>Color <input type="color" value={color} onChange={e => setColor(e.target.value)} /></label>
          <label>Padding <input type="range" min="0" max="60" value={padding} onChange={e => setPadding(e.target.value)} /></label>
          <label>Radius <input type="range" min="0" max="48" value={radius} onChange={e => setRadius(e.target.value)} /></label>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ minWidth: 220, flex: 1 }}>
            <div style={previewStyle}>{text}</div>
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <pre className="code-block"><code>{codeString}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
