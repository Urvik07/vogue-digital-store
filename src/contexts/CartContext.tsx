
import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, Product, getProductById } from "@/lib/data";
import { useToast } from "@/components/ui/use-toast";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity: number, size: string, color: string) => void;
  removeFromCart: (productId: string, size?: string, color?: string) => void;
  updateQuantity: (productId: string, quantity: number, size: string, color: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);
  const openCart = () => setIsCartOpen(true);

  const addToCart = (productId: string, quantity: number, size: string, color: string) => {
    const product = getProductById(productId);
    if (!product) return;

    const existingItemIndex = cartItems.findIndex(
      item => item.productId === productId && item.size === size && item.color === color
    );

    if (existingItemIndex > -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { 
        productId, 
        quantity, 
        size, 
        color,
        product
      }]);
    }

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
    
    openCart();
  };

  const removeFromCart = (productId: string, size?: string, color?: string) => {
    if (size && color) {
      setCartItems(cartItems.filter(
        item => !(item.productId === productId && item.size === size && item.color === color)
      ));
    } else {
      setCartItems(cartItems.filter(item => item.productId !== productId));
    }
  };

  const updateQuantity = (productId: string, quantity: number, size: string, color: string) => {
    const updatedItems = cartItems.map(item => {
      if (item.productId === productId && item.size === size && item.color === color) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      toggleCart,
      closeCart,
      openCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
