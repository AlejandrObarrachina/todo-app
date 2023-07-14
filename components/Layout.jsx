import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col relative min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="flex-1 flex flex-col p-4 px-6">{children}</main>
      <Footer />
    </div>
  );
};
