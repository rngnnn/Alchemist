import Head from 'next/head';
import { useState } from 'react';
import swr from '../lib/swr';

export default function Contact() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Contact Me</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">
          Other addresses where you can contact me.
        </p>
        <div className="flex justify-center flex-col items-center">
          <div className="max-w-lg w-full">
            {/* Sosyal Medya Bağlantıları */}
            <a target="_blank" rel="norefferer" href="s">
              <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                <i className="fab fa-discord fa-2x" />
                <p className="font-semibold text-xl">@rngn</p>
              </div>
            </a>
            <a target="_blank" rel="norefferer" href="">
              <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                <i className="fab fa-instagram fa-2x" />
                <p className="font-semibold text-xl">@rngn</p>
              </div>
            </a>
            <a target="_blank" rel="norefferer" href="">
              <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                <i className="fab fa-telegram fa-2x" />
                <p className="font-semibold text-xl">@rngn</p>
              </div>
            </a>
            <a href="">
              <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                <i className="fa fa-envelope fa-2x" />
                <p className="font-semibold text-xl">rngnnnclk@gmail.com</p>
              </div>
            </a>
          </div>

          {/* İletişim Formu */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mt-10"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
