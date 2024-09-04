// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/one" element={<ContentOne />} />
          <Route path="/two" element={<ContentTwo />} />
          <Route path="/three" element={<ContentThree />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
