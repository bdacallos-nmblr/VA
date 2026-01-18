"use client";

import React, { useEffect, useState } from "react";
import { MAIN_NAV_LINKS } from "../shared/constants/Links";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(window.scrollY > 20);
    }
  }, []);

  return (
    <div
      className={`flex items-center justify-between container fixed left-0 right-0 w-full z-9999 transition-all duration-300  ${
        !isScrolled ? "transparent" : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <h3 className="text-3xl  text-(--text-primary) font-[900]">
        Brian Dacallos
      </h3>

      <div>
        <div className="hidden lg:flex items-center space-x-8 text-lg">
          {MAIN_NAV_LINKS?.map((link) => (
            <Link key={link.id} href={`#${link.path}`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <Link href="#about" className="btn btn-primary">
        Get Started
      </Link>
    </div>
  );
};

export default Navbar;
