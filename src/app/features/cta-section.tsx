import React from "react";
import { Mail } from "../../components/icons";
import { Button } from "../../components/ui/button";

type Props = {};
export const CTASection = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-10 space-y-3">
      <h1 className="text-xl font-semibold">Subscribe on our newsletter</h1>
      <p className="text-gray-800 text-center">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      <div className="flex gap-5 ">
        <div className="bg-white border border-gray-300 rounded-lg w-[274px] flex items-center gap-2 px-2">
          <Mail className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            className="py-2 bg-transparent placeholder:text-gray-500 w-full outline-none border-0"
            placeholder="Email"
          />
        </div>
        <Button variant="gradient">Subscribe</Button>
      </div>
    </section>
  );
};
