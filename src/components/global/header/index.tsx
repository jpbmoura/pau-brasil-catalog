import Logo from "../../../assets/logo.png";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import CategoriesSheet from "../../shared/categories-sheet";

const Header = () => {
  const socialLink =
    "https://linktr.ee/paubrasilatacado?fbclid=PAZXh0bgNhZW0CMTEAAaaltjuhg1OEzAamOSwNgEJ9HTcch7aXqXklYSCGgu4D8YLESZQHe35RH0s_aem_Nsjoj3Eg7HDT-Czv1ytacw";

  return (
    <header
      className={`py-4 border-b dark:border-neutral-700 bg-white sticky top-0 z-10 shadow-md px-10 md:px-0`}
    >
      <div className="max-w-3xl m-auto flex items-center justify-between w-full">
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo da Pau-Brasil" className="w-36" />
        </a>

        <div className="space-x-2">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline">Categorias</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Nossas Categorias</SheetTitle>
                <SheetDescription className="h-full">
                  <div className="h-full">
                    <CategoriesSheet />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <a
            target="_blank"
            href={socialLink}
            className=" md:hidden inline-flex h-9 items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Fale Conosco!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
