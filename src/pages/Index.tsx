
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <FeaturedProducts />
      
      {/* Category blocks */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <div className="relative h-80 overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-medium mb-2">Women's Collection</h3>
                <p className="text-center mb-4">Discover the latest trends for her</p>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  <Link to="/products/all">Shop Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Category 2 */}
            <div className="relative h-80 overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-medium mb-2">Men's Collection</h3>
                <p className="text-center mb-4">Elevate your style with our menswear</p>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  <Link to="/products/all">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Sign up for our newsletter and be the first to know about new collections and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path d="M7 18C7 16.8954 7.89543 16 9 16H15C16.1046 16 17 16.8954 17 18V20H7V18Z" stroke="black" strokeWidth="1.5" />
                  <circle cx="12" cy="10" r="4" stroke="black" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $50</p>
            </div>
            
            <div className="text-center p-6">
              <div className="mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1.5" />
                  <path d="M16.5 9L10.5 15L7.5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day money back guarantee</p>
            </div>
            
            <div className="text-center p-6">
              <div className="mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path d="M12 14V12M12 10H12.01M12 5H8C6.89543 5 6 5.89543 6 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V12C18 10.8954 17.1046 10 16 10H13L10 5H12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your data is protected</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
