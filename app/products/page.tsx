"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Check } from "lucide-react";
import WhatsAppInquiryModal from "@/components/ui/WhatsAppInquiryModal";

const products = [
  {
    id: "naatu-guddu",
    name: "Naatu Guddu (Country Eggs)",
    description: "Authentic country eggs from free-ranging hens. Rich in protein, healthy fats, and a deep golden yolk full of natural flavor.",
    benefits: ["Rich in Omega-3", "Deep golden yolk", "100% Organic feed", "High protein content"],
    popular: true,
    image: "/natuegg1.png"
  },
  {
    id: "white-eggs",
    name: "Farm Fresh White Eggs",
    description: "Daily fresh white eggs from healthy hens. Perfect for everyday nutrition, baking, and cooking.",
    benefits: ["Collected daily", "Strict quality checks", "Clean and safe", "Affordable nutrition"],
    popular: false,
    image: "/image.png"
  },
  {
    id: "brown-eggs",
    name: "Premium Brown Eggs",
    description: "Nutritious brown eggs laid by specialized breeds. Known for their robust shells and rich taste.",
    benefits: ["Thicker shells", "Rich flavor profile", "Farm fresh daily", "Nutrient-dense"],
    popular: false,
    image: "/nattuegg.png"
  },
  {
    id: "double-yolk",
    name: "Double Yolk Eggs",
    description: "Extra large premium eggs that contain two yolks. A rare treat perfect for a hearty breakfast.",
    benefits: ["Double the protein", "Extra large size", "Great for baking", "Premium quality"],
    popular: false,
    image: "/doubleegg1.png"
  },
  {
    id: "naatu-chicken",
    name: "Fresh Naatu Chicken",
    description: "Naturally raised country chicken with tender meat and authentic taste. Perfect for traditional curries and roasts.",
    benefits: ["No artificial growth", "Tender and flavorful", "Stress-free raising", "Authentic village taste"],
    popular: true,
    image: "/nattuc.png"
  }
];

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrder = (productName: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary pb-20">
      <WhatsAppInquiryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultProduct={selectedProduct}
      />

      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-16 bg-white border-b border-border-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-dark mb-6">
              Our Premium Products
            </h1>
            <p className="text-lg text-text-dark/70 leading-relaxed">
              Explore our range of 100% organic, farm-fresh eggs and poultry. Handpicked and delivered directly to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border-light group flex flex-col"
              >
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full z-10">
                      Most Popular
                    </div>
                  )}
                  {product.image ? (
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <Leaf className="w-16 h-16 text-primary/20" />
                      <span className="absolute bottom-4 right-4 text-primary/20 font-heading font-bold text-xl">{product.name}</span>
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">{product.name}</h3>
                  <p className="text-text-dark/70 mb-6 leading-relaxed min-h-[80px]">
                    {product.description}
                  </p>
                  
                  <div className="mb-8 flex-1">
                    <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, bIdx) => (
                         <li key={bIdx} className="flex items-start text-text-dark/80 text-sm">
                           <Check className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                           {benefit}
                         </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleOrder(product.name)}
                    className="w-full bg-primary text-white hover:bg-primary/90 px-4 py-3.5 rounded-xl font-semibold transition-all shadow-md active:scale-[0.98]"
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
