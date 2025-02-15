import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 bottom-0 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* First Division */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Eng ber dev</h2>
          <ul>
            <li className="mb-2">Phone: (+252) 613-732602</li>
            <li className="mb-2">Location: Towfiq, yaqshid, Mogadishu, Somalia</li>
            <li className="mb-2">Email: engineerbeerhano@gmail.com</li>
          </ul>
        </div>
        {/* Second Division */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Home</h2>
          <ul>
            <li className="mb-2">Benefits</li>
            <li className="mb-2">Features</li>
            <li className="mb-2">Pricing</li>
            <li className="mb-2">Testimonials</li>
          </ul>
        </div>
        {/* Third Division */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Social Media Links</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/xasan.xhaka.92" className="hover:text-orange-500">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://github.com/eng-beerhano" className="hover:text-orange-500">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://wa.me/613732602" className="hover:text-orange-500">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        {/* Fourth Division */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact</li>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Eng beerhano Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;