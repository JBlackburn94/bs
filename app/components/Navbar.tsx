"use client";
import iconLogo from "@/public/icon-white.png";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { links } from "@/app/constants/constants";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 pt-4 z-50">
      <div className="max-w-site-wrapper mx-auto bg-orange/60 backdrop-blur-lg text-white font-bold flex justify-between items-center px-4 py-3 rounded-xl shadow-lg">
        <div>
          <Image
            src={iconLogo}
            alt="Beauty School logo icon"
            className="max-w-12"
          />
        </div>
        <ul className="flex gap-4 max-lg:hidden">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} target={link.target}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:flex">
          {isMenuOpen ? (
            <X size={32} onClick={handleMenuOpen} />
          ) : (
            <Menu size={32} onClick={handleMenuOpen} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-orange absolute top-0 left-0 h-screen w-screen p-5 overflow-hidden">
          <div>
            <div className="flex justify-end items-center text-white">
              <X onClick={handleMenuOpen} size={32} />
            </div>
            <ul className="flex gap-10 flex-col text-2xl text-white font-bold p-5 mt-5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.target}
                    onClick={handleMenuOpen}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
