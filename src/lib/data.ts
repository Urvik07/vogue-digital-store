
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
  product: Product;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Relaxed Fit T-shirt",
    price: 29.99,
    description: "A relaxed-fit cotton t-shirt with a ribbed crew neck and short sleeves. Made from soft, breathable fabric for all-day comfort.",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    category: "tops",
    tags: ["t-shirt", "casual", "essentials"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    inStock: true
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    description: "Slim-fit jeans in washed denim with a regular waist, five pockets, and gently tapered legs. Crafted with just the right amount of stretch for all-day comfort.",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80",
    category: "bottoms",
    tags: ["jeans", "denim", "slim-fit"],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    inStock: true
  },
  {
    id: "3",
    name: "Oversized Hoodie",
    price: 49.99,
    description: "Oversized hoodie in soft sweatshirt fabric with a kangaroo pocket, double-layered hood with drawstring, and ribbing at cuffs and hem.",
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    category: "outerwear",
    tags: ["hoodie", "casual", "cozy"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Beige"],
    inStock: true
  },
  {
    id: "4",
    name: "Linen Blend Blazer",
    price: 89.99,
    description: "Single-breasted blazer in a linen blend with notched lapels, a chest pocket, front welt pockets, and one inner pocket. Lined.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    category: "outerwear",
    tags: ["blazer", "formal", "office"],
    sizes: ["36", "38", "40", "42", "44"],
    colors: ["Navy", "Beige", "Black"],
    inStock: true
  },
  {
    id: "5",
    name: "Cotton Chino Shorts",
    price: 39.99,
    description: "Knee-length chino shorts in cotton twill with a regular waist, zip fly with button, side pockets, and welt back pockets.",
    imageUrl: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "bottoms",
    tags: ["shorts", "casual", "summer"],
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Olive"],
    inStock: true
  },
  {
    id: "6",
    name: "Wool Blend Coat",
    price: 149.99,
    description: "Knee-length coat in a wool blend with notched lapels, buttons at front, flap side pockets, and a single back vent. Lined.",
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "outerwear",
    tags: ["coat", "winter", "formal"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Gray"],
    inStock: true
  },
  {
    id: "7",
    name: "Slim Fit Dress Shirt",
    price: 49.99,
    description: "Slim-fit shirt in premium cotton poplin with a button-down collar, adjustable cuffs, and a gently curved hem.",
    imageUrl: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "tops",
    tags: ["shirt", "formal", "office"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink"],
    inStock: true
  },
  {
    id: "8",
    name: "Leather Sneakers",
    price: 79.99,
    description: "Low-top sneakers in smooth leather with a round toe, lace-up front, and cushioned insoles. Rubber soles.",
    imageUrl: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
    category: "shoes",
    tags: ["sneakers", "casual", "essentials"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray"],
    inStock: true
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "tops", name: "Tops" },
  { id: "bottoms", name: "Bottoms" },
  { id: "outerwear", name: "Outerwear" },
  { id: "shoes", name: "Shoes" }
];

export const featuredProducts = ["1", "3", "4", "8"];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
}
