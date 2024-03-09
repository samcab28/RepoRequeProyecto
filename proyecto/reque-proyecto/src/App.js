import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LinkOneScreen from './components/LinkOneScreen';
import LinkTwoScreen from './components/LinkTwoScreen';
import LinkThreeScreen from './components/LinkThreeScreen';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/link1" element={<LinkOneScreen />} />
          <Route path="/link2" element={<LinkTwoScreen />} />
          <Route path="/link3" element={<LinkThreeScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
