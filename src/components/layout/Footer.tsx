
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VOGUE</h3>
            <p className="text-sm text-gray-600 mb-4">
              Premium clothing for the modern wardrobe. Quality materials, timeless designs.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
            <div className="space-y-3">
              <Link to="/products/all" className="block text-sm text-gray-600 hover:text-black transition-colors">
                All Products
              </Link>
              <Link to="/products/tops" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Tops
              </Link>
              <Link to="/products/bottoms" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Bottoms
              </Link>
              <Link to="/products/outerwear" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Outerwear
              </Link>
              <Link to="/products/shoes" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Shoes
              </Link>
            </div>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Help</h3>
            <div className="space-y-3">
              <Link to="/customer-service" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Customer Service
              </Link>
              <Link to="/track-order" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Track Order
              </Link>
              <Link to="/returns" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/shipping" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Shipping Information
              </Link>
              <Link to="/contact" className="block text-sm text-gray-600 hover:text-black transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} VOGUE. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-xs text-gray-600 hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-600 hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-xs text-gray-600 hover:text-black transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
