import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
       <div className="logo-container">
        <img src="/Logo.jpg" alt="Space Blog Logo" className="logo" />
         <h1>Space Blog</h1>
         </div>
        
       <Navbar />
    </header>
  );
};

export default Header;  