
import { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { Product } from "@/lib/data";

interface ProductGridProps {
  products: Product[];
  title: string;
}

export const ProductGrid = ({ products, title }: ProductGridProps) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-medium">{title}</h1>
        
        <Button 
          variant="outline"
          size="sm"
          className="flex md:hidden mt-4 gap-2"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filter & Sort
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar filters - desktop only */}
        <div className="hidden md:block md:col-span-3 lg:col-span-2 space-y-6">
          <div>
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filters
            </h3>
            
            {/* Price filter */}
            <div className="border-t pt-3">
              <h4 className="text-sm font-medium mb-2">Price</h4>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  Under $50
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  $50 - $100
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  $100 - $200
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  $200+
                </label>
              </div>
            </div>
            
            {/* Size filter */}
            <div className="border-t mt-4 pt-3">
              <h4 className="text-sm font-medium mb-2">Size</h4>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  XS
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  S
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  M
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  L
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  XL
                </label>
              </div>
            </div>
            
            {/* Color filter */}
            <div className="border-t mt-4 pt-3">
              <h4 className="text-sm font-medium mb-2">Color</h4>
              <div className="flex flex-wrap gap-2">
                <button className="h-6 w-6 rounded-full bg-black border"></button>
                <button className="h-6 w-6 rounded-full bg-white border"></button>
                <button className="h-6 w-6 rounded-full bg-gray-500 border"></button>
                <button className="h-6 w-6 rounded-full bg-blue-800 border"></button>
                <button className="h-6 w-6 rounded-full bg-green-700 border"></button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile filters */}
        {isMobileFilterOpen && (
          <div className="md:hidden mb-6 p-4 border rounded-md bg-gray-50">
            {/* Price filter */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Price Range</h4>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  Under $50
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  $50 - $100
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  $100+
                </label>
              </div>
            </div>
            
            {/* Size filter */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Size</h4>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="min-w-[40px]">XS</Button>
                <Button variant="outline" size="sm" className="min-w-[40px]">S</Button>
                <Button variant="outline" size="sm" className="min-w-[40px]">M</Button>
                <Button variant="outline" size="sm" className="min-w-[40px]">L</Button>
                <Button variant="outline" size="sm" className="min-w-[40px]">XL</Button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button size="sm">Apply Filters</Button>
            </div>
          </div>
        )}
        
        {/* Product grid */}
        <div className="md:col-span-9 lg:col-span-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
