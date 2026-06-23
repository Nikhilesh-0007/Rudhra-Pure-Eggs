import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <Link href="/" className="flex flex-col mb-4 inline-block">
              <span className="font-heading font-bold text-3xl tracking-tight text-white">
                Rudhra Farm
              </span>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                SNG Groups
              </span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Premium quality country eggs and farm-raised poultry delivered fresh to your doorstep. Pure, natural, and healthy.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-sm font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-sm font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-sm font-bold">
                TW
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-accent transition-colors">Our Products</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6 text-white">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-white/80 hover:text-accent transition-colors">Naatu Guddu</Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-accent transition-colors">White & Brown Eggs</Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-accent transition-colors">Double Yolk Eggs</Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-accent transition-colors">Naatu Chicken</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-xl mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80 leading-snug">
                  Saradhi Road, Vanjarampeta,<br />
                  Rajam, Vizianagaram District,<br />
                  Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col text-white/80">
                  <span>9346580439</span>
                  <span>9502171167</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:ramaadapa12@gmail.com" className="text-white/80 hover:text-accent transition-colors">
                  ramaadapa12@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-white/80">
                  Mon - Sat: Open<br />
                  Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>&copy; {currentYear} Rudhra Farm (SNG Groups). All rights reserved.</p>
          <p className="mt-2 md:mt-0">Founder: Rama Adapa</p>
        </div>
      </div>
    </footer>
  );
}
