import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { ChatBubbleIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
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

          <Popover>
            <PopoverTrigger className="hidden md:inline-flex">
              <a
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Fale Conosco!
              </a>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-48">
              <div>
                <span className="group">
                  <a
                    href="#"
                    className="flex flex-row items-center gap-3 w-full py-2 px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                  >
                    <ChatBubbleIcon className="size-5 group-hover:text-green-600 transition-colors" />
                    Whatsapp
                  </a>
                </span>
                <span className="group">
                  <a
                    href="#"
                    className="flex flex-row items-center gap-3 w-full py-2 px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                  >
                    <InstagramLogoIcon className="size-5 group-hover:text-purple-500 transition-colors" />
                    Instagram
                  </a>
                </span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
