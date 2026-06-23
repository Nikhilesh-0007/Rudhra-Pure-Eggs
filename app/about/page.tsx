"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Shield, Leaf } from "lucide-react";

export default function AboutPage() {
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-dark mb-6">
              Rooted in Tradition, Growing with Trust
            </h1>
            <p className="text-lg text-text-dark/70 leading-relaxed">
              We bring the pure essence of village farming directly to your family, ensuring health, nutrition, and uncompromised quality in every product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-white to-[#F6F8F3]">
        {/* Organic Abstract Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Image Column */}
            <div className="w-full lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white group"
              >
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <Image
                  src="/founder3.png"
                  alt="Rama Adapa - Founder of Rudhra Farm"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                />
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4 border-b border-accent/30 pb-1">
                  Meet Our Founder
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-dark mb-8 leading-[1.15]">
                  Committed to <span className="italic text-primary">Purity</span> & Natural Health.
                </h2>

                <div className="relative mb-10 pl-0 md:pl-6">
                  {/* Decorative Quote Mark */}
                  <span className="hidden md:block absolute top-0 left-0 -translate-x-4 -translate-y-6 text-8xl font-heading text-primary/10 leading-none">
                    "
                  </span>
                  <p className="text-xl md:text-2xl text-text-dark/80 leading-relaxed font-light italic">
                    At Rudhra Farm, our mission is to provide fresh, healthy, and naturally farm-raised products directly to families. We are committed to quality, freshness, and customer satisfaction through reliable doorstep delivery.
                  </p>
                </div>

                <div className="border-t border-border-light pt-8 mt-10">
                  <h3 className="text-2xl font-heading font-bold text-text-dark mb-1">Rama Adapa</h3>
                  <p className="text-text-dark/60 font-medium tracking-wide uppercase text-sm">
                    Founder, Rudhra Farm
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-border-light"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-4">Our Mission</h3>
              <p className="text-text-dark/70 leading-relaxed text-lg">
                To provide families with the purest, most nutritious farm products by maintaining traditional farming practices and prioritizing the natural well-being of our livestock.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-border-light"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-text-dark mb-4">Our Vision</h3>
              <p className="text-text-dark/70 leading-relaxed text-lg">
                To be the most trusted name in premium farm-fresh poultry and eggs, setting the gold standard for organic farming in Andhra Pradesh and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farm Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-12">Our Farm Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 border border-border-light">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold text-text-dark mb-3">Natural Environment</h4>
              <p className="text-text-dark/70 text-center">Free-ranging birds in stress-free, open environments.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 border border-border-light">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold text-text-dark mb-3">Zero Compromise</h4>
              <p className="text-text-dark/70 text-center">No artificial growth promoters. Just pure, natural feed.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 border border-border-light">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold text-text-dark mb-3">Customer First</h4>
              <p className="text-text-dark/70 text-center">Dedicated to transparency and superior customer service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
