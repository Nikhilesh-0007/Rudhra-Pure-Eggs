"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import WhatsAppInquiryModal from "@/components/ui/WhatsAppInquiryModal";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <WhatsAppInquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-border-light shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 md:w-12 md:h-12">
              <Image src="/logo.png" alt="Rudhra Farm Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-primary tracking-tight">
                Rudhra Farm
              </span>
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold -mt-1">
                SNG Groups
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-dark font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Order on WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-dark"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl flex flex-col md:hidden"
              >
                <div className="p-5 flex justify-between items-center border-b border-border-light">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image src="/logo.png" alt="Rudhra Farm Logo" fill className="object-contain" />
                    </div>
                    <span className="font-heading font-bold text-xl text-primary">
                      Rudhra Farm
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-text-dark bg-secondary rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col p-6 space-y-6 flex-1">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-text-dark hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="p-6 border-t border-border-light">
                  <button
                    onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }}
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center justify-center text-lg"
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
