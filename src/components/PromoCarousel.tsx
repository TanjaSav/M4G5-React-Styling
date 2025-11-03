// Import carousel components from ShadCN UI
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Import card and button components
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"

// Base URL for loading images from public folder
const base = import.meta.env.BASE_URL;

// Type definition for each promo item
type PromoCarousel = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
};

// Array of promotional items
const promos = [
  {
    title: "Get 10% OFF all vegetables",
    description: "Only until the end of the month!",
    image: `${base}img/VegetablesPromo.jpg`,
    bgColor: "#F0F7F1",
    
  },
  {
    title: "Enjoy 20% OFF all pastries!",
    description: "Soft, buttery layers that taste like home.",
    image: `${base}img/PastriesPromo.jpg`,
    bgColor: "#FFF8F8",

  },
  {
    title: "Get 15% OFF all cheeses!",
    description: "Aged, and perfect for every dish.",
    image: `${base}img/CheesesPromo.jpg`,
    bgColor: "#FFFDED",
  },
];

// PromoCarousel component renders a horizontal scrollable carousel of promo cards
export const PromoCarousel = () => {
  return (
     // Carousel container with padding and max width
    <Carousel className="w-full max-w-5xl mx-auto px-2 p-4">

      {/* Carousel content wrapper */}
      <CarouselContent className="">
        {promos.map((promo, index) => (
          <CarouselItem key={index} className="basis-[355px]">

             {/* Card with dynamic background color and horizontal layout */}
            <Card className="hover:scale-[1.01] 
rounded-xl border shadow-sm overflow-hidden flex flex-row h-40 py-0" 
            style={{backgroundColor: promo.bgColor}}>
              
              {/* Left side: text content */}
              <CardContent 
              className="flex flex-col justify-between w-[50%] pr-0 pt-4 pb-4">
                <div>
                  <h3 className="text-base font-semibold leading-tight">
                    {promo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {promo.description}
                  </p>
                </div>
                <Button  className="bg-green-600 text-white hover:bg-green-700 w-fit mt-2 cursor-pointer">
                  Shop Now
                </Button>
              </CardContent>
              {/* Right side: promo image */}
              <img
                src={promo.image}
                alt={promo.title}
                className="h-full w-[50%] object-cover rounded-r-xl"
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Carousel navigation buttons */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
