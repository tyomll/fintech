import { Category } from "@/features/dashboard/lib/types";
import { AddStockBadge } from "@/features/dashboard/ui/dashboard-page/dashboard-stocks/modals";

interface Props {
  categories: Category[];
}

const AddStockCategories: React.FC<Props> = ({ categories }) => (
  <div>
    <span className="text-slate-300 font-medium">Browse by Category</span>
    <div className="flex flex-wrap gap-2 mt-2">
      {categories.map((category) => (
        <AddStockBadge
          key={category.name}
          color={category.color}
          label={category.name}
        />
      ))}
    </div>
  </div>
);

export default AddStockCategories;
