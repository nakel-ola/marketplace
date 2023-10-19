import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};
export const MobileMenu = (props: Props) => {
  return (
    <div className="flex lg:hidden gap-3 px-5 py-2 overflow-x-scroll scrollbar-hidden">
      {items.map((item, index) => (
        <Button
          key={index}
          className="bg-gray-200 hover:bg-gray-200/90 shadow-none text-primary whitespace-nowrap"
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

const items = ["All category", "Gadgets", "Clothes", "Accessories"];
