import React, { Fragment } from "react";
import { CTASection, Footer, Header } from "../features";
import { FilterSection, ProductsSection, RouteCard } from "./features";

export default function ListView() {
  return (
    <Fragment>
      <Header />
      <main className="w-[calc(100%-10px)] lg:w-[calc(100%-80px)] page-center">
        <RouteCard />

        <div className="grid grid-cols-10 gap-5 mt-2">
          <FilterSection />
          <ProductsSection />
        </div>

        <CTASection />
      </main>

      <Footer />
    </Fragment>
  );
}
