// src/pages/Contact.jsx
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="text-gray-300">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      
      <p className="mb-4">
        For feedback or support, please fill out 
        <a href="https://forms.gle/yourform" className="text-blue-400 underline ml-1" target="_blank" rel="noopener noreferrer">
          this form
        </a>.
      </p>

      <div className="space-y-3">
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-blue-400" />
          <a href="mailto:adarsh@example.com" className="hover:text-blue-300">adarsh@example.com</a>
        </p>

        <p className="flex items-center gap-2">
          <FaPhone className="text-green-400" />
          <a href="tel:+919876543210" className="hover:text-green-300">+91 98765 43210</a>
        </p>

        <p className="flex items-center gap-2">
          <FaTwitter className="text-sky-400" />
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
            @yourhandle
          </a>
        </p>

        <p className="flex items-center gap-2">
          <FaLinkedin className="text-blue-500" />
          <a href="https://linkedin.com/in/adarshbadi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            linkedin.com/in/adarshbadi
          </a>
        </p>

        <p className="flex items-center gap-2">
          <FaInstagram className="text-pink-400" />
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
            @yourhandle
          </a>
        </p>
      </div>
    </div>
  )
}
