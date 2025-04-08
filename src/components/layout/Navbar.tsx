
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { categories } from "@/lib/data";

const Navbar = () => {
  const { cartCount, toggleCart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            VOGUE
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/products/all" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Shop All
            </Link>
            {categories.slice(1).map(category => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`} 
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {isAuthenticated ? (
              <div className="hidden md:block relative group">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-3 border-b">
                    <p className="font-medium text-sm">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <div className="p-2">
                    <button 
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            
            <Link to="/wishlist" className="hidden md:block">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative" 
              onClick={toggleCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 animate-fade-in">
          <div className="container space-y-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <input 
                type="text" 
                placeholder="Search products..."
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <Button variant="ghost" size="icon" className="border-l">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            <nav className="flex flex-col">
              <Link 
                to="/products/all" 
                className="px-2 py-3 border-b text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop All
              </Link>
              {categories.slice(1).map(category => (
                <Link 
                  key={category.id}
                  to={`/products/${category.id}`} 
                  className="px-2 py-3 border-b text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col gap-2 pt-2">
              {isAuthenticated ? (
                <div className="px-2 py-2 border-b">
                  <p className="font-medium">Hello, {user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-2 w-full"
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="flex items-center gap-2 px-2 py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Sign In / Register</span>
                </Link>
              )}
              
              <Link 
                to="/wishlist" 
                className="flex items-center gap-2 px-2 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="h-4 w-4" />
                <span>Wishlist</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
