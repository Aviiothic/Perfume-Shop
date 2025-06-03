import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    alert('Thank you for contacting us!'); // Replace with backend call later
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-lg">
        <p><strong>Email:</strong> contact@perfumeparadise.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Fragrance Street, Bangalore, India</p>
      </div>
    </div>
  );
};

export default Contact;
