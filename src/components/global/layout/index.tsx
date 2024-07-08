import React from "react";
import Header from "../header";
import Footer from "../footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="max-w-3xl w-full m-auto px-10 md:px-0 md:pt-10">
        <main>{children}</main>
      </div>
      <Footer />
      {/* <Button className="h-12 bg-slate-600 fixed right-4 bottom-4">
        <ShoppingBag className="w-full h-full" />
      </Button> */}
    </>
  );
};

export default Layout;
