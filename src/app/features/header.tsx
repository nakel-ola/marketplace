/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  FavoriteFill,
  Menu,
  MessageFill,
  Person,
  PersonFill,
  ShoppingCart,
  ShoppingCartFill,
} from "../../components/icons";
import { IconButton } from "../../components/ui/icon-button";
import { MobileSearchBar } from "./mobile-search-bar";
import { MobileMenu } from "./mobile-tabs";
import { Navbar } from "./navbar";
import { SearchBar } from "./search-bar";

type Props = {};
export const Header = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="page-center w-[calc(100%-10px)] lg:w-[calc(100%-80px)] py-3 flex justify-between items-center">
        <div className="flex">
          <IconButton className="lg:hidden">
            <Menu className="h-8 w-8 text-dark" />
          </IconButton>

          <Link href="/" className="w-[150px] h-[40px]">
            <img src="/logo-colored.svg" alt="" className="h-full w-full" />
          </Link>
        </div>

        <SearchBar />

        <div className="hidden lg:flex gap-5">
          {items.map(({ Icon, label }, index) => (
            <button
              key={index}
              className="text-gray-500 flex items-center justify-center flex-col"
            >
              <Icon className="h-[20px] w-[20px]" />
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>

        <div className="flex lg:hidden gap-5">
          <IconButton>
            <ShoppingCart className="h-8 w-8 text-dark" />
          </IconButton>
          <IconButton>
            <Person className="h-8 w-8 text-dark" />
          </IconButton>
        </div>
      </div>

      <MobileSearchBar />

      <MobileMenu />

      <Navbar />
    </div>
  );
};

const items = [
  {
    Icon: PersonFill,
    label: "Profile",
  },
  {
    Icon: MessageFill,
    label: "Message",
  },
  {
    Icon: FavoriteFill,
    label: "Orders",
  },
  {
    Icon: ShoppingCartFill,
    label: "My Cart",
  },
];
