import React from "react";
import { Facebook, Twitter, Instagram, Linkedin , Phone} from "lucide-react"; // Importing Lucide icons
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">MUJTOPPERS</h2>
          <p className="mt-2 text-gray-400">
            Your College Journey, Simplified: Study, Eat & Chill
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
          <Link
            href="https://material.mujtoppers.in/"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Study Materials
          </Link>
          <Link
            href="/order"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Order Food
          </Link>
          <Link
            href="/examTips"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Exam Tips
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            About Us
          </Link>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300">
            Stay Connected
          </h3>
          <div className="flex space-x-4 mt-3">
            <Link
              href="https://www.instagram.com/mujtoppers/"
              className="text-gray-400 hover:text-pink-500 transition"
              target="_blank"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/muj-toppers/about/?viewAsMember=true"
              className="text-gray-400 hover:text-blue-700 transition"
              target="_blank"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://chat.whatsapp.com/EU9X6uJp8skIqRE1loeSDq"
              target="_blank"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <Phone size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2025 MUJTOPPER. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
