/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/androidlogo.png";
import { redirect } from "next/navigation";

export function Navbar() {
  const { toast } = useToast();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (linkName: string) => {
    setMobileMenuOpen(false);
    if (linkName !== "Home") {
      toast({
        title: "Coming Soon!",
        description: "It will be updated soon.",
      });
      redirect(`#${linkName}`);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm mb-10 ${
        isMobileMenuOpen ? "bg-n-8 opacity-100" : "bg-n-8/90"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 lg:px-7 xl:px-10">
        {/* Logo */}
        <Link href="/" className="font-bold text-[#7aff76] flex items-center">
          <Image src={logo} alt="logo" width={52} height={52} />
          <span className="text-2xl md:hidden lg:flex lg:text-3xl xl:text-4xl">
            Android Club
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="#home" className="nav-link">
            Home
          </Link>
          <Link href="#sponsors" className="nav-link">
            Sponsors
          </Link>
          <Link href="#" onClick={() => handleNavClick("Schedule")} className="nav-link">
            Schedule
          </Link>
          <Link href="#" onClick={() => handleNavClick("Stories")} className="nav-link">
            Stories
          </Link>
        </nav>

        {/* Register Button */}
        <Button
          size="lg"
          className="hidden bg-pink-500 hover:bg-pink-600 md:inline-flex mr-4"
          onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
        >
          Register Today
        </Button>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobileMenu} className="lg:hidden">
          <svg height={36} width={36} viewBox="0 0 24 24" fill="none">
            <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path>
            <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path>
            <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-n-8 shadow-lg">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link href="#home" onClick={() => handleNavClick("Home")} className="nav-link">
              Home
            </Link>
            <Link href="#sponsors" onClick={() => setMobileMenuOpen(false)} className="nav-link">
              Sponsors
            </Link>
            <Link href="#" onClick={() => handleNavClick("Schedule")} className="nav-link">
              Schedule
            </Link>
            <Link href="#" onClick={() => handleNavClick("Stories")} className="nav-link">
              Stories
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// CSS Styles (Tailwind Utility Class)
// const navLinkStyles = `block relative font-code text-sm uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-2 md:py-8 lg:text-sm lg:font-bold lg:leading-3 xl:px-5`;

export default Navbar;
