import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './Pages/ContactPage';
import BlogPostPage from './Pages/BlogPostPage';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndividualPostPage from './Pages/IndividualPostPage';
import { ThemeProvider } from "./components/ThemeContext";
import { AuthProvider } from './components/AuthProvider';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<BlogPostPage />} />
          <Route path="/login" element ={<Login />}/>
          <Route path="/posts" element={<BlogPostPage />} />
          <Route path="/posts/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
