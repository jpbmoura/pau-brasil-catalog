import { Button } from "../../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Input } from "../../ui/input";

const CsvUploader = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Atualizar Catálogo</CardTitle>
        <CardDescription>
          Selecione um arquivo csv no formato correto para atualizar o catálogo.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between gap-2">
        <Input
          accept=".csv"
          type="file"
          name="csvFile"
          className="m-auto text-neutral-500 "
        />
        <Button
          type="submit"
          className="bg-green-500 text-white hover:bg-green-600"
        >
          Enviar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CsvUploader;
