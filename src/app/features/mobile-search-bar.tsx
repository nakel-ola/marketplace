import { Search } from "@/components/icons";
import React from "react";

type Props = {};
export const MobileSearchBar = (props: Props) => {
  return (
    <div className="lg:hidden mx-5 my-2 px-2 py-1.5 border-[1.5px] border-gray-300 bg-gray-100 rounded-md flex items-center gap-2">
      <Search className="w-7 h-7 text-gray-500" />
      <input
        type="text"
        className="bg-transparent border-0 outline-none text-lg text-gray-500 w-full"
        placeholder="Search"
      />
    </div>
  );
};
