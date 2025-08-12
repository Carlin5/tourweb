import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';
import Contact from './pages/Contact';
import Transfers from './pages/Transfers';
import Admin from './pages/Admin';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Box>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
