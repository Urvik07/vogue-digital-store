
import { Link } from "react-router-dom";
import { ArrowLeft, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-medium mb-6">Your Cart</h1>
        <p className="text-gray-600 mb-8">Your cart is currently empty</p>
        <Button asChild>
          <Link to="/products/all">Continue Shopping</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium">Your Cart ({cartItems.length})</h1>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-red-600"
          onClick={clearCart}
        >
          <Trash className="h-4 w-4 mr-1" /> Clear Cart
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            {cartItems.map((item) => (
              <CartItem key={`${item.productId}-${item.size}-${item.color}`} item={item} />
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-4">
          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>Calculated at checkout</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <Button asChild className="w-full mt-4">
                <Link to="/checkout">Checkout</Link>
              </Button>
              
              <div className="text-center mt-4">
                <Link 
                  to="/products/all"
                  className="text-sm flex items-center justify-center hover:underline"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
