"use client";
import { GridView, ListView } from "@/components/icons";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React from "react";
import { View } from ".";

type Props = {
  view: View;
  setView: (value: View) => void;
};
export const Header = (props: Props) => {
  const { setView, view } = props;
  return (
    <div className="bg-white rounded-md border border-gray-300 px-3 py-2 flex items-center justify-between">
      <p className="text-base text-dark hidden lg:block">
        12,911 items in <b>Mobile accessory</b>
      </p>

      <div className="flex gap-5 justify-between w-full lg:w-fit">
        <div className="py-2 flex items-center gap-2">
          <Checkbox id={`verified`} />
          <label
            htmlFor={`verified`}
            className="text-base font-normal text-dark leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Verified only
          </label>
        </div>

        <Select>
          <SelectTrigger className="w-[180px] h-[35px]">
            <SelectValue placeholder="Featured" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="best-match">Best match</SelectItem>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="high-rated">High rated</SelectItem>
            <SelectItem value="cheap-first">Cheap first</SelectItem>
          </SelectContent>
        </Select>

        <div className="border border-gray-300 rounded-md flex divide-x-1 divide-gray-300">
          <button
            type="button"
            onClick={() => setView("grid-view")}
            className={cn(
              "h-[35px] w-[35px] flex items-center justify-center",
              view === "grid-view" ? "bg-gray-200" : ""
            )}
          >
            <GridView />
          </button>
          <button
            type="button"
            onClick={() => setView("list-view")}
            className={cn(
              "h-[35px] w-[35px] flex items-center justify-center",
              view === "list-view" ? "bg-gray-200" : ""
            )}
          >
            <ListView />
          </button>
        </div>
      </div>
    </div>
  );
};
