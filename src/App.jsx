import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import QRCodePage from './views/QRCodePage.jsx'; // Import your other views/components as needed

const App = () => {
  return (
    <Router>
      <div className="flex w-screen">
        <Sidebar className="fixed "/>
        <Routes>
          <Route path="/qrcodes" element={<QRCodePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
