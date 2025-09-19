import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-[url('/assets/city-skiline.png')] bottom-0 top-0 bg-no-repeat text-white lg:bg-cover bg-bottom pt-12 bg-[#0B2653]">
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
               <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/assets/propainting_construction_web_logo.png" width={100} height={60} alt="web-logo" />

          </Link>
            </div>
            <p className="text-white/80 mb-6 md:text-base text-sm">
              Professional construction and painting services with over 25 years of experience. 
              Quality craftsmanship and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-smooth">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-smooth">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-smooth">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-smooth">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-white/80 md:text-base text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-smooth">General Construction</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Professional Painting</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Home Renovation</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Commercial Projects</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Repairs & Maintenance</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Specialty Finishes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/80 md:text-base text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Testimonials</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Free Quote</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-smooth">Emergency Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-white/80 md:text-base text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+9175398168</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>mrh_nyc@yahoo.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <span>4017, ave D, Brooklyn <br />New York, 11203</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold mb-2">Licensed & Insured</h5>
              <p className="text-sm text-white/70">
                License #: CON-2024-12345<br />
                Fully insured for your protection
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 md:text-base text-sm">
          <p>&copy; 2025 ProPaintingConstruction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;