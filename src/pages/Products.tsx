
import { useParams } from "react-router-dom";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProductsByCategory, categories } from "@/lib/data";

const Products = () => {
  const { category = "all" } = useParams<{ category: string }>();
  
  const products = getProductsByCategory(category);
  
  const categoryName = categories.find(c => c.id === category)?.name || "All Products";
  
  return <ProductGrid products={products} title={categoryName} />;
};

export default Products;
