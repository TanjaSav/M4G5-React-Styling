// Base URL for loading images from public folder
const base = import.meta.env.BASE_URL;

// Type definition for each category item
type Category = {
  label: string;
  src?: string;
};

// Array of category objects with labels and image sources
const categories: Category[] = [
  { label: "Dairy", src: `${base}img/Dairy_img.png` },
  { label: "Frozen Foods", src: `${base}img/FrozenFoods_img.png` },
  { label: "Beverages", src: `${base}img/Beverages_img.png` },
  { label: "Bakery", src: `${base}img/Bakery_img.png` },
  { label: "Snacks & Sweets", src: `${base}img/Snacks&Sweets_img.png` },
  { label: "Produce Category", src: `${base}img/Cleaning.png` },
  { label: "Pantry Staples", src: `${base}img/PantryStaples_img.png` },
  { label: "Meat & Seafood", src: `${base}img/MeatAnd Fish_img.png` },
  { label: "Fresh Produce", src: `${base}img/FreshProduce_img.png` },
  { label: "Personal Care", src: `${base}img/PersonalCare_img.png` },
];


// Component that renders the category grid
export const Categories = () => {
  return (
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <div className="grid grid-cols-2 gap-3 ">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex items-center gap-2 p-3 border rounded-md hover:bg-[#F0F7F1] cursor-pointer bg-[#F5EDDC]"
          >
             <img
              src={cat.src}
              className="w-6 h-6 object-cover rounded"
            />
            <span className="text-[#2D2C2D] font-medium ">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
