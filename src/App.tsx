// Importing reusable UI components
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Categories } from "./components/Categories";
import { PromoCarousel} from "./components/PromoCarousel";

// Main application component
function App() {

  return (
    <>
    {/* Root container with max width for mobile layout */}
      <div className="max-w-md mx-auto bg-[#FFFFFB] h-vh overflow-hidden">
        <Header />
        <Search />
        <PromoCarousel/>
        <Categories />
      </div>
    </>
  )
}
// Exporting App component as default entry point
export default App;
