import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import { Provider } from 'react-redux';
import store from './store.js';
import Folder from './views/Folder.jsx';
import QRCodePage from './views/QRCodePage.jsx';
import Stats from "./views/Stats.jsx";
import AuthPage from './views/AuthPage.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className=" ">
          <Routes>
              <Route path="auth" element={<AuthPage />} />
            <Route path="/" element={<Dashboard />}>
              <Route path="qrcodes" element={<QRCodePage />} />
              <Route path="create" element={<Folder />} />
              <Route path="stats" element={<Stats />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
