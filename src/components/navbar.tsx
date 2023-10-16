/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ExpandMore, Menu } from "./icons";

type Props = {};
export const Navbar = (props: Props) => {
  return (
    <div className="page-center px-5  lg:px-10 py-3 border-y border-gray-200 flex justify-between items-center">
      <div className="space-x-8 flex items-center">
        <MenuCard label="All category" showMenu />
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
};

const MenuCard = ({
  showMore = false,
  image,
  label,
  showMenu,
}: MenuCardProps) => (
  <div className="space-x-2 flex items-center cursor-pointer">
    {showMenu ? <Menu className="text-dark w-6 h-6" /> : null}
    <p className="text-base text-dark font-medium">{label}</p>

    {image ? <img src={image} alt="" className="w-[22px] h-[16px]" /> : null}
    {showMore ? <ExpandMore className="h-6 w-6 text-gray-500" /> : null}
  </div>
);
