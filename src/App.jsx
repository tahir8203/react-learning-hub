import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Intro from './pages/Intro';
import AdvancedJavaScript from './pages/AdvancedJavaScript';
import Styling from './pages/Styling';
import FunctionComponents from './pages/FunctionComponents';
import RenderingComponents from './pages/RenderingComponents';
import StateAndProps from './pages/StateAndProps';
import EventHandling from './pages/EventHandling';
import ConditionalRendering from './pages/ConditionalRendering';
import ListsAndKeys from './pages/ListsAndKeys';
import MCQsBank from './pages/MCQsBank';
import ReactForms from './pages/ReactForms';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/advanced" element={<AdvancedJavaScript />} />
        <Route path="/function-components" element={<FunctionComponents />} />
        <Route path="/function-components" element={<FunctionComponents />} />
        <Route path="/rendering" element={<RenderingComponents />} />
        <Route path="/state-props" element={<StateAndProps />} />
        <Route path="/event-handling" element={<EventHandling />} />
        <Route path="/conditional" element={<ConditionalRendering />} />
        <Route path="/lists-keys" element={<ListsAndKeys />} />
        <Route path="/react-forms" element={<ReactForms />} />
        <Route path="/mcqs-bank" element={<MCQsBank />} />
        <Route path="/styling" element={<Styling />} />
      </Routes>
    </Router>
  );
}

export default App;
