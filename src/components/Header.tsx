// Importing icons from lucide-react and button component from ShadCN UI
import { Heart, ShoppingCart, Menu} from "lucide-react";
import { Button } from "@/components/ui/button";

// Header component for Broccoli Market
export const Header = () => {
  // Base URL for loading assets from public folder
  const base = import.meta.env.BASE_URL;
  return (
    // Main header container with padding and bottom border
      <header className="flex items-center justify-between p-4 border-b border-b-[#195530] ">
        <img src={`${base}img/Logo_nav_icon.svg`} alt="Broccoli Market" className="h-6" />
    
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Heart className="cursor-pointer w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <ShoppingCart className=" cursor-pointer w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="cursor-pointer w-5 h-5">
          <Menu/>
        </Button>
      </div>
    </header>
  );
};


