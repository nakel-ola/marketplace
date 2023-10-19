"use client";

import products from "@/data/products.json";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Header } from "./header";
import { ProductCard } from "./product-card";

export type View = "grid-view" | "list-view";
type Props = {};
export const ProductsSection = (props: Props) => {
  const [view, setView] = useState<View>("list-view");
  return (
    <div className="col-span-10 lg:col-span-8">
      <Header view={view} setView={(value) => setView(value)} />

      <div
        className={cn(
          "grid gap-5 mt-5",
          view === "list-view" ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-3"
        )}
      >
        {products.map((product, index) => (
          <ProductCard key={index} {...product} view={view} />
        ))}
      </div>
    </div>
  );
};
