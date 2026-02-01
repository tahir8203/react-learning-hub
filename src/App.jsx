import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FunctionComponents from './pages/FunctionComponents';
import RenderingComponents from './pages/RenderingComponents';
import StateAndProps from './pages/StateAndProps';
import EventHandling from './pages/EventHandling';
import ConditionalRendering from './pages/ConditionalRendering';
import ListsAndKeys from './pages/ListsAndKeys';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/function-components" element={<FunctionComponents />} />
        <Route path="/rendering" element={<RenderingComponents />} />
        <Route path="/state-props" element={<StateAndProps />} />
        <Route path="/event-handling" element={<EventHandling />} />
        <Route path="/conditional" element={<ConditionalRendering />} />
        <Route path="/lists-keys" element={<ListsAndKeys />} />
      </Routes>
    </Router>
  );
}

export default App;
