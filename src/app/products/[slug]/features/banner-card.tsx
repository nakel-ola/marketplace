import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};
export const BannerCard = (props: Props) => {
  return (
    <div className="bg-primary rounded-md my-5 flex py-3 lg:py-5 px-3  lg:px-8 items-center justify-between">
      <div className="">
        <p className="text-white font-semibold text-2xl">
          Super discount on more than 100 USD
        </p>
        <p className="text-white">
          Have you ever finally just write dummy info
        </p>
      </div>

      <Button className="bg-orange hover:bg-orange/90 text-white whitespace-nowrap">Shop now  </Button>
    </div>
  );
};
