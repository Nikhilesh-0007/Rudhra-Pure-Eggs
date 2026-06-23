"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppInquiryModal from "./WhatsAppInquiryModal";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WhatsAppInquiryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group border-none outline-none cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 duration-1000"></span>
          <MessageCircle className="w-7 h-7 relative z-10" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-text-dark text-sm font-medium rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap pointer-events-none">
            Order on WhatsApp
          </span>
        </button>
      </motion.div>
    </>
  );
}
