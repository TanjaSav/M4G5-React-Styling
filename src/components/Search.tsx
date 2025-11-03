// Importing the search icon from lucide-react and the Input component from ShadCN UI
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

// Search component renders a styled input field with an embedded icon
export const Search = () => {
  return (
    // Outer container with padding
    <div className="p-4 pt-6 pb-6">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 " />
        {/* Input field with left padding to make space for the icon */}
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-9 bg-white"
        />
      </div>
    </div>
  );
};
