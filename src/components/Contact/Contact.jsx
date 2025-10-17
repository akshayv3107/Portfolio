import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qb7joqb",   
        "template_5cjqk2s",  
        form.current,
        "CYfVRj3Av_aGVfOFU",
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", { theme: "dark" });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", { theme: "dark" });
        }
      );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-20 font-sans"
    >
       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-[clamp(1rem,1.2vw,1.125rem)] font-medium">
          I’d love to hear from you — reach out for any opportunities or questions!
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-xl border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me 🚀
        </h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
