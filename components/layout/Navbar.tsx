"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import WhatsAppInquiryModal from "@/components/ui/WhatsAppInquiryModal";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Products", 
    href: "/products",
    dropdown: [
      { name: "Naatu Guddu (Country Eggs)", href: "/products#naatu-guddu" },
      { name: "White Eggs", href: "/products#white-eggs" },
      { name: "Brown Eggs", href: "/products#brown-eggs" },
      { name: "Double Yolk Eggs", href: "/products#double-yolk" },
      { name: "Naatu Chicken", href: "/products#naatu-chicken" }
    ]
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  // Desktop Dropdown
  const [productsHovered, setProductsHovered] = useState(false);
  
  // Mobile Dropdown
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <WhatsAppInquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          isScrolled || !isHomePage || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md border-border-light shadow-sm py-2 md:py-3"
            : "bg-transparent border-transparent py-4 md:py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div 
              className={cn(
                "relative transition-all duration-300",
                isScrolled || !isHomePage || mobileMenuOpen
                  ? "w-8 h-8 md:w-12 md:h-12" 
                  : "w-14 h-14 md:w-20 md:h-20"
              )}
            >
              <Image src="/logo.png" alt="Rudhra Farm Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight">
                Rudhra Farm
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-accent font-semibold -mt-1">
                SNG Groups
              </span>
            </div>
          </Link>

          {/* Desktop Links with Hover Dropdown */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              
              if (link.dropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative py-4"
                    onMouseEnter={() => setProductsHovered(true)}
                    onMouseLeave={() => setProductsHovered(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-1 py-1.5 flex items-center gap-1 text-sm uppercase tracking-wide font-semibold transition-colors duration-200",
                        isActive ? "text-primary" : "text-text-dark hover:text-primary"
                      )}
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: productsHovered ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block text-accent"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-accent"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {productsHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ type: "spring", duration: 0.3 }}
                          className="absolute left-0 mt-2 w-56 rounded-2xl border border-border-light bg-white p-4 shadow-xl backdrop-blur-md z-50 flex flex-col gap-1.5"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setProductsHovered(false)}
                              className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-text-dark hover:bg-primary/5 hover:text-primary transition-all"
                            >
                              <span>{sub.name}</span>
                              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-accent">
                                →
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-1 py-1.5 text-sm uppercase tracking-wide font-semibold transition-colors duration-200",
                    isActive ? "text-primary" : "text-text-dark hover:text-primary"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Desktop CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="ml-4 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Order on WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-text-dark hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-border-light bg-white lg:hidden overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 max-h-[85vh] overflow-y-auto">
                {links.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                  if (link.dropdown) {
                    return (
                      <div key={link.href} className="border-b border-border-light py-3 flex flex-col">
                        <div
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          className={cn(
                            "flex items-center justify-between text-base font-semibold cursor-pointer transition-colors",
                            isActive || mobileProductsOpen ? "text-primary" : "text-text-dark hover:text-primary"
                          )}
                        >
                          <span className="uppercase tracking-wide">{link.name}</span>
                          <ChevronDown 
                            size={18} 
                            className={cn(
                              "transform transition-transform duration-200", 
                              mobileProductsOpen ? "rotate-180 text-accent" : "text-text-dark/50"
                            )} 
                          />
                        </div>
                        
                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 flex flex-col gap-3 mt-3"
                            >
                              <Link
                                href={link.href}
                                className="text-sm font-bold text-accent hover:text-primary"
                              >
                                View All {link.name}
                              </Link>
                              {link.dropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="text-sm font-medium text-text-dark/80 hover:text-primary"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "border-b border-border-light py-4 text-base font-semibold transition-colors duration-200 uppercase tracking-wide",
                        isActive ? "text-primary" : "text-text-dark hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="pt-6 pb-2">
                  <button
                    onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }}
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl font-medium transition-all shadow-sm flex items-center justify-center text-lg"
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
