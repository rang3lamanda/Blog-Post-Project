import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}, thank you for submitting your contact information!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <h2>Have questions or feedback? Reach out to us!</h2>

      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:contact@blog.com">contact@blog.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+11234567890">(123) 456-7890</a></p>
        <p><strong>Address:</strong> 123 Blog Street, City, Country</p>
      </div>

      <form onSubmit={handleSubmit}>
        <h2><strong>Send us a message:</strong></h2>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;