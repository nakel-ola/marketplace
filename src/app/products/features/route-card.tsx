import { ChevronRightIcon } from "lucide-react";
import React from "react";

type Props = {};
export const RouteCard = (props: Props) => {
  return (
    <div className="flex items-center py-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <p className="text-base text-gray-500">{item}</p>
          {index !== items.length -1 ? (
            <ChevronRightIcon className="text-gray-500" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

const items = ["Home", "Clothings", "Men’s wear", "Summer clothing"];
