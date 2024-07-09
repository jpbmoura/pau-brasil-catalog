import { useCategoriesStore } from "../../../store/categoriesStore";
import { ScrollArea } from "../../ui/scroll-area";

const CategoriesSheet = () => {
  const { categories } = useCategoriesStore();

  return (
    <div className="flex flex-grow flex-col">
      <ScrollArea className="overflow-y-auto h-[600px]">
        <div className="flex flex-col">
          {categories.sort().map((category, index) => (
            <a href={`#${category}`} key={index}>
              <span className="text-sm font-medium text-green-900 hover:text-green-600">
                {category}
              </span>
            </a>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoriesSheet;
