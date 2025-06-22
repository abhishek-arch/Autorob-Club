import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="h-fit relative bg-gradient-to-r from-blue-900 via-gray-900 to-black pt-[20px] pb-[20px] text-center mt-12">
      <h3 className="text-3xl font-bold text-blue-400">Contact Us</h3>
      <p className="text-gray-400 text-lg mt-2">
        Stay connected with us on social media
      </p>
      <div className="flex justify-center gap-8 mt-6">
        <a
          href="https://www.linkedin.com/company/autorob-club-hbtu-kanpur/posts/?feedView=all"
          className="text-blue-400 hover:text-white text-4xl transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/autorob_hbtu/"
          className="text-pink-400 hover:text-white text-4xl transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-gray-500 text-sm mt-8">
        © 2025 AutoRob Club. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;