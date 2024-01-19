import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInputForm from './components/UserInputForm';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<UserInputForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;