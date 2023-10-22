import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};
export const TotalCard = (props: Props) => {
  return (
    <div className="lg:w-[320px] shrink-0 space-y-3">
      <div className=" bg-white border border-gray-300 rounded-md p-3">
        <p className="">Have a coupon?</p>

        <div className="flex border border-gray-300 rounded-md divide-x-1 divide-gray-300 mt-3">
          <input
            type="text"
            className="outline-none p-1.5 bg-transparent"
            placeholder="Add coupon"
          />
          <button className="text-center text-primary p-1.5  w-full font-medium">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-300 rounded-md p-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Subtotal:</p>
          <p className="text-gray-500">$1403.97</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Discount:</p>
          <p className="text-red"> - $60.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Tax:</p>
          <p className="text-green">+ $14.00</p>
        </div>

        <hr className="h-[1px] bg-gray-300 my-3" />
        <div className="flex items-center justify-between">
          <p className="text-dark font-semibold">Total:</p>
          <p className="text-dark text-xl font-semibold">+$1357.97</p>
        </div>

        <Button className="bg-green hover:bg-green/90 text-white w-full my-5 py-5">
          Checkout
        </Button>
      </div>
    </div>
  );
};
