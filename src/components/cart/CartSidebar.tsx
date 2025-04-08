
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/cart/CartItem";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export const CartSidebar = () => {
  const { isCartOpen, closeCart, cartItems, cartTotal } = useCart();
  
  if (!isCartOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={closeCart}
      ></div>
      
      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-96 max-w-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-medium">Your Cart ({cartItems.length})</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 2H17.5L21.5 6V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H4.5C3.96957 21 3.46086 20.7893 3.08579 20.4142C2.71071 20.0391 2.5 19.5304 2.5 19V6L6.5 2Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 10C16.5 11.0609 16.0786 12.0783 15.3284 12.8284C14.5783 13.5786 13.5609 14 12.5 14C11.4391 14 10.4217 13.5786 9.67157 12.8284C8.92143 12.0783 8.5 11.0609 8.5 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 6H21.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Button asChild onClick={closeCart}>
                <Link to="/products/all">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-1">
              {cartItems.map((item) => (
                <CartItem key={`${item.productId}-${item.size}-${item.color}`} item={item} />
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <Button asChild className="w-full mt-4" onClick={closeCart}>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
