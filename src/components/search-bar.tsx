import React from "react";
import { ExpandMore } from "./icons";
import { Button } from "./ui/button";

type Props = {};
export const SearchBar = (props: Props) => {
  return (
    <div className="flex-[0.8] border-2 border-primary flex rounded-md h-[40px]">
      <input
        type="text"
        className="bg-transparent px-2 border-0 outline-none flex-1"
        placeholder="Search"
      />
      <div className="gap-2 flex items-center px-2 border-l-2 border-primary">
        <p className="">All category</p>
        <ExpandMore className="h-[24px] w-[24px] text-gray-500" />
      </div>
      <Button className="rounded-none h-full">Search</Button>
    </div>
  );
};
