
import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleIncrement = () => {
    updateQuantity(item.productId, item.quantity + 1, item.size, item.color);
  };
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.productId, item.quantity - 1, item.size, item.color);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(item.productId, item.size, item.color);
  };
  
  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="h-24 w-20 bg-gray-100 rounded overflow-hidden">
        <img 
          src={item.product.imageUrl}
          alt={item.product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h4 className="font-medium truncate">{item.product.name}</h4>
          <p className="font-medium ml-2">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
        
        <div className="mt-1 flex flex-wrap gap-2 text-sm text-gray-600">
          <p>Size: {item.size}</p>
          <span className="mx-1">•</span>
          <p>Color: {item.color}</p>
        </div>
        
        <div className="mt-3 flex justify-between">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full"
              onClick={handleDecrement}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="mx-2 min-w-[24px] text-center">{item.quantity}</span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-gray-500 hover:text-red-500"
            onClick={handleRemove}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
