
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { getProductById, products } from "@/lib/data";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  
  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-lg mb-4">Product not found</p>
        <Button asChild>
          <Link to="/products/all">Back to Shop</Link>
        </Button>
      </div>
    );
  }
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product.id, quantity, selectedSize, selectedColor);
  };

  // Find similar products
  const similarProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  
  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          to="/products/all" 
          className="flex items-center text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
          <img 
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-medium mb-2">{product.name}</h1>
          <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Size</h3>
              <Link to="/size-guide" className="text-sm underline">Size Guide</Link>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  className={`h-10 min-w-[40px] px-3 border rounded-md transition-all ${
                    selectedSize === size 
                      ? "border-black bg-black text-white" 
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map(color => (
                <button 
                  key={color}
                  className={`relative h-10 px-3 border rounded-md transition-all ${
                    selectedColor === color 
                      ? "border-black" 
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                  {selectedColor === color && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                className="h-10 w-10 border rounded-l-md flex items-center justify-center"
                onClick={handleDecrement}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              
              <div className="h-10 w-12 border-t border-b flex items-center justify-center">
                {quantity}
              </div>
              
              <button 
                className="h-10 w-10 border rounded-r-md flex items-center justify-center"
                onClick={handleIncrement}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="flex-1 gap-2" 
              size="lg"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="flex-1 gap-2"
            >
              <Heart className="h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
      
      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="text-xl font-medium mb-6">You might also like</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square bg-gray-100 rounded-md overflow-hidden mb-3">
                  <img 
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                <p className="font-semibold">${product.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
