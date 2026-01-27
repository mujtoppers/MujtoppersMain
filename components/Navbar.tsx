"use client";

import { cn } from "@/lib/util";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import close icon

const navItems = [
  { label: "Home", href: "/" },
  { label: "Material", href: "https://material.mujtoppers.in/" },
  // { label: "Order Food", href: "/order" },
  { label: "College Tip", href: "/collegeTip" },
  { label: "Blogs", href: "/blogs"},
  // { label: "Post-Exams & Events", href: "/afterExams" },
  { label: "About Us", href: "https://about.mujtoppers.in/" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest("#mobile-menu")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
        setIsOpen(false); // Close menu after clicking
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full bg-white shadow-md py-3 px-6 flex items-center z-50 border-b border-black transition-all",
        isScrolled && "bg-opacity-80 backdrop-blur-md"
      )}
    >
      {/* Left Side - Logo */}
      <Link href="/" className="text-lg font-bold ml-5">
        MUJTOPPERS
      </Link>

      {/* Right Side - Desktop Nav */}
      <div className="hidden lg:flex gap-x-6 ml-auto mr-5">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="text-black font-bold px-4 py-2 rounded-2xl hover:bg-black hover:text-white transition-all"
            onClick={(e) => handleSmoothScroll(e, item.href)}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden ml-auto mr-5">
        {!isOpen ? (
          <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
        ) : (
          <div className="fixed inset-0 bg-black/50 z-50">
            {/* Menu Content */}
            <div
              id="mobile-menu"
              className="absolute top-0 right-0 bg-white min-h-screen w-2/3 shadow-lg p-5 transition-all"
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-black"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>

              {/* Menu Items */}
              <ul className="flex flex-col gap-6 mt-12 p-5">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block text-lg text-black font-semibold hover:bg-gray-200 p-3 rounded-md"
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
