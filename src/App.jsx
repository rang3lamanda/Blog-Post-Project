import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './Pages/ContactPage';
import BlogPostPage from './Pages/BlogPostPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualPostPage from './Pages/IndividualPostPage';
import { ThemeProvider } from "./components/ThemeContext";
import HomePage from './components/HomePage';

import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<BlogPostPage />} />
          <Route path="/posts/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
