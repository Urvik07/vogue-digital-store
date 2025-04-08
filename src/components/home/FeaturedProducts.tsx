
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { products, featuredProducts } from "@/lib/data";

const FeaturedProducts = () => {
  const featured = products.filter(product => 
    featuredProducts.includes(product.id)
  );

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-2xl md:text-3xl font-medium">Featured Products</h2>
          <Link 
            to="/products/all" 
            className="text-sm font-medium flex items-center hover:underline"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
