"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
});

type FormData = z.infer<typeof formSchema>;

interface WhatsAppInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function WhatsAppInquiryModal({ isOpen, onClose, defaultProduct = "" }: WhatsAppInquiryModalProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const url = generateWhatsAppLink({
      name: data.name,
      phone: data.phone,
      product: defaultProduct || undefined,
      source: "Website Inquiry Form",
    });
    window.open(url, "_blank");
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between shrink-0">
              <h3 className="text-xl font-heading font-bold text-white">
                {defaultProduct ? `Order ${defaultProduct}` : "Order Inquiry"}
              </h3>
              <button 
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 overflow-y-auto">
              <p className="text-text-dark/70 mb-6">
                Please provide your contact details to proceed with your WhatsApp order.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">Name *</label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-2.5 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your Full Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">Phone Number *</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-2.5 rounded-lg border border-border-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="10-digit Mobile Number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] px-4 py-3 rounded-xl font-bold transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
                  >
                    Proceed to WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
