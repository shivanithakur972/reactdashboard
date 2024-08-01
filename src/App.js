import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/header/Header';
function App() {
  return (
    <div className="Appss">
    <BrowserRouter>
    <Header />
    <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
