
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-[70vh]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative container h-full flex flex-col justify-center items-start text-white">
        <h1 className="text-4xl md:text-6xl font-medium mb-4">
          Spring Collection <br /> 2025
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-md">
          Discover the latest trends and timeless essentials for your wardrobe.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link to="/products/all">Shop Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link to="/lookbook">View Lookbook</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
