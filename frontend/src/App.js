import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/AboutScreen';
import ServicesScreen from './pages/ServicesScreen';
import ContactScreen from './pages/ContactScreen';
import TeamScreen from './pages/TeamScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import BookingScreen from './pages/BookingScreen';
import PriceScreen from './pages/PriceScreen';
import FaqScreen from './pages/FaqScreen';
import Gallery from './pages/Gallery';
import AdminDashboard from './pages/AdminDashboard';


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/pricing" element={<PriceScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/team" element={<TeamScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/book" element={<BookingScreen />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/faq" element={<FaqScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
