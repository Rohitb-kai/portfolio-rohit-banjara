import React, { useState, useRef } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const nameInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if form is empty
    if (!formData.name && !formData.email && !formData.subject && !formData.message) {
      nameInputRef.current?.focus();
      return;
    }

    // Check if all fields are filled
    if (formData.name && formData.email && formData.subject && formData.message) {
      // Format the message for WhatsApp
      const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
      
      // Replace with your phone number (include country code)
      const phoneNumber = '919887101736'; // Replace with your number
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      
      // Clear the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div>
       <div className="p-4  xl:pb-56 sm:p-6 lg:p-8 rounded-2xl bg-white dark:bg-dark-100 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className=" text-black text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-urbanist">
                Send Message
              </h3>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      ref={nameInputRef}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors text-sm sm:text-base bg-white border-gray-300 text-gray-900 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>

                    <label
                      htmlFor="email"
                      className="block text-black text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors text-sm sm:text-base bg-white border-gray-300 text-gray-900 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                    <label
                    htmlFor="subject"
                    className="block text-black text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors text-sm sm:text-base bg-white border-gray-300 text-gray-900 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                    <label
                    htmlFor="message"
                    className="block text-black text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-colors resize-none text-sm sm:text-base bg-white border-gray-300 text-gray-900 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20"
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 sm:space-x-3 py-3 sm:py-4 px-4 sm:px-6 rounded-lg bg-purple-800 dark:bg-purple-700 text-white font-semibold hover:bg-purple-900 dark:hover:bg-purple-800 hover:shadow-lg dark:hover:shadow-purple-700/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  tabIndex="0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send w-4 h-4 sm:w-5 sm:h-5"
                    aria-hidden="true"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  <span>Send Message</span>
                </button>
            </form>
          </div>
    </div>
  )
}

export default ContactForm