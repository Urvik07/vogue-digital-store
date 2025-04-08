
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Default to first available size and color for quick add
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product.id, 1, defaultSize, defaultColor);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
          <Button 
            variant="secondary"
            size="icon"
            className="rounded-full"
            onClick={(e) => {
              e.preventDefault();
              // Wishlist functionality would go here
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="secondary"
            size="icon"
            className="rounded-full"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <h3 className="font-medium mb-1">{product.name}</h3>
      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
    </Link>
  );
};
