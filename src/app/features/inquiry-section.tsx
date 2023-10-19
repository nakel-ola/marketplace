import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {};
export const InquirySection = (props: Props) => {
  return (
    <div className="bg-warehouse bg-no-repeat bg-cover bg-center lg:h-[400px] my-5 rounded-md p-5 lg:p-8 flex flex-col lg:flex-row justify-between">
      <div className="lg:max-w-lg">
        <p className="text-3xl font-semibold text-white">
          An easy way to send requests to all suppliers
        </p>
        <p className="text-xs text-white font-normal py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="w-full lg:w-[491px] h-full bg-white rounded-md p-5 mt-4 lg:mt-0">
        <p className="text-dark text-lg font-semibold">
          Send quote to suppliers
        </p>

        <form action="" className="space-y-5 mt-5">
          <Input placeholder="What item you need?" />
          <Textarea placeholder="Type more details" />
          <div className="flex gap-2">
            <Input placeholder="Qty" className="w-[180px]" />

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pcs" defaultValue="Pcs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pcs">Pcs</SelectItem>
                <SelectItem value="litres">Litres</SelectItem>
                <SelectItem value="kgs">Kgs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button variant="gradient">Send inquiry</Button>
        </form>
      </div>
    </div>
  );
};
