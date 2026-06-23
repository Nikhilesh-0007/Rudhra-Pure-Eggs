"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Truck, Leaf, ShieldCheck, ArrowRight, Star, ChevronDown } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppInquiryModal from "@/components/ui/WhatsAppInquiryModal";

// Sub-components for Home Page
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrder = (productName = "") => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <WhatsAppInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProduct={selectedProduct}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Zooming background image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.12, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src="/heroimg.png"
              alt="Rudhra Farm Background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Soft gradient overlay blending the text directly into the background image */}
        <div className="absolute inset-0 z-0 bg-white/60 md:bg-transparent md:bg-gradient-to-r md:from-white/85 md:via-white/60 md:to-transparent flex items-center justify-start py-12 md:py-24"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full pt-36 md:pt-32">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto md:mx-0 max-w-2xl text-center md:text-left"
          >
            <motion.span
              variants={item}
              className="inline-block rounded-full bg-primary/10 text-primary border border-primary/20 px-5 py-2 text-xs font-bold tracking-widest uppercase shadow-sm mb-6"
            >
              100% Organic & Farm Fresh
            </motion.span>

            <motion.h1
              variants={item}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-text-dark leading-[1.2] tracking-tight mb-6"
            >
              Pure Country Eggs, Delivered <br className="hidden sm:block" />
              <span className="text-primary italic">Fresh.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto md:mx-0 max-w-xl text-base sm:text-lg leading-relaxed text-text-dark/90 mb-8"
            >
              Experience the true taste of nature with our free-range poultry and organic eggs straight from Rudhra Farm.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setModalOpen(true)}
                className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-primary/90 transition-colors"
              >
                Order on WhatsApp
              </motion.button>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-primary text-primary px-8 py-3.5 text-base font-semibold hover:bg-primary/5 transition-colors"
                >
                  View Products
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-primary/70"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">Why Choose Rudhra Farm?</h2>
            <p className="text-text-dark/70 max-w-2xl mx-auto">We provide our services wherever our customers need them.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Pure Naatu Guddu", desc: "Authentic country eggs packed with nutrition and natural taste." },
              { icon: Leaf, title: "Healthy & Natural", desc: "Our birds are raised in a natural, stress-free environment." },
              { icon: CheckCircle2, title: "Farm Fresh Daily", desc: "Collected daily to ensure you receive the freshest products." },
              { icon: Truck, title: "Doorstep Delivery", desc: "Convenient home delivery in Rajam and surrounding areas." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-secondary/50 rounded-2xl p-8 hover:bg-secondary transition-colors border border-border-light/50 hover:shadow-md group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-text-dark/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Our Offerings</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-dark mb-4">Premium Farm Products</h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
              See All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Naatu Guddu (Country Eggs)", desc: "Rich, flavorful country eggs from free-ranging hens.", image: "/natuegg1.png" },
              { name: "Double Yolk Eggs", desc: "Premium large eggs with double the goodness.", image: "/doubleegg1.png" },
              { name: "Naatu Chicken", desc: "Tender, naturally raised country chicken.", image: "/nattuc.png" }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, type: "spring", stiffness: 100 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border-light group"
              >
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">{product.name}</h3>
                  <p className="text-text-dark/70 mb-6 line-clamp-2">{product.desc}</p>
                  <button
                    onClick={() => handleOrder(product.name)}
                    className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-3 rounded-xl font-semibold transition-all"
                  >
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 text-primary font-semibold">
              See All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-2xl group">
                <Image
                  src="/farm.png"
                  alt="Rudhra Farm"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 80 }}
            >
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-dark mb-6">Rooted in Tradition, Growing with Trust.</h2>
              <p className="text-lg text-text-dark/70 mb-6 leading-relaxed">
                Founded by <strong className="text-text-dark">Rama Adapa</strong>, Rudhra Farm was born out of a passion for bringing authentic, unadulterated farm products back to our dining tables.
              </p>
              <p className="text-lg text-text-dark/70 mb-8 leading-relaxed">
                Operating under SNG Groups, our commitment to quality ensures that every egg and every bird meets the highest standards of natural farming. We believe in transparency, health, and delivering the absolute best to your family.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b-2 border-primary text-primary font-semibold pb-1 hover:text-primary/80 transition-colors text-lg"
              >
                Read Our Full Story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <motion.div
          className="container mx-auto px-4 md:px-6 relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-dark mb-6">
            Ready to Order Fresh Farm Eggs?
          </h2>
          <p className="text-xl text-text-dark/80 mb-10 max-w-2xl mx-auto">
            Experience the premium quality of Rudhra Farm products. Get in touch with us on WhatsApp to place your order today.
          </p>
          <button
            onClick={() => handleOrder()}
            className="bg-primary text-white hover:bg-primary/90 px-10 py-5 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl flex items-center gap-3 mx-auto"
          >
            Contact on WhatsApp
          </button>
        </motion.div>
      </section>
    </div>
  );
}
