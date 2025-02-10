"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false); // Hide when scrolled more than 100px
      } else {
        setIsVisible(true); // Show when scrolled back to top
      }
    };

    // Attach the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures this effect runs once on mount

  // Clean up event listener
  return (
    <div
      className={cn(
        `fixed top-10 inset-x-0 max-w-2xl mx-10 z-50 bg-transparent lg:w-[50vw] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`,
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Get Started">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/account/signin">Signin</HoveredLink>
            <HoveredLink href="/account/signup">Signup</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact/#mail">Mail us</HoveredLink>
            <HoveredLink href="/contact/#call">Call us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Explore">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Browse Resources</HoveredLink>
            <HoveredLink href="/individual">About Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
