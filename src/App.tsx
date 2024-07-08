import Layout from "./components/global/layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import PlaceholderImage from "./assets/placeholder.png";

type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
};

function App() {
  const products = [
    {
      id: 12345,
      image: PlaceholderImage,
      name: "Macarrão instantâneo Miojo",
      description: "Adjustable and comfortable office chair",
      category: "Alimentos",
    },
    {
      id: 12346,
      image: PlaceholderImage,
      name: "Arroz",
      description: "Adjustable and comfortable office chair",
      category: "Alimentos",
    },
    {
      id: 12347,
      image: PlaceholderImage,
      name: "Feijão",
      description: "Adjustable and comfortable office chair",
      category: "Alimentos",
    },
    {
      id: 12348,
      image: PlaceholderImage,
      name: "Amaciante de roupas",
      description: "Adjustable and comfortable office chair",
      category: "Material de Limpeza",
    },
    {
      id: 12349,
      image: PlaceholderImage,
      name: "Sabão em pó",
      description: "Adjustable and comfortable office chair",
      category: "Material de Limpeza",
    },
    {
      id: 12350,
      image: PlaceholderImage,
      name: "Desinfetante",
      description: "Adjustable and comfortable office chair",
      category: "Material de Limpeza",
    },
    {
      id: 12351,
      image: PlaceholderImage,
      name: "Água sanitária",
      description: "Adjustable and comfortable office chair",
      category: "Material de Limpeza",
    },
    {
      id: 12352,
      image: PlaceholderImage,
      name: "Whisky",
      description: "Adjustable and comfortable office chair",
      category: "Bebidas",
    },
    {
      id: 12353,
      image: PlaceholderImage,
      name: "Vodka",
      description: "Adjustable and comfortable office chair",
      category: "Bebidas",
    },
    {
      id: 12354,
      image: PlaceholderImage,
      name: "Cerveja",
      description: "Adjustable and comfortable office chair",
      category: "Bebidas",
    },
    {
      id: 12355,
      image: PlaceholderImage,
      name: "Refrigerante",
      description: "Adjustable and comfortable office chair",
      category: "Bebidas",
    },
  ];

  const groupedProducts = products.reduce(
    (acc: Record<string, Product[]>, product: Product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {}
  );
  return (
    <>
      <Layout>
        <div className="w-full py-8">
          {Object.keys(groupedProducts).map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">Produto</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead className="text-center">Código</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {groupedProducts[category].map((product: Product) => (
                      <TableRow key={product.id}>
                        <TableCell className="w-[15%]">
                          <img
                            src={PlaceholderImage}
                            alt={product.name}
                            width={64}
                            height={64}
                            className="rounded-md object-cover m-auto"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {product.name}
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
      </Layout>
    </>
  );
}

export default App;
