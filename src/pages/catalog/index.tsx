import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import { catalogMock } from "../../helpers/catalog-mock";
import { useCategoriesStore } from "../../store/categoriesStore";

type Product = {
  id?: number;
  image?: string;
  name?: string;
  description?: string;
  category: string;
};

const Catalog = () => {
  const { setCategories } = useCategoriesStore();

  const groupedProducts = catalogMock.reduce(
    (acc: Record<string, Product[]>, product: Product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {}
  );

  useEffect(() => {
    setCategories(Object.keys(groupedProducts));
  }, []);

  return (
    <div className="w-full py-8">
      {Object.keys(groupedProducts)
        .sort()
        .map((category) => (
          <div id={category} key={category} className="mb-8 scroll-mt-48">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    {/* <TableHead className="text-center">Produto</TableHead> */}
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-center">Código</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {groupedProducts[category].map((product: Product) => (
                    <TableRow key={product.id} className="text-xs md:text-sm">
                      {/* <TableCell className="w-[15%]">
                      <img
                        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                        alt={product.name}
                        width={64}
                        height={64}
                        className="rounded-md object-cover m-auto"
                      />
                    </TableCell> */}
                      <TableCell className="font-medium">
                        {product.description}
                      </TableCell>
                      <TableCell className="font-medium w-[15%] text-center ">
                        {product.id}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Catalog;
