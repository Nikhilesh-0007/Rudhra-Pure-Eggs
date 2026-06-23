"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-text-dark/70 leading-relaxed">
              We're here to help you get the freshest farm products. Reach out to us for orders, inquiries, or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">Contact Information</h2>
                <p className="text-text-dark/70 mb-8 leading-relaxed text-lg">
                  Directly contact our founder <strong className="text-primary">Rama Adapa</strong> or use the quick WhatsApp button to place your orders instantly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start p-6 bg-secondary rounded-2xl border border-border-light">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 mr-4 shadow-sm">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-text-dark mb-1">Phone Numbers</h4>
                    <div className="flex flex-col space-y-1">
                      <a href="tel:8179985484" className="text-text-dark/70 hover:text-primary transition-colors text-lg">8179985484</a>
                      <a href="tel:9502171167" className="text-text-dark/70 hover:text-primary transition-colors text-lg">9502171167</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-secondary rounded-2xl border border-border-light">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 mr-4 shadow-sm">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-text-dark mb-1">Email Address</h4>
                    <a href="mailto:ramaadapa12@gmail.com" className="text-text-dark/70 hover:text-primary transition-colors text-lg">
                      ramaadapa12@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-secondary rounded-2xl border border-border-light">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 mr-4 shadow-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-text-dark mb-1">Farm Location</h4>
                    <p className="text-text-dark/70 text-lg leading-relaxed">
                      Saradhi Road, Vanjarampeta,<br />
                      Rajam, Vizianagaram District,<br />
                      Andhra Pradesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-secondary rounded-2xl border border-border-light">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 mr-4 shadow-sm">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-text-dark mb-1">Business Hours</h4>
                    <p className="text-text-dark/70 text-lg">
                      Monday to Saturday: Open<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map / Quick Contact */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col space-y-8"
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border-light text-center h-full flex flex-col justify-center items-center">
                <h3 className="text-3xl font-heading font-bold text-text-dark mb-4">Fastest Way to Order</h3>
                <p className="text-text-dark/70 mb-8 text-lg">
                  Provide your details below to quickly connect with us on WhatsApp for orders or inquiries.
                </p>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name') as string;
                    const phone = formData.get('phone') as string;
                    if (name && phone) {
                      const url = generateWhatsAppLink({ name, phone, source: "Contact Page Quick Form" });
                      window.open(url, "_blank");
                      (e.target as HTMLFormElement).reset();
                    }
                  }}
                  className="w-full space-y-4 text-left"
                >
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1">Name *</label>
                    <input
                      name="name"
                      required
                      minLength={2}
                      className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-secondary/30"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1">Phone Number *</label>
                    <input
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-secondary/30"
                      placeholder="10-digit Mobile Number"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg flex items-center gap-3 w-full justify-center mt-6"
                  >
                    <Phone className="w-5 h-5" /> Chat on WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
