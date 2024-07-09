import React from "react";
import Header from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <div className="max-w-3xl w-full m-auto px-10 md:px-0 ">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
