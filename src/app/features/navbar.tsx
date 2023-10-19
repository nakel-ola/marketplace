"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ExpandMore, Menu } from "../../components/icons";

type Props = {};
export const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="page-center w-[calc(100%-10px)] lg:w-[calc(100%-80px)] py-1 border-y border-gray-300 hidden lg:flex justify-between items-center">
      <div className="space-x-8 flex items-center">
        <MenuCard label="All category" showMenu />
        <Select>
          <SelectTrigger className="bg-transparent border-0 ring-0 focus:ring-0 focus:ring-offset-0 w-fit space-x-2 text-base text-dark font-medium">
            <SelectValue
              placeholder="Pages"
              defaultValue="pages"
              className="text-base text-dark font-medium"
            />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="home" onClick={() => router.push("/")}>
              Home
            </SelectItem>
            <SelectItem
              value="list-view"
              onClick={() => router.push("/list-view")}
            >
              List view
            </SelectItem>
          </SelectContent>
        </Select>
        <MenuCard label="Hot offers" />
        <MenuCard label="Gift boxes" />
        <MenuCard label="Projects" />
        <MenuCard label="Menu item" />
        <MenuCard label="Help" showMore />
      </div>
      <div className="space-x-8 flex items-center">
        <MenuCard label="English, USD" showMore />
        <MenuCard
          label="Ship to"
          image="/images/316e46059ae904e8e3eb3ce29bd44599.png"
          showMore
        />
      </div>
    </div>
  );
};

type MenuCardProps = {
  showMore?: boolean;
  showMenu?: boolean;
  image?: string;
  label: string;
  onClick?: () => void;
};

const MenuCard = ({
  showMore = false,
  image,
  label,
  showMenu,
  onClick,
}: MenuCardProps) => (
  <div onClick={onClick} className="space-x-2 flex items-center cursor-pointer">
    {showMenu ? <Menu className="text-dark w-6 h-6" /> : null}
    <p className="text-base text-dark font-medium">{label}</p>

    {image ? <img src={image} alt="" className="w-[22px] h-[16px]" /> : null}
    {showMore ? <ExpandMore className="h-6 w-6 text-gray-500" /> : null}
  </div>
);
