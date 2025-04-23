import { useState } from 'react';

export default function Contact() {
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
    <section className="py-24 bg-red-900">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* Görsel ve İletişim Bilgileri */}
          <div className="relative w-full flex justify-center items-center flex-col">
  <img
    src="/assets/techs/rngn.png"
    alt="Contact Us Illustration"
    className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto object-contain rounded-xl"
  />

  <div className="mt-6 w-full p-6 bg-red-800 rounded-lg max-w-md text-center">
    <div className="mb-4">
      <h5 className="text-white text-lg font-semibold">Phone</h5>
      <p className="text-gray-100">+31685166208</p>
    </div>
    <div className="mb-4">
      <h5 className="text-white text-lg font-semibold">Email</h5>
      <p className="text-gray-100">rngnnnclk@gmail.com</p>
    </div>
    <div>
      <h5 className="text-white text-lg font-semibold">Address</h5>
      <p className="text-gray-100">Amsterdam</p>
    </div>
  </div>
</div>


          {/* Form Alanı */}
          <div className="bg-red p-8 rounded-2xl shadow-lg">
            <h2 className="text-white text-3xl font-bold mb-6">
              Send Me A Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-indigo-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-white font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
